import { spawn } from "node:child_process";
import readline from "node:readline";

export const RuntimeMessageType = {
  ASSISTANT: "assistant",
  PLAN: "plan",
  TASK_FINISH: "task_finish",
  EXIT_PLAN_MODE: "exit_plan_mode",
  TOOL_CALL: "tool_call",
  ERROR: "error",
  WARNING: "warning",
  STATUS: "status",
  REASONING: "reasoning",
};

const ASSISTANT_DELTA_FLUSH_MS = 120;
const ASSISTANT_DELTA_FLUSH_CHARS = 160;

function readPositiveIntegerEnv(name) {
  const raw = process.env[name];
  if (raw == null || raw === "") return null;
  const value = Number.parseInt(raw, 10);
  return Number.isFinite(value) && value > 0 ? value : null;
}

class AsyncEventQueue {
  constructor() {
    this.items = [];
    this.waiters = [];
    this.closed = false;
    this.error = null;
  }

  push(item) {
    if (this.closed) return;
    if (this.waiters.length > 0) {
      const resolve = this.waiters.shift();
      resolve({ value: item, done: false });
      return;
    }
    this.items.push(item);
  }

  fail(error) {
    this.closed = true;
    this.error = error instanceof Error ? error : new Error(String(error));
    while (this.waiters.length > 0) {
      const resolve = this.waiters.shift();
      resolve({ value: undefined, done: true });
    }
  }

  close() {
    if (this.closed) return;
    this.closed = true;
    while (this.waiters.length > 0) {
      const resolve = this.waiters.shift();
      resolve({ value: undefined, done: true });
    }
  }

  async next() {
    if (this.items.length > 0) {
      return { value: this.items.shift(), done: false };
    }
    if (this.closed) {
      if (this.error) throw this.error;
      return { value: undefined, done: true };
    }
    return new Promise((resolve) => {
      this.waiters.push(resolve);
    });
  }

  async *iterate() {
    while (true) {
      const next = await this.next();
      if (next.done) return;
      yield next.value;
    }
  }
}

function buildCodexInstructions(options) {
  const sessionSettings = options?.sessionSettings || {};
  return [sessionSettings.system_prompt || "", sessionSettings.append_system_prompt || ""]
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean)
    .join("\n\n");
}

function normalizePlanNotification(params) {
  return {
    type: RuntimeMessageType.PLAN,
    itemId: typeof params?.itemId === "string" ? params.itemId : "",
    entries: Array.isArray(params?.plan)
      ? params.plan.map((step) => ({
          id: typeof step?.id === "string" ? step.id : "",
          title: typeof step?.title === "string" ? step.title : "",
          content:
            typeof step?.step === "string"
              ? step.step
              : typeof step?.content === "string"
                ? step.content
                : typeof step?.title === "string"
                  ? step.title
                  : "",
          status: typeof step?.status === "string" ? step.status : "pending",
          priority: typeof step?.priority === "string" ? step.priority : "",
          details: typeof step?.details === "string" ? step.details : "",
        }))
      : [],
    explanation: typeof params?.explanation === "string" ? params.explanation : "",
  };
}

function normalizePlanDeltaNotification(params) {
  return {
    type: RuntimeMessageType.PLAN,
    entries: [],
    explanation: typeof params?.delta === "string" ? params.delta : "",
    incremental: true,
    itemId: typeof params?.itemId === "string" ? params.itemId : "",
  };
}

function toolStatusFromItem(item, lifecycle = "completed") {
  if (lifecycle === "started") return "pending";
  if (!item || typeof item !== "object") return "completed";
  switch (item.type) {
    case "commandExecution":
      return item.status === "failed" ? "failed" : "completed";
    case "fileChange":
      return item.status === "failed" ? "failed" : "completed";
    case "mcpToolCall":
    case "dynamicToolCall":
      return item.status === "failed" ? "failed" : "completed";
    case "collabAgentToolCall":
      return item.status === "failed" ? "failed" : "completed";
    default:
      return "completed";
  }
}

function normalizeTurnError(error) {
  if (!error || typeof error !== "object") return null;
  return {
    code: error.code,
    message: typeof error.message === "string" ? error.message : "",
    details: error.details ?? null,
  };
}

