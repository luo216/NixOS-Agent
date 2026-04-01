import { ROLE_CONFIGS } from "./rolePrompts.js";
import fs from "node:fs";
import { EventEmitter } from "node:events";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRuntimeClient, RuntimeMessageType } from "./runtime/clientAdapter.js";
import {
  appendAssistantEvent,
  cloneJson,
  convertThreadToRuntimeHistory,
  createRuntimeAssistantMessage,
  sanitizeRuntimeForTransport,
} from "./clientRegistryHelpers.js";

const SRC_DIR = path.dirname(fileURLToPath(import.meta.url));
const BACKEND_ROOT = path.resolve(SRC_DIR, "..");
const CONFIG_ROOT = path.join(BACKEND_ROOT, "config");
const CLIENT_CONFIG_DIR = path.join(BACKEND_ROOT, "config", "clients");
const PROMPT_CONFIG_DIR = path.join(BACKEND_ROOT, "config", "prompts");
const SKILL_CONFIG_DIR = path.join(BACKEND_ROOT, "config", "skills");
const STATE_ROOT = path.join(BACKEND_ROOT, "data", "state");
const WORKSPACE_STATE_FILE = path.join(STATE_ROOT, "workspace.json");
const RUNTIME_MESSAGE_KIND = "codex";
const RUNTIME_EVENT_TYPE = "codex_event";
const LEGACY_RUNTIME_EVENT_TYPE = ["i", "f", "l", "o", "w", "_event"].join("");

function syncWorkspaceDirectory(sourceRoot, targetRoot) {
  if (!fs.existsSync(sourceRoot)) return;
  fs.mkdirSync(targetRoot, { recursive: true });
  for (const entry of fs.readdirSync(sourceRoot, { withFileTypes: true })) {
    const sourcePath = path.join(sourceRoot, entry.name);
    const targetPath = path.join(targetRoot, entry.name);
    fs.rmSync(targetPath, { recursive: true, force: true });
    fs.cpSync(sourcePath, targetPath, { recursive: true, force: true });
  }
}

function syncWorkspaceCodexAssets(workspaceDir) {
  if (!workspaceDir) return;
  const codexRoot = path.join(workspaceDir, ".codex");
  fs.mkdirSync(codexRoot, { recursive: true });
  syncWorkspaceDirectory(SKILL_CONFIG_DIR, path.join(codexRoot, "skills"));
}


function resolvePromptRefToPath(ref) {
  const trimmed = typeof ref === "string" ? ref.trim() : "";
  if (!trimmed) return "";
  const absPath = path.resolve(CONFIG_ROOT, trimmed);
  const allowedRoot = path.resolve(PROMPT_CONFIG_DIR);
  if (!absPath.startsWith(allowedRoot + path.sep) && absPath !== allowedRoot) {
    const err = new Error(`prompt ref out of range: ${trimmed}`);
    err.code = "PROMPT_REF_INVALID";
    throw err;
  }
  return absPath;
}

function readPromptByRef(ref) {
  const absPath = resolvePromptRefToPath(ref);
  if (!absPath || !fs.existsSync(absPath)) return "";
  return fs.readFileSync(absPath, "utf8").trim();
}

function readClientOptionsFromConfig(clientId) {
  const filePath = path.join(CLIENT_CONFIG_DIR, `${clientId}.json`);
  if (!fs.existsSync(filePath)) {
    const err = new Error(`client config not found: ${filePath}`);
    err.code = "CLIENT_CONFIG_NOT_FOUND";
    throw err;
  }

  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    const err = new Error(`client config parse failed: ${filePath}`);
    err.code = "CLIENT_CONFIG_INVALID";
    err.cause = error;
    throw err;
  }

  const systemPromptFromRef =
    typeof data?.systemPromptRef === "string" ? readPromptByRef(data.systemPromptRef) : "";
  const systemPrompt =
    systemPromptFromRef || (typeof data?.systemPrompt === "string" ? data.systemPrompt.trim() : "");
  if (!systemPrompt) {
    const err = new Error(`client config missing system prompt: ${filePath}`);
    err.code = "CLIENT_CONFIG_INVALID";
    throw err;
  }

  return {
    systemPrompt,
    compactPrompt: typeof data?.compactPrompt === "string" ? data.compactPrompt.trim() : "",
    autoCompactTokenLimit:
      Number.isFinite(data?.autoCompactTokenLimit) && data.autoCompactTokenLimit > 0 ? data.autoCompactTokenLimit : null,
  };
}