function normalizeErrorNotification(params) {
  const error = normalizeTurnError(params?.error);
  return {
    type: RuntimeMessageType.ERROR,
    code: error?.code,
    message: error?.message || "codex runtime error",
    details: error?.details,
    willRetry: Boolean(params?.willRetry),
    threadId: typeof params?.threadId === "string" ? params.threadId : "",
    turnId: typeof params?.turnId === "string" ? params.turnId : "",
  };
}

function normalizeWarningNotification(kind, params) {
  return {
    type: RuntimeMessageType.WARNING,
    kind,
    title:
      typeof params?.summary === "string" && params.summary.trim()
        ? params.summary.trim()
        : kind === "deprecation"
          ? "Deprecation notice"
          : "Configuration warning",
    details:
      typeof params?.details === "string" && params.details.trim()
        ? params.details.trim()
        : "",
    path: typeof params?.path === "string" ? params.path : "",
    range: params?.range ?? null,
  };
}

function normalizeStatusNotification(kind, params) {
  if (kind === "thread_status_changed") {
    const status =
      typeof params?.status === "string" && params.status.trim()
        ? params.status.trim()
        : typeof params?.thread?.status === "string" && params.thread.status.trim()
          ? params.thread.status.trim()
          : "";
    if (!status) return null;
    return {
      type: RuntimeMessageType.STATUS,
      kind,
      title: "Thread status",
      message: status,
      threadId: typeof params?.threadId === "string" ? params.threadId : "",
    };
  }

  if (kind === "thread_compacted") {
    return {
      type: RuntimeMessageType.STATUS,
      kind,
      title: "Thread compacted",
      message: "Codex compacted the thread context to continue the session.",
      threadId: typeof params?.threadId === "string" ? params.threadId : "",
      turnId: typeof params?.turnId === "string" ? params.turnId : "",
    };
  }

  if (kind === "model_rerouted") {
    const fromModel = typeof params?.fromModel === "string" ? params.fromModel : "";
    const toModel = typeof params?.toModel === "string" ? params.toModel : "";
    return {
      type: RuntimeMessageType.STATUS,
      kind,
      title: "Model rerouted",
      message: [fromModel, toModel].filter(Boolean).join(" -> ") || "model changed",
      details: typeof params?.reason === "string" ? params.reason : "",
      threadId: typeof params?.threadId === "string" ? params.threadId : "",
      turnId: typeof params?.turnId === "string" ? params.turnId : "",
    };
  }

  if (kind === "token_usage_updated") {
    return {
      type: RuntimeMessageType.STATUS,
      kind,
      title: "Token usage",
      message: "Token usage updated",
      details: params?.tokenUsage ?? null,
      threadId: typeof params?.threadId === "string" ? params.threadId : "",
      turnId: typeof params?.turnId === "string" ? params.turnId : "",
    };
  }

  if (kind === "skills_changed") {
    return {
      type: RuntimeMessageType.STATUS,
      kind,
      title: "Skills changed",
      message: "Codex reported a skills catalog update.",
      details: params ?? null,
    };
  }

  return {
    type: RuntimeMessageType.STATUS,
    kind,
    title: "Runtime status",
    message: "",
    details: params ?? null,
  };
}

function normalizeReasoningNotification(kind, params) {
  return {
    type: RuntimeMessageType.REASONING,
    kind,
    itemId: typeof params?.itemId === "string" ? params.itemId : "",
    summaryIndex: Number.isFinite(params?.summaryIndex) ? params.summaryIndex : null,
    delta: typeof params?.delta === "string" ? params.delta : "",
  };
}

function normalizeToolCallProgress(itemId, output, meta = {}) {
  if (typeof itemId !== "string" || !itemId.trim()) return null;
  return {
    type: RuntimeMessageType.TOOL_CALL,
    id: itemId.trim(),
    status: "pending",
    output: typeof output === "string" ? output : "",
    ...meta,
  };
}

function normalizeThreadItemNotification(item) {
  if (!item || typeof item !== "object") return null;

  if (item.type === "agentMessage") {
    return {
      type: RuntimeMessageType.ASSISTANT,
      chunk: {
        text: typeof item.text === "string" ? item.text : "",
      },
    };
  }

  if (item.type === "plan") {
    return {
      type: RuntimeMessageType.PLAN,
      itemId: typeof item.id === "string" ? item.id : "",
      entries: [
        {
          content: typeof item.text === "string" ? item.text : "",
          status: "completed",
        },
      ],
      explanation: "",
    };
  }

  if (item.type === "reasoning") {
    const summary = Array.isArray(item.summary) ? item.summary.filter((entry) => typeof entry === "string") : [];
    const content = Array.isArray(item.content) ? item.content.filter((entry) => typeof entry === "string") : [];
    return {
      type: RuntimeMessageType.REASONING,
      kind: summary.length > 0 ? "summary" : "detail",
      itemId: typeof item.id === "string" ? item.id : "",
      delta: [...summary, ...content].join("\n"),
    };
  }

  return null;
}

export function normalizeToolCallItem(item, lifecycle = "completed") {
  if (!item || typeof item !== "object") return null;

  switch (item.type) {
    case "commandExecution":
      return {
        type: RuntimeMessageType.TOOL_CALL,
        id: item.id,
        label: "Shell",
        toolName: "run_shell_command",
        status: toolStatusFromItem(item, lifecycle),
        args: {
          command: item.command,
          cwd: item.cwd,
        },
        output: item.aggregatedOutput || "",
        exitCode: item.exitCode,
        durationMs: item.durationMs,
      };
    case "fileChange":
      return {
        type: RuntimeMessageType.TOOL_CALL,
        id: item.id,
        label: "Apply Patch",
        toolName: "apply_patch",
        status: toolStatusFromItem(item, lifecycle),
        args: {
          changes: item.changes,
        },
      };
    case "mcpToolCall":
      return {
        type: RuntimeMessageType.TOOL_CALL,
        id: item.id,
        label: item.tool || "MCP Tool",
        toolName: item.tool || "mcp_tool_call",
        status: toolStatusFromItem(item, lifecycle),
        args: {
          server: item.server,
          arguments: item.arguments,
        },
        output: item.result ? JSON.stringify(item.result, null, 2) : item.error ? JSON.stringify(item.error, null, 2) : "",
        durationMs: item.durationMs,
      };
    case "dynamicToolCall":
      return {
        type: RuntimeMessageType.TOOL_CALL,
        id: item.id,
        label: item.tool || "Tool",
        toolName: item.tool || "dynamic_tool_call",
        status: toolStatusFromItem(item, lifecycle),
        args: item.arguments || {},
        output: Array.isArray(item.contentItems) ? JSON.stringify(item.contentItems, null, 2) : "",
        durationMs: item.durationMs,
      };
    case "collabAgentToolCall":
      return {
        type: RuntimeMessageType.TOOL_CALL,
        id: item.id,
        label: item.tool || "Collab",
        toolName: item.tool || "collab_agent",
        status: toolStatusFromItem(item, lifecycle),
        args: {
          senderThreadId: item.senderThreadId,
          receiverThreadIds: item.receiverThreadIds,
          prompt: item.prompt,
          model: item.model,
          reasoningEffort: item.reasoningEffort,
        },
      };
    case "webSearch":
      return {
        type: RuntimeMessageType.TOOL_CALL,
        id: item.id,
        label: "Web Search",
        toolName: "web_search",
        status: lifecycle === "started" ? "pending" : "completed",
        args: {
          query: item.query,
          action: item.action,
        },
      };
    case "imageView":
      return {
        type: RuntimeMessageType.TOOL_CALL,
        id: item.id,
        label: "Image View",
        toolName: "image_view",
        status: lifecycle === "started" ? "pending" : "completed",
        args: {
          path: item.path,
        },
      };
    default:
      return null;
  }
}

class CodexAppServerAdapter {
  constructor(options) {
    this.options = options || {};
    this.child = null;
    this.readline = null;
    this.connected = false;
    this.pendingRequests = new Map();
    this.requestSeq = 1;
    this.threadId = "";
    this.currentTurnId = "";
    this.pendingAssistantDelta = "";
    this.assistantDeltaFlushTimer = null;
    this.assistantOutputSuppressed = false;
    this.assistantDeltaItemIds = new Set();
    this.assistantDeltaWithoutItemId = false;
    this.queue = new AsyncEventQueue();
    this.shuttingDown = false;
  }