function persistClientOptions(clientId, options) {
  fs.mkdirSync(CLIENT_CONFIG_DIR, { recursive: true });
  fs.mkdirSync(PROMPT_CONFIG_DIR, { recursive: true });
  const filePath = path.join(CLIENT_CONFIG_DIR, `${clientId}.json`);
  const systemPromptRelPath = `prompts/${clientId}.system.md`;
  fs.writeFileSync(
    path.join(CONFIG_ROOT, systemPromptRelPath),
    `${(options.systemPrompt || "").trim()}\n`,
    "utf8"
  );
  const payload = {
    clientId,
    systemPromptRef: systemPromptRelPath,
    compactPrompt: typeof options?.compactPrompt === "string" ? options.compactPrompt.trim() : "",
    autoCompactTokenLimit:
      Number.isFinite(options?.autoCompactTokenLimit) && options.autoCompactTokenLimit > 0
        ? options.autoCompactTokenLimit
        : null,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

function createClientRecord(role, workspaceDir, inputOptions, persistedThreadId = "") {
  const addDirs = workspaceDir ? [workspaceDir] : [];
  const normalized = {
    systemPrompt: typeof inputOptions?.systemPrompt === "string" ? inputOptions.systemPrompt.trim() : "",
    compactPrompt: typeof inputOptions?.compactPrompt === "string" ? inputOptions.compactPrompt.trim() : "",
    autoCompactTokenLimit:
      Number.isFinite(inputOptions?.autoCompactTokenLimit) && inputOptions.autoCompactTokenLimit > 0
        ? inputOptions.autoCompactTokenLimit
        : null,
  };
  const options = {
    cwd: workspaceDir || process.cwd(),
    sessionSettings: {
      system_prompt: normalized.systemPrompt,
      add_dirs: addDirs,
    },
    compaction: {
      compactPrompt: normalized.compactPrompt,
      autoCompactTokenLimit: normalized.autoCompactTokenLimit,
    },
  };

  const runtimeClient = createRuntimeClient(options);
  runtimeClient.setThreadId?.(persistedThreadId);

  return {
    id: role.id,
    name: role.name,
    systemPrompt: normalized.systemPrompt,
    options: {
      add_dirs: addDirs,
      compactPrompt: normalized.compactPrompt,
      autoCompactTokenLimit: normalized.autoCompactTokenLimit,
    },
    sdkOptions: options,
    history: [],
    rawEvents: [],
    inFlight: null,
    activeTurnPromise: null,
    status: "idle",
    lastError: null,
    threadId: typeof persistedThreadId === "string" ? persistedThreadId.trim() : "",
    hasThreadTurns: false,
    interruptRequested: false,
    interruptBufferedAssistantText: "",
    client: runtimeClient,
  };
}

function buildInputItems(text, images = []) {
  const normalizedImages = Array.isArray(images) ? images.filter((item) => item?.dataUrl) : [];
  const inputItems = [];
  if (typeof text === "string" && text.trim()) {
    inputItems.push({
      type: "text",
      text: text.trim(),
      text_elements: [],
    });
  }
  for (const image of normalizedImages) {
    inputItems.push({
      type: "image",
      url: image.dataUrl,
      name: image.name,
      mimeType: image.mimeType,
    });
  }
  return {
    inputItems,
    normalizedImages,
  };
}

export class ClientRegistry {
  constructor() {
    this.workspaceDir = "";
    this.pendingActivations = [];
    this.events = new EventEmitter();
    this.clients = new Map(ROLE_CONFIGS.map((role) => [role.id, createClientRecord(role, "", readClientOptionsFromConfig(role.id))]));
  }

  subscribe(listener) {
    this.events.on("state", listener);
    return () => {
      this.events.off("state", listener);
    };
  }

  listClients() {
    return [...this.clients.values()].map((client) => ({
      historyCount: client.history.length,
      id: client.id,
      name: client.name,
      status: client.status,
      options: client.options,
      lastError: client.lastError,
    }));
  }

  buildClientSummary(clientId) {
    return this.listClients().find((item) => item.id === clientId) || null;
  }

  emitClientUpdate(clientId) {
    const client = this.getClient(clientId);
    if (!client) return;
    this.events.emit("state", {
      type: "client_update",
      client: this.buildClientSummary(clientId),
      runtime: this.getClientRuntime(clientId),
    });
  }

  emitWorkspaceUpdate() {
    this.events.emit("state", {
      type: "workspace_update",
      workspace: this.getWorkspaceState(),
      clients: this.listClients(),
      pendingActivations: this.listPendingActivations(),
    });
  }

  getWorkspaceState() {
    return {
      initialized: Boolean(this.workspaceDir),
      directory: this.workspaceDir || null,
    };
  }

  listPendingActivations() {
    return this.pendingActivations
      .filter((item) => !item.consumedAt)
      .map((item) => ({
        id: item.id,
        fromClientId: item.fromClientId,
        toClientId: item.toClientId,
        message: item.message,
        createdAt: item.createdAt,
      }));
  }

  consumePendingActivation(activationId) {
    const item = this.pendingActivations.find((entry) => entry.id === activationId && !entry.consumedAt);
    if (!item) {
      const err = new Error(`Unknown activation: ${activationId}`);
      err.code = "ACTIVATION_NOT_FOUND";
      throw err;
    }
    item.consumedAt = new Date().toISOString();
    this.emitWorkspaceUpdate();
    return {
      ok: true,
      id: item.id,
      toClientId: item.toClientId,
      consumedAt: item.consumedAt,
    };
  }

  persistWorkspaceState() {
    fs.mkdirSync(STATE_ROOT, { recursive: true });
    const payload = {
      workspaceDir: this.workspaceDir || "",
      clients: Object.fromEntries(
        [...this.clients.entries()].map(([clientId, client]) => [
          clientId,
          {
            threadId: client?.threadId || client?.client?.getThreadId?.() || "",
          },
        ])
      ),
      updatedAt: new Date().toISOString(),
    };
    fs.writeFileSync(WORKSPACE_STATE_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  }

  readWorkspaceState() {
    if (!fs.existsSync(WORKSPACE_STATE_FILE)) return { workspaceDir: "", clients: {} };
    try {
      const data = JSON.parse(fs.readFileSync(WORKSPACE_STATE_FILE, "utf8"));
      return {
        workspaceDir: typeof data?.workspaceDir === "string" ? data.workspaceDir.trim() : "",
        clients:
          data?.clients && typeof data.clients === "object" && !Array.isArray(data.clients) ? data.clients : {},
      };
    } catch {
      return { workspaceDir: "", clients: {} };
    }
  }

  async bootstrapFromSavedWorkspace() {
    const saved = this.readWorkspaceState();
    if (!saved.workspaceDir) return { restored: false };
    try {
      await this.setWorkspaceDir(saved.workspaceDir);
      return { restored: true, directory: this.workspaceDir };
    } catch {
      return { restored: false };
    }
  }

  async setWorkspaceDir(directory) {
    const normalized = path.resolve(directory || "");
    if (!normalized || !fs.existsSync(normalized) || !fs.statSync(normalized).isDirectory()) {
      const err = new Error("directory not found");
      err.code = "INVALID_DIRECTORY";
      throw err;
    }

    await this.shutdownAll();
    this.workspaceDir = normalized;
    this.pendingActivations = [];
    syncWorkspaceCodexAssets(normalized);
    const savedState = this.readWorkspaceState();
    const savedThreads =
      savedState.workspaceDir === normalized && savedState.clients && typeof savedState.clients === "object"
        ? savedState.clients
        : {};
    this.clients = new Map(
      ROLE_CONFIGS.map((role) => [
        role.id,
        createClientRecord(
          role,
          normalized,
          readClientOptionsFromConfig(role.id),
          typeof savedThreads?.[role.id]?.threadId === "string" ? savedThreads[role.id].threadId : ""
        ),
      ])
    );
    await this.initializeAll();
    this.persistWorkspaceState();
    this.emitWorkspaceUpdate();

    return this.getWorkspaceState();
  }

  syncWorkspaceCodexAssets() {
    if (!this.workspaceDir) {
      const err = new Error("workspace not initialized");
      err.code = "WORKSPACE_NOT_READY";
      throw err;
    }
    syncWorkspaceCodexAssets(this.workspaceDir);
    return {
      ok: true,
      directory: this.workspaceDir,
      codexDir: path.join(this.workspaceDir, ".codex"),
    };
  }

  getClient(clientId) {
    return this.clients.get(clientId) || null;
  }

  getClientRuntime(clientId) {
    const client = this.getClient(clientId);
    if (!client) return null;
    return sanitizeRuntimeForTransport({
      clientId,
      status: client.status,
      lastError: client.lastError,
      history: cloneJson(client.history),
      inFlight: cloneJson(client.inFlight),
    });
  }

  getClientOptions(clientId) {
    const client = this.getClient(clientId);
    if (!client) return null;
    return {
      id: client.id,
      status: client.status,
      systemPrompt: client.systemPrompt || "",
      addDirs: Array.isArray(client?.options?.add_dirs) ? client.options.add_dirs : [],
    };
  }

  async updateClientOptions(clientId, payload) {
    const client = this.getClient(clientId);
    if (!client) {
      const err = new Error(`Unknown client: ${clientId}`);
      err.code = "CLIENT_NOT_FOUND";
      throw err;
    }

    const role = ROLE_CONFIGS.find((item) => item.id === clientId);
    if (!role) {
      const err = new Error(`Unknown role config: ${clientId}`);
      err.code = "CLIENT_NOT_FOUND";
      throw err;
    }

    const nextOptionInput = {
      systemPrompt: payload?.systemPrompt ?? client.systemPrompt,
      compactPrompt: client.options?.compactPrompt ?? "",
      autoCompactTokenLimit: client.options?.autoCompactTokenLimit ?? null,
    };

    persistClientOptions(clientId, nextOptionInput);
    const savedOptions = readClientOptionsFromConfig(clientId);
    const nextRecord = createClientRecord(role, this.workspaceDir, savedOptions);
    nextRecord.rawEvents = [...client.rawEvents];
    nextRecord.status = "idle";
    nextRecord.lastError = null;

    if (client.client.isConnected()) {
      await client.client.disconnect();
    }

    this.clients.set(clientId, nextRecord);
    await this.ensureConnected(nextRecord);
    this.emitClientUpdate(clientId);

    return {
      ...this.getClientOptions(clientId),
      status: nextRecord.status,
    };
  }

  syncClientThreadState(client) {
    if (!client) return;
    const nextThreadId = client.client.getThreadId?.() || client.threadId || "";
    if (client.threadId !== nextThreadId) {
      client.threadId = nextThreadId;
      this.persistWorkspaceState();
    }
  }

  async refreshClientHistory(client) {
    if (!client) return [];
    this.syncClientThreadState(client);
    if (!client.client.isConnected() || !client.threadId) {
      client.hasThreadTurns = false;
      client.history = [];
      return client.history;
    }

    try {
      const thread = await client.client.readThread();
      client.hasThreadTurns = Array.isArray(thread?.turns) && thread.turns.length > 0;
      client.history = convertThreadToRuntimeHistory(client, thread, RUNTIME_MESSAGE_KIND);
      this.syncClientThreadState(client);
    } catch {
      client.hasThreadTurns = false;
      if (client.history.length === 0) {
        client.history = [];
      }
    }
    return client.history;
  }

  async ensureConnected(client) {
    if (client.client.isConnected()) {
      if (client.status !== "ready") client.status = "ready";
      return;
    }
    client.status = "connecting";
    try {
      await client.client.connect();
      this.syncClientThreadState(client);
      await this.refreshClientHistory(client);
      client.status = "ready";
      client.lastError = null;
    } catch (error) {
      client.status = "error";
      client.lastError = error instanceof Error ? error.message : String(error);
      throw error;
    }
  }

  setInFlight(client, payload) {
    client.inFlight = payload
      ? {
          ...payload,
          updatedAt: new Date().toISOString(),
        }
      : null;
    this.emitClientUpdate(client.id);
  }

  updateInFlight(client, updater) {
    const current = client.inFlight;
    const nextValue = typeof updater === "function" ? updater(current) : current;
    this.setInFlight(client, nextValue);
  }

  async waitForClientTurnToSettle(client, timeoutMs = 8_000) {
    if (!client?.activeTurnPromise) return;
    const activeTurn = client.activeTurnPromise;
    await Promise.race([
      activeTurn.catch(() => {}),
      new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error("interrupt settle timeout"));
        }, timeoutMs);
      }),
    ]);
  }

  applyRuntimeChunk(client, chunk) {
    if (!client || !chunk || typeof chunk !== "object") return;

    if (
      client.interruptRequested &&
      (chunk.type === RUNTIME_EVENT_TYPE || chunk.type === LEGACY_RUNTIME_EVENT_TYPE) &&
      chunk.event?.type !== RuntimeMessageType.TASK_FINISH &&
      chunk.event?.type !== RuntimeMessageType.ERROR
    ) {
      return;
    }

    if ((chunk.type === "user_message" || chunk.type === "answer_message") && chunk.message) {
      this.setInFlight(client, {
        phase: "waiting",
        startedAt: new Date().toISOString(),
        inputMessage: chunk.message,
        assistantMessage: null,
      });
      return;
    }

    if ((chunk.type === RUNTIME_EVENT_TYPE || chunk.type === LEGACY_RUNTIME_EVENT_TYPE) && chunk.event) {
      this.updateInFlight(client, (current) => {
        const base =
          current ||
          {
            phase: "waiting",
            startedAt: new Date().toISOString(),
            inputMessage: null,
            assistantMessage: null,
          };
        const nextAssistant = appendAssistantEvent(
          base.assistantMessage || createRuntimeAssistantMessage(RUNTIME_MESSAGE_KIND),
          chunk.event,
          RUNTIME_MESSAGE_KIND
        );
        let phase = "streaming";
        if (chunk.event.type === RuntimeMessageType.TASK_FINISH) {
          phase = "finishing";
        } else if (base.phase === "interrupting") {
          phase = "interrupting";
        }
        return {
          ...base,
          phase,
          assistantMessage: nextAssistant,
        };
      });
      return;
    }

    if (chunk.type === "done") {
      this.setInFlight(client, null);
    }
  }

  async runTurnStream(clientId, streamFactory) {
    const client = this.getClient(clientId);
    if (!client) {
      const err = new Error(`Unknown client: ${clientId}`);
      err.code = "CLIENT_NOT_FOUND";
      throw err;
    }
    if (client.activeTurnPromise || client.status === "running" || client.status === "connecting") {
      const err = new Error(`Client is busy: ${clientId}`);
      err.code = "CLIENT_BUSY";
      throw err;
    }

    const runner = (async () => {
      try {
        for await (const chunk of streamFactory()) {
          this.applyRuntimeChunk(client, chunk);
        }
      } catch (error) {
        if (client.interruptRequested) {
          client.status = "interrupted";
          client.lastError = null;
          this.updateInFlight(client, (current) =>
            current
              ? {
                  ...current,
                  phase: "interrupted",
                  error: null,
                }
              : null
          );
        } else {
          client.status = "error";
          client.lastError = error instanceof Error ? error.message : String(error);
          this.updateInFlight(client, (current) =>
            current
              ? {
                  ...current,
                  phase: "error",
                  error: client.lastError,
                }
              : null
          );
        }
        this.emitClientUpdate(clientId);
      } finally {
        if (client.interruptRequested && client.status === "interrupting") {
          client.status = "interrupted";
        }
        client.interruptRequested = false;
        client.activeTurnPromise = null;
        this.emitClientUpdate(clientId);
      }
    })();

    client.activeTurnPromise = runner;
    this.emitClientUpdate(clientId);
    runner.catch(() => {});
    return {
      ok: true,
      clientId,
      status: "accepted",
    };
  }

  async startTurn(clientId, payload) {
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      const err = new Error("turn payload is invalid");
      err.code = "INVALID_TURN_PAYLOAD";
      throw err;
    }

    const kind = typeof payload.kind === "string" ? payload.kind.trim() : "";
    if (kind === "user_message") {
      const text = typeof payload.text === "string" ? payload.text.trim() : "";
      const images = Array.isArray(payload.images)
        ? payload.images
            .filter((item) => item && typeof item === "object")
            .map((item, index) => ({
              id: typeof item.id === "string" && item.id.trim() ? item.id.trim() : `image_${Date.now()}_${index}`,
              name: typeof item.name === "string" && item.name.trim() ? item.name.trim() : `pasted-image-${index + 1}`,
              mimeType:
                typeof item.mimeType === "string" && item.mimeType.trim() ? item.mimeType.trim() : "image/png",
              dataUrl: typeof item.dataUrl === "string" ? item.dataUrl.trim() : "",
            }))
            .filter((item) => item.dataUrl.startsWith("data:image/"))
        : [];
      if (!text && images.length === 0) {
        const err = new Error("text is required");
        err.code = "INVALID_TURN_PAYLOAD";
        throw err;
      }
      return this.runTurnStream(clientId, () => this.streamText(clientId, text, images));
    }

    const err = new Error(`Unknown turn kind: ${kind}`);
    err.code = "INVALID_TURN_PAYLOAD";
    throw err;
  }

  async *streamClientMessages(client, onMessage) {
    const receiveMessages = [];
    let assistantText = "";

    for await (const message of client.client.receiveMessages()) {
      receiveMessages.push(message);
      if (message.type === RuntimeMessageType.ASSISTANT && message.chunk?.text) {
        assistantText += message.chunk.text;
      }

      yield {
        type: RUNTIME_EVENT_TYPE,
        event: message,
      };

      if (message.type === RuntimeMessageType.TASK_FINISH || message.type === RuntimeMessageType.EXIT_PLAN_MODE) {
        break;
      }
    }

    return {
      receiveMessages,
      assistantText,
      ...((typeof onMessage === "function" ? onMessage({ receiveMessages, assistantText }) : null) || {}),
    };
  }

  persistAssistantMessage(client, receiveMessages, assistantText) {
    const interruptBufferedAssistantText =
      typeof client?.interruptBufferedAssistantText === "string" ? client.interruptBufferedAssistantText : "";
    const finalAssistantText = `${assistantText || ""}${interruptBufferedAssistantText}`;
    const finalReceiveMessages =
      interruptBufferedAssistantText
        ? [
            ...receiveMessages,
            {
              type: RuntimeMessageType.ASSISTANT,
              chunk: {
                text: interruptBufferedAssistantText,
              },
            },
          ]
        : receiveMessages;

    const assistantMessage = {
      kind: RUNTIME_MESSAGE_KIND,
      createdAt: new Date().toISOString(),
      assistantText: finalAssistantText,
      raw: {
        receiveMessages: finalReceiveMessages,
      },
    };

    client.rawEvents.push(finalReceiveMessages);
    client.history.push(assistantMessage);
    client.status = client.interruptRequested ? "interrupted" : "ready";
    client.interruptBufferedAssistantText = "";

    return {
      assistantMessage,
    };
  }

  async *pipeAssistantStream(client, buildDonePayload) {
    const stream = this.streamClientMessages(client, ({ receiveMessages, assistantText }) =>
      this.persistAssistantMessage(client, receiveMessages, assistantText)
    );

    while (true) {
      const next = await stream.next();
      if (next.done) {
        const donePayload = buildDonePayload(next.value);
        yield donePayload;
        return donePayload;
      }
      yield next.value;
    }
  }

  async *streamText(clientId, text, images = []) {
    if (!this.workspaceDir) {
      const err = new Error("workspace not initialized");
      err.code = "WORKSPACE_NOT_READY";
      throw err;
    }

    const client = this.getClient(clientId);
    if (!client) {
      const err = new Error(`Unknown client: ${clientId}`);
      err.code = "CLIENT_NOT_FOUND";
      throw err;
    }

    await this.ensureConnected(client);
    client.interruptRequested = false;
    client.interruptBufferedAssistantText = "";
    client.status = "running";
    client.lastError = null;
    const { inputItems, normalizedImages } = buildInputItems(text, images);

    const userMessage = {
      kind: "user",
      createdAt: new Date().toISOString(),
      raw: {
        type: "user",
        text,
        images: normalizedImages,
      },
    };
    client.history.push(userMessage);

    yield {
      type: "user_message",
      message: userMessage,
    };

    try {
      await client.client.sendMessage(text, "", inputItems);
      client.hasThreadTurns = true;
      yield* this.pipeAssistantStream(client, (summary) => ({
        type: "done",
        userMessage,
        assistantMessage: summary.assistantMessage,
      }));
    } catch (error) {
      if (client.interruptRequested) {
        client.status = "interrupted";
        client.lastError = null;
      } else {
        client.status = "error";
        client.lastError = error instanceof Error ? error.message : String(error);
      }
      throw error;
    }
  }

  async runEphemeralFix(payload) {
    if (!this.workspaceDir) {
      const err = new Error("workspace not initialized");
      err.code = "WORKSPACE_NOT_READY";
      throw err;
    }
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      const err = new Error("fix payload is invalid");
      err.code = "INVALID_FIX_PAYLOAD";
      throw err;
    }

    const text = typeof payload.text === "string" ? payload.text.trim() : "";
    const images = Array.isArray(payload.images)
      ? payload.images
          .filter((item) => item && typeof item === "object")
          .map((item, index) => ({
            id: typeof item.id === "string" && item.id.trim() ? item.id.trim() : `fix_image_${Date.now()}_${index}`,
            name: typeof item.name === "string" && item.name.trim() ? item.name.trim() : `fix-image-${index + 1}`,
            mimeType:
              typeof item.mimeType === "string" && item.mimeType.trim() ? item.mimeType.trim() : "image/png",
            dataUrl: typeof item.dataUrl === "string" ? item.dataUrl.trim() : "",
          }))
          .filter((item) => item.dataUrl.startsWith("data:image/"))
      : [];

    if (!text && images.length === 0) {
      const err = new Error("text is required");
      err.code = "INVALID_FIX_PAYLOAD";
      throw err;
    }

    const runtimeClient = createRuntimeClient({
      cwd: this.workspaceDir,
      sessionSettings: {
        system_prompt: [
          "You are a one-shot workspace fixer.",
          "Execute the requested repair directly in the current workspace.",
          "Do not ask questions.",
          "Do not load skills unless the user message explicitly requires them.",
          "When the requested fix is complete, stop.",
        ].join("\n"),
        add_dirs: [this.workspaceDir],
      },
    });

    const { inputItems } = buildInputItems(text, images);
    const receiveMessages = [];
    let assistantText = "";

    try {
      await runtimeClient.connect();
      await runtimeClient.sendMessage(text, "", inputItems);

      for await (const message of runtimeClient.receiveMessages()) {
        receiveMessages.push(message);
        if (message.type === RuntimeMessageType.ASSISTANT && message.chunk?.text) {
          assistantText += message.chunk.text;
        }
        if (message.type === RuntimeMessageType.TASK_FINISH || message.type === RuntimeMessageType.EXIT_PLAN_MODE) {
          break;
        }
      }

      return {
        ok: true,
        mode: "ephemeral_fix",
        assistantText,
        raw: {
          receiveMessages,
        },
      };
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      err.code = err.code || "EPHEMERAL_FIX_FAILED";
      throw err;
    } finally {
      try {
        await runtimeClient.disconnect();
      } catch {
        // Ignore disconnect failures for ephemeral fix runs.
      }
    }
  }

  async activateClientMessage(fromClientId, toClientId, message) {
    if (!this.workspaceDir) {
      const err = new Error("workspace not initialized");
      err.code = "WORKSPACE_NOT_READY";
      throw err;
    }

    const allowed = new Set(["planner", "implementer", "worker"]);
    if (!allowed.has(fromClientId) || !allowed.has(toClientId)) {
      const err = new Error("fromClientId/toClientId must be planner|implementer|worker");
      err.code = "INVALID_ACTIVATION_CLIENT";
      throw err;
    }
    const text = typeof message === "string" ? message.trim() : "";
    if (!text) {
      const err = new Error("message is required");
      err.code = "INVALID_ACTIVATION_MESSAGE";
      throw err;
    }

    const fromClient = this.getClient(fromClientId);
    const toClient = this.getClient(toClientId);
    if (!fromClient || !toClient) {
      const err = new Error("from/to client not found");
      err.code = "CLIENT_NOT_FOUND";
      throw err;
    }

    const now = new Date().toISOString();
    const toolMessage = {
      kind: RUNTIME_MESSAGE_KIND,
      createdAt: now,
      assistantText: "",
      raw: {
        receiveMessages: [
          {
            type: "tool_call",
            id: `call_function_activate_${toClientId}_${Date.now()}`,
            label: `Activate ${toClientId}`,
            icon: { type: "emoji", value: "🔧" },
            status: "completed",
            toolName: "activate_agent",
            args: {
              fromClientId,
              toClientId,
              message: text,
            },
            output: `已向 ${toClientId} 发送消息`,
          },
        ],
      },
    };
    fromClient.history.push(toolMessage);
    this.emitClientUpdate(fromClientId);

    const activation = {
      id: `activation_${toClientId}_${Date.now()}`,
      fromClientId,
      toClientId,
      message: text,
      createdAt: now,
      consumedAt: "",
    };
    this.pendingActivations.push(activation);
    this.emitWorkspaceUpdate();

    return {
      ok: true,
      fromClientId,
      toClientId,
      text,
      activationId: activation.id,
      dispatched: true,
    };
  }

  async interruptClient(clientId) {
    const client = this.getClient(clientId);
    if (!client) {
      const err = new Error(`Unknown client: ${clientId}`);
      err.code = "CLIENT_NOT_FOUND";
      throw err;
    }

    try {
      if (client.status === "interrupted") {
        return {
          ok: true,
          clientId,
          status: "interrupted",
        };
      }
      client.interruptRequested = true;
      client.status = "interrupting";
      client.lastError = null;
      this.updateInFlight(client, (current) =>
        current
          ? {
              ...current,
              phase: "interrupting",
            }
          : current
      );
      this.emitClientUpdate(clientId);
      if (!client.activeTurnPromise) {
        client.status = "interrupted";
        client.interruptRequested = false;
        this.emitClientUpdate(clientId);
        return {
          ok: true,
          clientId,
          status: client.status,
        };
      }
      if (client.client.isConnected()) {
        Promise.race([
          client.client.interrupt(),
          new Promise((_, reject) => {
            setTimeout(() => {
              reject(new Error("interrupt timeout"));
            }, 1500);
          }),
        ])
          .catch(() => {})
          .finally(() => {
            const bufferedAssistantText =
              typeof client.client?.prepareForInterrupt === "function" ? client.client.prepareForInterrupt() : "";
            client.interruptBufferedAssistantText = bufferedAssistantText || "";
            if (!bufferedAssistantText) {
              return;
            }
            this.updateInFlight(client, (current) => {
              const base =
                current ||
                {
                  phase: "waiting",
                  startedAt: new Date().toISOString(),
                  inputMessage: null,
                  assistantMessage: null,
                };
              return {
                ...base,
                phase: "interrupting",
                assistantMessage: appendAssistantEvent(
                  base.assistantMessage || createRuntimeAssistantMessage(RUNTIME_MESSAGE_KIND),
                  {
                    type: RuntimeMessageType.ASSISTANT,
                    chunk: {
                      text: bufferedAssistantText,
                    },
                  },
                  RUNTIME_MESSAGE_KIND
                ),
              };
            });
          })
          .finally(async () => {
            await client.client.disconnect().catch(() => {});
            client.status = "interrupted";
            await this.waitForClientTurnToSettle(client).catch(() => {});
            this.emitClientUpdate(clientId);
          });
      } else {
        client.status = "interrupted";
        this.emitClientUpdate(clientId);
      }
      return {
        ok: true,
        clientId,
        status: client.client.isConnected() ? "interrupting" : client.status,
      };
    } catch (error) {
      client.interruptRequested = false;
      client.lastError = error instanceof Error ? error.message : String(error);
      client.status = "error";
      const err = new Error(client.lastError);
      err.code = "INTERRUPT_FAILED";
      throw err;
    }
  }

  async clearClientHistory(clientId) {
    const client = this.getClient(clientId);
    if (!client) {
      const err = new Error(`Unknown client: ${clientId}`);
      err.code = "CLIENT_NOT_FOUND";
      throw err;
    }

    if (client.client.isConnected()) {
      await client.client.disconnect();
    }
    client.client.setThreadId?.("");
    client.threadId = "";
    client.hasThreadTurns = false;
    client.history = [];
    client.rawEvents = [];
    client.inFlight = null;
    client.status = "idle";
    client.lastError = null;
    await this.ensureConnected(client);
    this.persistWorkspaceState();
    this.emitClientUpdate(clientId);
    return {
      ok: true,
      clientId,
      historyCount: client.history.length,
      threadId: client.threadId,
    };
  }

  async initializeAll() {
    for (const client of this.clients.values()) {
      client.status = "connecting";
      try {
        await client.client.connect();
        this.syncClientThreadState(client);
        await this.refreshClientHistory(client);
        client.status = "ready";
        client.lastError = null;
      } catch (error) {
        client.status = "error";
        client.lastError = error instanceof Error ? error.message : String(error);
      }
    }
  }

  async shutdownAll() {
    for (const client of this.clients.values()) {
      if (client.client.isConnected()) {
        try {
          await client.client.disconnect();
        } catch (error) {
          client.lastError = error instanceof Error ? error.message : String(error);
        }
      }
      client.status = "idle";
      this.syncClientThreadState(client);
    }
  }
}