  useNativeHistory() {
    return true;
  }

  getThreadId() {
    return this.threadId || "";
  }

  setThreadId(threadId) {
    this.threadId = typeof threadId === "string" ? threadId.trim() : "";
    this.currentTurnId = "";
  }

  isConnected() {
    return Boolean(this.connected && this.child && !this.child.killed);
  }

  resolveThreadCompactionParams() {
    const threadParams = {};
    const compactionOptions = this.options?.compaction || {};
    const configCompactPrompt =
      typeof compactionOptions?.compactPrompt === "string" && compactionOptions.compactPrompt.trim()
        ? compactionOptions.compactPrompt.trim()
        : "";
    const configAutoCompactTokenLimit =
      Number.isFinite(compactionOptions?.autoCompactTokenLimit) && compactionOptions.autoCompactTokenLimit > 0
        ? compactionOptions.autoCompactTokenLimit
        : null;
    const compactPrompt = process.env.NIXOS_AGENT_COMPACT_PROMPT;
    const autoCompactTokenLimit = readPositiveIntegerEnv("NIXOS_AGENT_AUTO_COMPACT_TOKEN_LIMIT");
    const resolvedCompactPrompt =
      typeof compactPrompt === "string" && compactPrompt.trim() ? compactPrompt.trim() : configCompactPrompt;
    const resolvedAutoCompactTokenLimit = autoCompactTokenLimit || configAutoCompactTokenLimit;

    if (resolvedCompactPrompt) {
      threadParams.compact_prompt = resolvedCompactPrompt;
    }
    if (resolvedAutoCompactTokenLimit) {
      threadParams.model_auto_compact_token_limit = resolvedAutoCompactTokenLimit;
    }

    return threadParams;
  }

  async connect() {
    if (this.isConnected()) return;
    if (this.queue?.closed) {
      this.queue = new AsyncEventQueue();
    }
    this.shuttingDown = false;

    this.child = spawn("codex", ["app-server", "--listen", "stdio://"], {
      cwd: this.options?.cwd || process.cwd(),
      stdio: ["pipe", "pipe", "pipe"],
    });

    this.child.on("error", (error) => {
      this.queue.fail(error);
      this.rejectPending(error);
    });
    this.child.on("exit", (code, signal) => {
      this.connected = false;
      if (this.shuttingDown) {
        this.queue.close();
        this.pendingRequests.clear();
        return;
      }
      const message = signal ? `codex app-server exited with signal ${signal}` : `codex app-server exited with code ${code}`;
      this.queue.fail(new Error(message));
      this.rejectPending(new Error(message));
    });

    this.readline = readline.createInterface({ input: this.child.stdout });
    this.readline.on("line", (line) => {
      this.handleProtocolLine(line);
    });

    let stderrBuffer = "";
    this.child.stderr.on("data", (chunk) => {
      stderrBuffer += chunk.toString("utf8");
    });

    const initializeResult = await this.request("initialize", {
      clientInfo: {
        name: "nixos_agent",
        title: "NixOS Agent",
        version: "0.1.0",
      },
      capabilities: {
        experimentalApi: true,
      },
    });

    if (!initializeResult) {
      throw new Error(stderrBuffer || "initialize codex app-server failed");
    }

    this.notify("initialized", {});

    const threadParams = {
      model: process.env.NIXOS_AGENT_MODEL || null,
      cwd: this.options?.cwd || process.cwd(),
      approvalPolicy: "never",
      sandbox: process.env.NIXOS_AGENT_SANDBOX || "danger-full-access",
      developerInstructions: buildCodexInstructions(this.options) || null,
      persistExtendedHistory: true,
    };
    Object.assign(threadParams, this.resolveThreadCompactionParams());

    let threadResult;
    if (this.threadId) {
      try {
        threadResult = await this.request("thread/resume", {
          threadId: this.threadId,
          ...threadParams,
        });
      } catch {
        this.threadId = "";
      }
    }
    if (!threadResult) {
      threadResult = await this.request("thread/start", {
        ...threadParams,
        experimentalRawEvents: false,
      });
    }

    this.threadId = threadResult?.thread?.id || "";
    if (!this.threadId) {
      throw new Error(stderrBuffer || "codex app-server did not return a thread id");
    }

    this.connected = true;
  }

  async disconnect() {
    this.flushPendingAssistantDelta();
    this.connected = false;
    this.currentTurnId = "";
    this.shuttingDown = true;
    if (this.readline) {
      this.readline.close();
      this.readline = null;
    }
    if (this.child && !this.child.killed) {
      const exitingChild = this.child;
      await new Promise((resolve) => {
        exitingChild.once("exit", resolve);
        exitingChild.kill("SIGTERM");
      });
    }
    this.child = null;
    this.queue.close();
    this.pendingRequests.clear();
  }

  takeBufferedAssistantText() {
    this.clearAssistantDeltaFlushTimer();
    let assistantText = this.pendingAssistantDelta;
    this.pendingAssistantDelta = "";
    if (Array.isArray(this.queue?.items) && this.queue.items.length > 0) {
      const retained = [];
      for (const item of this.queue.items) {
        if (item?.type === RuntimeMessageType.ASSISTANT && typeof item?.chunk?.text === "string") {
          assistantText += item.chunk.text;
          continue;
        }
        retained.push(item);
      }
      this.queue.items = retained;
    }
    return assistantText;
  }

  prepareForInterrupt() {
    const assistantText = this.takeBufferedAssistantText();
    this.assistantOutputSuppressed = true;
    return assistantText;
  }

  async interrupt() {
    if (!this.threadId || !this.currentTurnId) return;
    await this.request("turn/interrupt", {
      threadId: this.threadId,
      turnId: this.currentTurnId,
    });
  }

  async readThread() {
    if (!this.threadId) {
      return null;
    }
    const response = await this.request("thread/read", {
      threadId: this.threadId,
      includeTurns: true,
    });
    return response?.thread || null;
  }

  clearAssistantDeltaFlushTimer() {
    if (this.assistantDeltaFlushTimer) {
      clearTimeout(this.assistantDeltaFlushTimer);
      this.assistantDeltaFlushTimer = null;
    }
  }

  resetAssistantDeltaTracking() {
    this.assistantDeltaItemIds.clear();
    this.assistantDeltaWithoutItemId = false;
  }

  flushPendingAssistantDelta() {
    this.clearAssistantDeltaFlushTimer();
    if (!this.pendingAssistantDelta) {
      return;
    }
    if (this.assistantOutputSuppressed) {
      this.pendingAssistantDelta = "";
      return;
    }
    this.queue.push({
      type: RuntimeMessageType.ASSISTANT,
      chunk: {
        text: this.pendingAssistantDelta,
      },
    });
    this.pendingAssistantDelta = "";
  }

  flushCompletedAssistantLines() {
    if (!this.pendingAssistantDelta) {
      return false;
    }
    const lastNewlineIndex = this.pendingAssistantDelta.lastIndexOf("\n");
    if (lastNewlineIndex < 0) {
      return false;
    }
    const completedLines = this.pendingAssistantDelta.slice(0, lastNewlineIndex + 1);
    const trailingFragment = this.pendingAssistantDelta.slice(lastNewlineIndex + 1);
    this.clearAssistantDeltaFlushTimer();
    if (this.assistantOutputSuppressed) {
      this.pendingAssistantDelta = trailingFragment;
      return true;
    }
    this.queue.push({
      type: RuntimeMessageType.ASSISTANT,
      chunk: {
        text: completedLines,
      },
    });
    this.pendingAssistantDelta = trailingFragment;
    return true;
  }

  bufferAssistantDelta(delta) {
    if (!delta) return;
    this.pendingAssistantDelta += delta;
    if (this.flushCompletedAssistantLines()) {
      if (!this.pendingAssistantDelta) {
        return;
      }
    }
    if (this.pendingAssistantDelta.length >= ASSISTANT_DELTA_FLUSH_CHARS) {
      this.flushPendingAssistantDelta();
      return;
    }
    if (!this.assistantDeltaFlushTimer) {
      this.assistantDeltaFlushTimer = setTimeout(() => {
        this.assistantDeltaFlushTimer = null;
        this.flushPendingAssistantDelta();
      }, ASSISTANT_DELTA_FLUSH_MS);
    }
  }

  async sendMessage(text, historyText, inputItems = []) {
    this.assistantOutputSuppressed = false;
    const finalText = typeof text === "string" && text.trim() ? text.trim() : historyText;
    const items = Array.isArray(inputItems) ? inputItems.filter((item) => item && typeof item === "object") : [];
    const finalInput =
      items.length > 0
        ? items
        : [
            {
              type: "text",
              text: finalText,
              text_elements: [],
            },
          ];

    const response = await this.request("turn/start", {
      threadId: this.threadId,
      input: finalInput,
    });
    this.currentTurnId = response?.turn?.id || this.currentTurnId;
  }

  async *receiveMessages() {
    yield* this.queue.iterate();
  }

  rejectPending(error) {
    for (const pending of this.pendingRequests.values()) {
      pending.reject(error);
    }
    this.pendingRequests.clear();
  }

  request(method, params) {
    const id = this.requestSeq++;
    return new Promise((resolve, reject) => {
      this.pendingRequests.set(id, { resolve, reject });
      this.writeMessage({ method, id, params });
    });
  }

  notify(method, params) {
    this.writeMessage({ method, params });
  }

  respond(id, result) {
    this.writeMessage({ id, result });
  }

  respondError(id, message) {
    this.writeMessage({
      id,
      error: {
        code: -32000,
        message,
      },
    });
  }

  writeMessage(payload) {
    if (!this.child?.stdin?.writable) {
      throw new Error("codex app-server stdin is not writable");
    }
    this.child.stdin.write(`${JSON.stringify(payload)}\n`);
  }

  handleProtocolLine(line) {
    if (!line.trim()) return;

    let message;
    try {
      message = JSON.parse(line);
    } catch {
      return;
    }

    if (message && Object.prototype.hasOwnProperty.call(message, "id") && !message.method) {
      const pending = this.pendingRequests.get(message.id);
      if (!pending) return;
      this.pendingRequests.delete(message.id);
      if (message.error) {
        pending.reject(new Error(message.error.message || "codex app-server request failed"));
      } else {
        pending.resolve(message.result);
      }
      return;
    }

    if (message?.method && Object.prototype.hasOwnProperty.call(message, "id")) {
      this.handleServerRequest(message);
      return;
    }

    if (message?.method) {
      this.handleNotification(message);
    }
  }

  handleServerRequest(message) {
    if (message.method === "item/tool/requestUserInput") {
      this.queue.push({
        type: RuntimeMessageType.WARNING,
        kind: "request_user_input_unsupported",
        title: "Structured user input unsupported",
        details: "This integration no longer exposes request_user_input. Ask the user directly in normal chat instead.",
        raw: message.params ?? null,
      });
      this.respond(message.id, {
        answers: {},
      });
      return;
    }

    if (message.method === "item/tool/call") {
      this.queue.push({
        type: RuntimeMessageType.WARNING,
        kind: "unsupported_dynamic_tool_call",
        title: "Dynamic tool call unsupported",
        details: "Codex requested a dynamic tool call, but this integration does not expose that capability yet.",
        raw: message.params ?? null,
      });
      this.respond(message.id, {
        success: false,
        contentItems: [
          {
            type: "inputText",
            text: "Dynamic tool calls are not yet supported by this integration.",
          },
        ],
      });
      return;
    }

    this.respondError(message.id, `unsupported server request: ${message.method}`);
  }

  handleNotification(message) {
    const { method, params } = message;

    if (method !== "item/agentMessage/delta") {
      this.flushPendingAssistantDelta();
    }

    if (method === "turn/started") {
      this.currentTurnId = params?.turn?.id || this.currentTurnId;
      this.resetAssistantDeltaTracking();
      return;
    }

    if (method === "turn/plan/updated") {
      this.queue.push(normalizePlanNotification(params));
      return;
    }

    if (method === "item/plan/delta") {
      this.queue.push(normalizePlanDeltaNotification(params));
      return;
    }

    if (method === "item/agentMessage/delta") {
      if (this.assistantOutputSuppressed) {
        return;
      }
      if (typeof params?.itemId === "string" && params.itemId.trim()) {
        this.assistantDeltaItemIds.add(params.itemId.trim());
      } else {
        this.assistantDeltaWithoutItemId = true;
      }
      this.bufferAssistantDelta(typeof params?.delta === "string" ? params.delta : "");
      return;
    }

    if (method === "item/started" || method === "item/completed") {
      if (method === "item/completed" && params?.item?.type === "agentMessage") {
        const itemId = typeof params?.item?.id === "string" && params.item.id.trim() ? params.item.id.trim() : "";
        const shouldSuppressCompletedAgentMessage =
          (itemId && this.assistantDeltaItemIds.has(itemId)) ||
          (!itemId && this.assistantDeltaWithoutItemId);

        if (itemId) {
          this.assistantDeltaItemIds.delete(itemId);
        } else {
          this.assistantDeltaWithoutItemId = false;
        }

        if (shouldSuppressCompletedAgentMessage) {
          return;
        }
      }

      const nonToolItem = normalizeThreadItemNotification(params?.item);
      if (nonToolItem) {
        this.queue.push(nonToolItem);
        return;
      }
      const item = normalizeToolCallItem(params?.item, method === "item/started" ? "started" : "completed");
      if (item) {
        this.queue.push(item);
      }
      return;
    }

    if (method === "item/commandExecution/outputDelta" || method === "command/exec/outputDelta") {
      const item = normalizeToolCallProgress(params?.itemId, params?.delta, {
        label: "Shell",
        toolName: "run_shell_command",
      });
      if (item) {
        this.queue.push(item);
      }
      return;
    }

    if (method === "item/fileChange/outputDelta") {
      const item = normalizeToolCallProgress(params?.itemId, params?.delta, {
        label: "Apply Patch",
        toolName: "apply_patch",
      });
      if (item) {
        this.queue.push(item);
      }
      return;
    }

    if (method === "item/mcpToolCall/progress") {
      const item = normalizeToolCallProgress(params?.itemId, params?.message, {
        label: "MCP Tool",
        toolName: "mcp_tool_call",
      });
      if (item) {
        this.queue.push(item);
      }
      return;
    }

    if (method === "item/reasoning/summaryTextDelta" || method === "item/reasoning/textDelta") {
      this.queue.push(
        normalizeReasoningNotification(
          method === "item/reasoning/summaryTextDelta" ? "summary" : "detail",
          params
        )
      );
      return;
    }

    if (method === "rawResponseItem/completed") {
      return;
    }

    if (method === "error") {
      this.queue.push(normalizeErrorNotification(params));
      return;
    }

    if (method === "configWarning" || method === "deprecationNotice") {
      this.queue.push(normalizeWarningNotification(method === "configWarning" ? "config" : "deprecation", params));
      return;
    }

    if (method === "thread/status/changed") {
      const notification = normalizeStatusNotification("thread_status_changed", params);
      if (notification) {
        this.queue.push(notification);
      }
      return;
    }

    if (method === "thread/tokenUsage/updated") {
      this.queue.push(normalizeStatusNotification("token_usage_updated", params));
      return;
    }

    if (method === "thread/compacted") {
      this.queue.push(normalizeStatusNotification("thread_compacted", params));
      return;
    }

    if (method === "model/rerouted") {
      this.queue.push(normalizeStatusNotification("model_rerouted", params));
      return;
    }

    if (method === "skills/changed") {
      this.queue.push(normalizeStatusNotification("skills_changed", params));
      return;
    }

    if (method === "turn/completed") {
      this.resetAssistantDeltaTracking();
      const status = params?.turn?.status || "completed";
      if (status === "failed") {
        const errorMessage = params?.turn?.error?.message || "Turn failed";
        this.queue.push({
          type: RuntimeMessageType.ASSISTANT,
          chunk: {
            text: errorMessage,
          },
        });
      }
      this.currentTurnId = "";
      this.queue.push({
        type: RuntimeMessageType.TASK_FINISH,
        stopReason: status === "interrupted" ? "interrupted" : status === "failed" ? "failed" : "end_turn",
      });
    }
  }
}

export function createRuntimeClient(options) {
  return new CodexAppServerAdapter(options);
}
