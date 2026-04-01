import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  getEntryEditableText,
  isEntryTextEditable,
  isPendingStreamingEntry,
} from "./runtimeMessageUtils.js";
import { AgentTimeline, DiffBlock } from "./components/AgentTimeline.jsx";
import { useRuntimePresentation } from "./useRuntimePresentation.js";
import { useWorkspaceArtifacts } from "./useWorkspaceArtifacts.js";
import { useClientSession } from "./useClientSession.js";
import {
  Activity,
  Bot,
  ChevronDown,
  ChevronRight,
  Cpu,
  Send,
  User,
  Circle,
  File,
  Folder,
  FolderGit2,
  RefreshCw,
  FileText,
  GitCommitHorizontal,
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8787";

function statusBadge(item) {
  if (item.untracked) return "UNTRACKED";
  if (item.status.includes("M")) return "MODIFIED";
  if (item.status.includes("A")) return "ADDED";
  if (item.status.includes("D")) return "DELETED";
  return item.status;
}

function getTodoStatusClass(status) {
  if (status === "completed") return "text-green-300 bg-green-500/10";
  if (status === "in_progress") return "text-blue-300 bg-blue-500/10";
  if (status === "failed") return "text-red-300 bg-red-500/10";
  if (status === "blocked") return "text-amber-300 bg-amber-500/10";
  if (status === "skipped") return "text-slate-300 bg-slate-500/10";
  return "text-gray-300 bg-white/5";
}

function resolveFeatureStatus(feature) {
  const rawStatus = feature?.status;
  if (typeof rawStatus === "string" && rawStatus.trim()) {
    const value = rawStatus.trim();
    return value === "done" ? "completed" : value;
  }
  if (rawStatus && typeof rawStatus === "object") {
    const implement = typeof rawStatus.implement === "string" ? rawStatus.implement.trim() : "";
    const check = typeof rawStatus.check === "string" ? rawStatus.check.trim() : "";
    if ((implement === "completed" || implement === "done") && (check === "completed" || check === "done")) {
      return "completed";
    }
    if (implement === "failed" || check === "failed") return "failed";
    if (implement === "blocked" || check === "blocked") return "blocked";
    if (implement === "skipped" || check === "skipped") return "skipped";
    if (implement === "in_progress" || check === "in_progress") return "in_progress";
    if (implement) return implement === "done" ? "completed" : implement;
    if (check) return check === "done" ? "completed" : check;
  }
  return "pending";
}

function buildGitTree(files) {
  const root = { type: "dir", name: "", path: "", children: [] };

  function ensureDir(parent, name, path) {
    let child = parent.children.find((item) => item.type === "dir" && item.name === name);
    if (!child) {
      child = { type: "dir", name, path, children: [] };
      parent.children.push(child);
    }
    return child;
  }

  files.forEach((file) => {
    const parts = file.path.split("/").filter(Boolean);
    let cursor = root;
    let builtPath = "";

    parts.forEach((part, index) => {
      builtPath = builtPath ? `${builtPath}/${part}` : part;
      const isLast = index === parts.length - 1;
      if (isLast) {
        cursor.children.push({
          type: "file",
          name: part,
          path: file.path,
          file,
        });
      } else {
        cursor = ensureDir(cursor, part, builtPath);
      }
    });
  });

  function sortNode(node) {
    node.children.sort((a, b) => {
      if (a.type !== b.type) return a.type === "dir" ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
    node.children.forEach((child) => {
      if (child.type === "dir") sortNode(child);
    });
  }

  sortNode(root);
  return root.children;
}
function buildPlannedFeaturesFixCommandMessage(input) {
  const message = typeof input?.message === "string" ? input.message.trim() : "";
  const details = Array.isArray(input?.details) ? input.details.filter((item) => typeof item === "string" && item.trim()) : [];
  const workspaceDir = typeof input?.workspaceDir === "string" ? input.workspaceDir.trim() : "";
  const template = `{
  "name": "Project Features",
  "readme": {
    "purpose": "用于沉淀经用户确认后的功能规划，指导 implementer 按依赖顺序逐项完成实现。",
    "projectSummary": {
      "goal": "在此填写项目目标与最终交付物摘要。",
      "scope": ["在此填写当前已确认的范围。"],
      "constraints": ["在此填写当前已确认的限制、边界或环境约束。"]
    },
    "schema": {
      "id": "功能唯一 ID，固定使用 F001/F002/F003 格式。",
      "title": "功能标题，要求一眼看懂目标。",
      "description": "该功能的实现要求、边界、限制、风险提示；如需补充说明，继续写在这里。",
      "acceptance": "字符串数组。每一项都是可验证的验收标准，建议写成命令 + 预期结果。",
      "dependsOn": "前置功能 ID 数组，只允许引用 feature.id。",
      "status": "功能当前状态。"
    },
    "statusEnum": ["pending", "in_progress", "completed", "failed", "blocked", "skipped"],
    "rules": [
      "只有依赖功能的 status=completed，才能继续实现下一个功能。",
      "当方案调整时，必须同步更新受影响的 feature 描述、依赖和验收标准。"
    ]
  },
  "features": [
    {
      "id": "F001",
      "title": "示例功能",
      "description": "在此填写该功能的目标、边界与约束。",
      "acceptance": ["示例：nix flake check 成功"],
      "dependsOn": [],
      "status": "pending"
    }
  ]
}`;

  return [
    "/fix planned-features.json",
    "修复当前 workspace 根目录的 planned-features.json。",
    "只改这个文件，不要提问。",
    "要求结构：name/readme/features；每个 feature 必须有 id/title/description/acceptance/dependsOn/status。",
    workspaceDir ? `workspace: ${workspaceDir}` : "",
    message ? `当前错误: ${message}` : "",
    details.length > 0 ? `错误细节:\n- ${details.join("\n- ")}` : "",
    "标准模板（按此结构修复）：",
    template,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildGitWorkspaceFixCommandMessage(input) {
  const workspaceDir = typeof input?.workspaceDir === "string" ? input.workspaceDir.trim() : "";
  const details = Array.isArray(input?.details) ? input.details.filter((item) => typeof item === "string" && item.trim()) : [];
  const initializeRepo = input?.initializeRepo === true;

  return [
    "/fix git-workspace",
    initializeRepo
      ? "当前 workspace 还不是 git 仓库，请直接修复。"
      : "当前 workspace 的 git 状态需要修复，请直接处理。",
    "不要提问。",
    initializeRepo
      ? "1. 初始化 git 仓库。"
      : "1. 如未初始化 git，则先初始化；已初始化则不要重复执行。",
    "2. 确保 .gitignore 包含 .codex/。",
    "3. 如果 .codex 已被 git 跟踪，把它从索引移除，但保留工作区文件。",
    "4. 不修改其他业务文件。",
    "5. 修复完成后直接提交 git。",
    workspaceDir ? `workspace: ${workspaceDir}` : "",
    details.length > 0 ? `检测到的问题:\n- ${details.join("\n- ")}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function AgentEntry({ entry }) {
  return <AgentTimeline entry={entry} />;
}

export default function App() {
  const [workspace, setWorkspace] = useState({ initialized: false, directory: null });
  const [workspaceInput, setWorkspaceInput] = useState("");
  const [initializingWorkspace, setInitializingWorkspace] = useState(false);

  const [activeClientId, setActiveClientId] = useState("planner");
  const [input, setInput] = useState("");
  const [composerImages, setComposerImages] = useState([]);
  const [sendingByClient, setSendingByClient] = useState({});
  const [interruptingByClient, setInterruptingByClient] = useState({});
  const [error, setError] = useState("");
  const [pendingActivationDispatch, setPendingActivationDispatch] = useState(null);
  const messagesEndRef = useRef(null);
  const lastCompletedToolCallRef = useRef("");
  const dismissedFixKeysRef = useRef(new Set());
  const activationProcessingRef = useRef(new Set());
  const activationDispatchRef = useRef({ id: "", running: false });
  const wsRef = useRef(null);
  const wsReconnectTimerRef = useRef(0);

  const [editingFeatureIndex, setEditingFeatureIndex] = useState(-1);
  const [editingFeature, setEditingFeature] = useState(null);
  const [savingFeature, setSavingFeature] = useState(false);
  const [fixDialog, setFixDialog] = useState({
    open: false,
    running: false,
    phase: "idle",
    kind: "",
    title: "",
    subtitle: "",
    message: "",
    details: [],
    preview: "",
    issueKey: "",
  });
  const [messageOverridesByClient, setMessageOverridesByClient] = useState({});
  const [messageContextMenu, setMessageContextMenu] = useState(null);
  const [editingMessage, setEditingMessage] = useState(null);

  function closeMessageContextMenu() {
    setMessageContextMenu(null);
  }

  function updateMessageOverride(clientId, entryKey, payload) {
    if (!clientId || !entryKey) return;
    setMessageOverridesByClient((prev) => ({
      ...prev,
      [clientId]: {
        ...(prev[clientId] || {}),
        [entryKey]: payload,
      },
    }));
  }

  function removeMessageOverride(clientId, entryKey) {
    if (!clientId || !entryKey) return;
    setMessageOverridesByClient((prev) => {
      const clientOverrides = { ...(prev[clientId] || {}) };
      delete clientOverrides[entryKey];
      return {
        ...prev,
        [clientId]: clientOverrides,
      };
    });
  }

  function resetFixDialog() {
    setFixDialog({
      open: false,
      running: false,
      phase: "idle",
      kind: "",
      title: "",
      subtitle: "",
      message: "",
      details: [],
      preview: "",
      issueKey: "",
    });
  }

  function dismissFixDialog() {
    setFixDialog((prev) => {
      if (prev.issueKey) {
        dismissedFixKeysRef.current.add(prev.issueKey);
      }
      return {
        open: false,
        running: false,
        phase: "idle",
        kind: "",
        title: "",
        subtitle: "",
        message: "",
        details: [],
        preview: "",
        issueKey: "",
      };
    });
  }

  function maybeOpenFixDialog(nextDialog) {
    if (!nextDialog?.issueKey) return;
    if (dismissedFixKeysRef.current.has(nextDialog.issueKey)) return;
    setFixDialog((prev) => {
      if ((prev.open || prev.running) && prev.issueKey === nextDialog.issueKey) {
        return prev;
      }
      return {
        open: true,
        running: false,
        phase: "idle",
        kind: nextDialog.kind || "",
        title: nextDialog.title || "",
        subtitle: nextDialog.subtitle || "",
        message: nextDialog.message || "",
        details: Array.isArray(nextDialog.details) ? nextDialog.details : [],
        preview: nextDialog.preview || "",
        issueKey: nextDialog.issueKey,
      };
    });
  }

  function getFixTargetLabel() {
    return "一次性修复执行器";
  }

  const {
    clients,
    runtimeByClient,
    pendingActivations,
    loadingClients,
    loadingMessages,
    setRuntimeByClient,
    setPendingActivations,
    upsertClientSummary,
    upsertRuntime,
    buildWebSocketUrl,
    applySocketSnapshot,
    fetchWorkspace,
    fetchClients,
    fetchRuntime,
  } = useClientSession({
    apiBase: API_BASE,
    workspace,
    setWorkspace,
    setWorkspaceInput,
    setError,
  });

  const {
    gitStatus,
    loadingGit,
    gitCommits,
    loadingGitCommits,
    featureState,
    selectedGitPath,
    expandedDirs,
    setFeatureState,
    setSelectedGitPath,
    setExpandedDirs,
    fetchGitStatus,
    fetchGitCommits,
    fetchFeatureState,
    fetchWorkspaceFixState,
  } = useWorkspaceArtifacts({
    apiBase: API_BASE,
    workspace,
    fixDialog,
    setError,
    maybeOpenFixDialog,
    resetFixDialog,
    dismissedFixKeysRef,
    buildGitWorkspaceFixCommandMessage,
    buildPlannedFeaturesFixCommandMessage,
  });

  const activeClient = useMemo(
    () => clients.find((client) => client.id === activeClientId) || null,
    [clients, activeClientId]
  );
  const { activeRuntime, displayMessages, latestCompletedToolCallFingerprint } = useRuntimePresentation({
    activeClientId,
    runtimeByClient,
    messageOverridesByClient,
  });
  const activeClientSending = Boolean(activeClientId && sendingByClient[activeClientId]);
  const activeClientInterrupting = Boolean(activeClientId && interruptingByClient[activeClientId]);
  const activeClientBusy = ["running", "connecting", "interrupting"].includes(activeClient?.status || "");
  const activeClientCanInterrupt = ["running", "interrupting"].includes(activeClient?.status || "");
  const hasPendingClientDispatch = useMemo(
    () => Object.keys(sendingByClient).length > 0,
    [sendingByClient]
  );

  const selectedGitFile = useMemo(
    () => gitStatus.files.find((file) => file.path === selectedGitPath) || null,
    [gitStatus, selectedGitPath]
  );
  const gitTree = useMemo(() => buildGitTree(gitStatus.files), [gitStatus.files]);
  const featureProgress = useMemo(() => {
    const features = Array.isArray(featureState?.feature?.features) ? featureState.feature.features : [];
    const total = features.length;
    const done = features.filter((feature) => resolveFeatureStatus(feature) === "completed").length;
    return { total, done };
  }, [featureState.feature]);

  async function initWorkspace() {
    const directory = workspaceInput.trim();
    if (!directory || initializingWorkspace) return;

    setInitializingWorkspace(true);
    try {
      const res = await fetch(`${API_BASE}/api/workspace/init`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ directory }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || data?.error || "workspace init failed");
      }

      setWorkspace(data.workspace);
      fetchClients(setActiveClientId, { force: true });
      setRuntimeByClient({});
      setPendingActivations([]);
      setError("");
      await Promise.all([
        fetchClients(setActiveClientId, { force: true }),
        fetchRuntime(activeClientId, { force: true }),
        fetchGitStatus({ force: true }),
        fetchGitCommits({ force: true }),
        fetchFeatureState({ force: true }),
      ]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "初始化目录失败");
    } finally {
      setInitializingWorkspace(false);
    }
  }

  function startEditFeature(feature, index) {
    setEditingFeatureIndex(index);
    setEditingFeature({
      id: feature?.id || "",
      title: feature?.title || "",
      description: feature?.description || "",
      acceptanceText: Array.isArray(feature?.acceptance) ? feature.acceptance.join("\n") : "",
      dependsOnText: Array.isArray(feature?.dependsOn) ? feature.dependsOn.join("\n") : "",
      status: resolveFeatureStatus(feature),
    });
  }

  function cancelEditFeature() {
    setEditingFeatureIndex(-1);
    setEditingFeature(null);
  }

  async function saveFeature() {
    if (!workspace.initialized || !featureState?.feature || !editingFeature || editingFeatureIndex < 0 || savingFeature) return;
    const features = Array.isArray(featureState.feature.features) ? [...featureState.feature.features] : [];
    if (!features[editingFeatureIndex]) return;

    features[editingFeatureIndex] = {
      ...features[editingFeatureIndex],
      id: editingFeature.id,
      title: editingFeature.title,
      description: editingFeature.description,
      acceptance: String(editingFeature.acceptanceText || "")
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      dependsOn: String(editingFeature.dependsOnText || "")
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      status: editingFeature.status,
    };

    const nextFeature = {
      ...featureState.feature,
      features,
    };

    setSavingFeature(true);
    try {
      const res = await fetch(`${API_BASE}/api/workspace/planned-features`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feature: nextFeature }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || data?.error || "save feature failed");
      await fetchFeatureState({ force: true });
      cancelEditFeature();
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "保存功能失败");
    } finally {
      setSavingFeature(false);
    }
  }

  async function sendFixToAgent() {
    if (!workspace.initialized || fixDialog.running || !fixDialog.preview) return;
    setFixDialog((prev) => ({ ...prev, running: true, phase: "sending" }));

    try {
      if (fixDialog.kind === "git-workspace") {
        const syncRes = await fetch(`${API_BASE}/api/workspace/sync-codex`, {
          method: "POST",
        });
        const syncData = await syncRes.json();
        if (!syncRes.ok) {
          throw new Error(syncData?.message || syncData?.error || "sync codex assets failed");
        }
      }

      const fixRes = await fetch(`${API_BASE}/api/fix/run`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kind: fixDialog.kind,
          text: fixDialog.preview,
        }),
      });
      const fixData = await fixRes.json();
      if (!fixRes.ok) {
        throw new Error(fixData?.message || fixData?.error || "fix run failed");
      }

      setFixDialog((prev) => ({ ...prev, phase: "waiting" }));

      let repaired = false;
      let timeoutMessage = "等待一次性 /fix 修复超时";
      for (let i = 0; i < 40; i += 1) {
        if (fixDialog.kind === "planned-features-json") {
          const featureResult = await fetchFeatureState({ force: true, silent: true });
          if (featureResult?.ok) {
            repaired = true;
            break;
          }
          timeoutMessage = "等待一次性 /fix 修复超时，planned-features.json 仍不可用";
        } else {
          const fixStateResult = await fetchWorkspaceFixState({ force: true, suppressFixPrompt: true });
          if (fixStateResult?.ok && fixStateResult.data?.needsFix === false) {
            repaired = true;
            break;
          }
          timeoutMessage = "等待一次性 /fix 修复超时，git 初始化、.codex 忽略或 .codex 同步问题仍未解决";
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      if (!repaired) {
        throw new Error(timeoutMessage);
      }

      await Promise.all([fetchGitStatus({ force: true }), fetchGitCommits({ force: true })]);
      dismissedFixKeysRef.current.delete(fixDialog.issueKey);
      resetFixDialog();
      setError("");
    } catch (e) {
      setFixDialog((prev) => ({ ...prev, running: false, phase: "idle" }));
      setError(e instanceof Error ? e.message : "发送 /fix 失败");
    }
  }

  function toggleDir(path) {
    setExpandedDirs((prev) => ({ ...prev, [path]: !prev[path] }));
  }

  function renderTreeNodes(nodes, depth = 0) {
    return nodes.map((node) => {
      if (node.type === "dir") {
        const expanded = expandedDirs[node.path] !== false;
        return (
          <div key={`dir-${node.path}`}>
            <button
              type="button"
              onClick={() => toggleDir(node.path)}
              className="w-full text-left px-2 py-1 rounded hover:bg-[#161b22] text-[11px] text-gray-300 flex items-center gap-1"
              style={{ paddingLeft: `${8 + depth * 14}px` }}
            >
              {expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
              <Folder size={12} className="text-blue-400" />
              <span className="truncate">{node.name}</span>
            </button>
            {expanded ? renderTreeNodes(node.children, depth + 1) : null}
          </div>
        );
      }

      const selected = node.path === selectedGitPath;
      return (
        <button
          key={`file-${node.path}`}
          type="button"
          onClick={() => setSelectedGitPath(node.path)}
          className={`w-full text-left py-1 rounded text-[11px] flex items-center gap-1 ${
            selected ? "bg-[#161b22] border border-blue-500/50" : "hover:bg-[#161b22]"
          }`}
          style={{ paddingLeft: `${22 + depth * 14}px` }}
        >
          <File size={12} className="text-gray-500 shrink-0" />
          <span className="truncate text-gray-300">{node.name}</span>
          <span className="ml-auto text-[10px] text-gray-500 pr-2">{statusBadge(node.file)}</span>
        </button>
      );
    });
  }

  useEffect(() => {
    let cancelled = false;
    fetchWorkspace().then((data) => {
      if (!data.initialized || cancelled) return;
      fetchClients(setActiveClientId, { force: true });
      fetchRuntime(activeClientId || "planner", { force: true, silent: true });
      fetchGitStatus({ force: true });
      fetchGitCommits({ force: true });
      fetchFeatureState({ force: true });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!workspace.initialized || !activeClientId || runtimeByClient[activeClientId]) return;
    fetchRuntime(activeClientId, { silent: true });
  }, [workspace.initialized, activeClientId, runtimeByClient]);

  useEffect(() => {
    if (workspace.initialized) {
      fetchGitStatus({ force: true });
      fetchGitCommits({ force: true });
      fetchFeatureState({ force: true });
    }
  }, [workspace.initialized]);

  useEffect(() => {
    if (!workspace.initialized) return undefined;

    const timer = setInterval(() => {
      fetchFeatureState({ silent: true });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [workspace.initialized]);

  useEffect(() => {
    if (!workspace.initialized) return undefined;

    let closed = false;

    function applySocketPayload(payload) {
      if (!payload || typeof payload !== "object") return;
      if (payload.type === "bootstrap" || payload.type === "workspace_update") {
        applySocketSnapshot(payload, setActiveClientId);
        return;
      }
      if (payload.type === "client_update") {
        upsertClientSummary(payload.client);
        if (payload.runtime?.clientId) {
          upsertRuntime(payload.runtime);
          setLoadingMessages(false);
        }
      }
    }

    function connectSocket() {
      if (closed) return;
      const ws = new WebSocket(buildWebSocketUrl());
      wsRef.current = ws;

      ws.onmessage = (event) => {
        try {
          applySocketPayload(JSON.parse(event.data));
        } catch {
          // Ignore malformed payloads from the socket.
        }
      };

      ws.onclose = () => {
        if (wsRef.current === ws) {
          wsRef.current = null;
        }
        if (closed) return;
        wsReconnectTimerRef.current = window.setTimeout(connectSocket, 1200);
      };

      ws.onerror = () => {
        ws.close();
      };
    }

    connectSocket();

    return () => {
      closed = true;
      if (wsReconnectTimerRef.current) {
        window.clearTimeout(wsReconnectTimerRef.current);
        wsReconnectTimerRef.current = 0;
      }
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [workspace.initialized, workspace.directory]);

  useEffect(() => {
    if (!workspace.initialized || pendingActivationDispatch) return;
    if (hasPendingClientDispatch) return;

    const nextActivation = pendingActivations.find(
      (item) => item?.id && !activationProcessingRef.current.has(item.id)
    );
    if (!nextActivation) return undefined;

    let cancelled = false;

    async function claimActivation() {
      activationProcessingRef.current.add(nextActivation.id);
      try {
        const consumeRes = await fetch(`${API_BASE}/api/activations/${nextActivation.id}/consume`, {
          method: "POST",
        });
        if (!consumeRes.ok || cancelled) {
          activationProcessingRef.current.delete(nextActivation.id);
          return;
        }
        setActiveClientId(nextActivation.toClientId);
        setPendingActivationDispatch(nextActivation);
      } catch {
        activationProcessingRef.current.delete(nextActivation.id);
      }
    }

    claimActivation();

    return () => {
      cancelled = true;
    };
  }, [workspace.initialized, pendingActivations, pendingActivationDispatch, hasPendingClientDispatch]);

  useEffect(() => {
    if (!workspace.initialized || !pendingActivationDispatch) return;
    const targetClient = clients.find((item) => item.id === pendingActivationDispatch.toClientId);
    if (!targetClient) return;
    if (hasPendingClientDispatch) return;
    if (["running", "connecting", "interrupting"].includes(targetClient.status)) return;
    if (
      activationDispatchRef.current.running &&
      activationDispatchRef.current.id === pendingActivationDispatch.id
    ) {
      return;
    }

    async function runActivationDispatch() {
      let accepted = false;
      activationDispatchRef.current = {
        id: pendingActivationDispatch.id,
        running: true,
      };
      try {
        setActiveClientId(pendingActivationDispatch.toClientId);
        const activationText = pendingActivationDispatch.fromClientId
          ? `[from: ${pendingActivationDispatch.fromClientId}]\n${pendingActivationDispatch.message}`
          : pendingActivationDispatch.message;
        const result = await startClientTurn(
          pendingActivationDispatch.toClientId,
          {
            kind: "user_message",
            text: activationText,
          },
          "激活派发失败"
        );
        accepted = result.accepted;
        if (!accepted) return;
      } catch {
        activationProcessingRef.current.delete(pendingActivationDispatch.id);
        setPendingActivationDispatch(null);
      } finally {
        if (activationDispatchRef.current.id === pendingActivationDispatch.id) {
          activationDispatchRef.current = { id: "", running: false };
        }
        if (accepted) {
          activationProcessingRef.current.delete(pendingActivationDispatch.id);
          setPendingActivationDispatch(null);
        }
      }
    }

    runActivationDispatch();
  }, [workspace.initialized, pendingActivationDispatch, clients, hasPendingClientDispatch]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [displayMessages, loadingMessages]);

  useEffect(() => {
    function handleWindowClick() {
      closeMessageContextMenu();
    }

    window.addEventListener("click", handleWindowClick);
    return () => window.removeEventListener("click", handleWindowClick);
  }, []);

  useEffect(() => {
    if (!workspace.initialized) return;
    if (
      !latestCompletedToolCallFingerprint ||
      latestCompletedToolCallFingerprint === lastCompletedToolCallRef.current
    ) {
      return;
    }
    lastCompletedToolCallRef.current = latestCompletedToolCallFingerprint;
    refreshGitPanels();
  }, [latestCompletedToolCallFingerprint, workspace.initialized]);

  async function startClientTurn(targetClientId, payload, errorMessage) {
    if (!workspace.initialized || !targetClientId) {
      return { accepted: false, busy: false };
    }

    setSendingByClient((prev) => ({ ...prev, [targetClientId]: true }));
    try {
      const res = await fetch(`${API_BASE}/api/clients/${targetClientId}/turns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.status === 409) {
        return { accepted: false, busy: true };
      }
      if (!res.ok) {
        throw new Error(data?.message || data?.error || errorMessage);
      }
      await fetchRuntime(targetClientId, { force: true, silent: true });
      setError("");
      return { accepted: true, busy: false };
    } finally {
      setSendingByClient((prev) => {
        const next = { ...prev };
        delete next[targetClientId];
        return next;
      });
    }
  }

  async function sendClientText(targetClientId, text, options = {}) {
    const normalizedText = typeof text === "string" ? text.trim() : "";
    const images = Array.isArray(options.images) ? options.images.filter((item) => item?.dataUrl) : [];
    if (!workspace.initialized || (!normalizedText && images.length === 0) || !targetClientId) return false;
    try {
      const result = await startClientTurn(
        targetClientId,
        {
          kind: "user_message",
          text: normalizedText,
          images,
        },
        "发送失败"
      );
      if (result.accepted && options.clearInput) {
        setInput("");
        setComposerImages([]);
      }
      return result.accepted;
    } catch (e) {
      setError(e instanceof Error ? e.message : "发送失败");
      return false;
    }
  }

  async function handleSend() {
    const text = input.trim();
    const targetClientId = activeClientId;
    if (!workspace.initialized || (!text && composerImages.length === 0) || !targetClientId) return;
    if (activeClientBusy) return;
    await sendClientText(targetClientId, text, { clearInput: true, images: composerImages });
  }

  async function handleStopTask() {
    if (!workspace.initialized || !activeClientId) return;
    if (interruptingByClient[activeClientId]) return;
    setInterruptingByClient((prev) => ({ ...prev, [activeClientId]: true }));
    setPendingActivationDispatch((prev) => {
      if (!prev || prev.toClientId !== activeClientId) return prev;
      activationProcessingRef.current.delete(prev.id);
      if (activationDispatchRef.current.id === prev.id) {
        activationDispatchRef.current = { id: "", running: false };
      }
      return null;
    });
    try {
      const res = await fetch(`${API_BASE}/api/clients/${activeClientId}/interrupt`, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || data?.error || "interrupt failed");
      }
      setError("已触发中断");
      Promise.allSettled([
        fetchClients(setActiveClientId, { silent: true }),
        fetchRuntime(activeClientId, { force: true, silent: true }),
      ]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "中断失败");
    } finally {
      setInterruptingByClient((prev) => {
        const next = { ...prev };
        delete next[activeClientId];
        return next;
      });
    }
  }

  async function refreshGitPanels() {
    await Promise.all([fetchGitStatus({ force: true }), fetchGitCommits({ force: true })]);
  }

  async function clearActiveClientHistory() {
    if (!workspace.initialized || !activeClientId) return;
    const confirmed = window.confirm(`确认清理 ${activeClientId} 的会话历史吗？`);
    if (!confirmed) return;
    try {
      const res = await fetch(`${API_BASE}/api/clients/${activeClientId}/history/clear`, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || data?.error || "clear history failed");
      }
      await Promise.all([fetchClients(setActiveClientId, { force: true }), fetchRuntime(activeClientId, { force: true })]);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "清理会话历史失败");
    }
  }

  function openMessageEditor(clientId, entryKey, entry) {
    setEditingMessage({
      clientId,
      entryKey,
      text: getEntryEditableText(entry),
    });
  }

  function closeMessageEditor() {
    setEditingMessage(null);
  }

  function saveEditedMessage() {
    if (!editingMessage?.clientId || !editingMessage?.entryKey) return;
    updateMessageOverride(editingMessage.clientId, editingMessage.entryKey, {
      action: "edit",
      text: editingMessage.text || "",
    });
    closeMessageEditor();
  }

  function handleComposerKeyDown(event) {
    if (event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    handleSend();
  }

  async function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = typeof reader.result === "string" ? reader.result : "";
        if (!dataUrl.startsWith("data:image/")) {
          reject(new Error("clipboard image read failed"));
          return;
        }
        resolve(dataUrl);
      };
      reader.onerror = () => reject(new Error("clipboard image read failed"));
      reader.readAsDataURL(file);
    });
  }

  async function compressImageDataUrl(dataUrl, fileName) {
    const image = await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("image decode failed"));
      img.src = dataUrl;
    });

    const maxDimension = 1600;
    const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));
    const targetWidth = Math.max(1, Math.round(image.width * scale));
    const targetHeight = Math.max(1, Math.round(image.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("canvas not available");
    }
    context.drawImage(image, 0, 0, targetWidth, targetHeight);

    const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.86);
    return {
      name: fileName.replace(/\.[^.]+$/, "") || "pasted-image",
      mimeType: "image/jpeg",
      dataUrl: compressedDataUrl,
    };
  }

  async function readClipboardImage(file) {
    const originalDataUrl = await readFileAsDataUrl(file);
    const shouldCompress = file.size > 1_500_000 || originalDataUrl.length > 2_000_000;
    const normalized = shouldCompress
      ? await compressImageDataUrl(originalDataUrl, file?.name || `pasted-image-${composerImages.length + 1}.png`)
      : {
          name: file?.name || `pasted-image-${composerImages.length + 1}.png`,
          mimeType: file?.type || "image/png",
          dataUrl: originalDataUrl,
        };

    return {
      id: `img_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name: normalized.name,
      mimeType: normalized.mimeType,
      dataUrl: normalized.dataUrl,
    };
  }

  async function handleComposerPaste(event) {
    const items = Array.from(event.clipboardData?.items || []);
    const imageItems = items.filter((item) => item.type.startsWith("image/"));
    if (imageItems.length === 0) return;
    event.preventDefault();
    try {
      const nextImages = await Promise.all(
        imageItems
          .map((item) => item.getAsFile())
          .filter(Boolean)
          .map((file) => readClipboardImage(file))
      );
      setComposerImages((prev) => [...prev, ...nextImages]);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "读取粘贴图片失败");
    }
  }

  function removeComposerImage(imageId) {
    setComposerImages((prev) => prev.filter((item) => item.id !== imageId));
  }

  return (
    <div className="flex h-screen bg-[#0d1117] text-[#c9d1d9] font-sans overflow-hidden border border-[#30363d]">
      <aside className="w-72 border-r border-[#30363d] flex flex-col bg-[#010409]">
        <div className="p-4 border-b border-[#30363d] flex items-center justify-between bg-[#0d1117]">
          <span className="font-semibold flex items-center gap-2">
            <Activity size={18} className="text-green-400" />
            客户端
          </span>
          <span className="text-[10px] text-gray-500 font-mono">
            {loadingClients ? "SYNC..." : `${clients.length} ONLINE`}
          </span>
        </div>

        <div className="h-[60%] overflow-y-auto p-4 space-y-2">
          {clients.map((client) => {
            const selected = client.id === activeClientId;
            return (
              <div
                key={client.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveClientId(client.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveClientId(client.id);
                  }
                }}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  selected
                    ? "border-blue-500/60 bg-[#161b22]"
                    : "border-[#30363d] bg-[#0d1117] hover:bg-[#161b22]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-[#f0f6fc] capitalize">
                    {client.name || client.id}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] uppercase text-gray-400">
                    <Circle
                      size={8}
                      fill={
                        client.status === "ready"
                          ? "#3fb950"
                          : client.status === "running"
                            ? "#d29922"
                            : "#8b949e"
                      }
                      className={client.status === "connecting" || client.status === "running" ? "animate-pulse" : ""}
                    />
                    {client.status}
                  </div>
                </div>
                <div className="text-[11px] text-gray-500 font-mono">history: {client.historyCount || 0}</div>
                <div className="text-[10px] text-gray-600 font-mono mt-1 truncate">
                  add_dirs: {client?.options?.add_dirs?.[0] || "-"}
                </div>
              </div>
            );
          })}
        </div>

        <div className="h-[40%] border-t border-[#30363d] p-3 bg-[#0d1117] overflow-y-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-semibold text-[#f0f6fc]">功能清单</div>
            <div className="text-[10px] text-gray-500 font-mono">
              {featureState.loading ? "SYNC..." : featureState.exists ? "READY" : "MISSING"}
            </div>
          </div>
          {featureState.exists ? (
            <>
              <div className="text-[12px] text-[#f0f6fc] font-semibold truncate">
                {featureState.feature?.name || "Project Features"}
              </div>
              <div className="text-[10px] text-gray-500 font-mono truncate">
                {featureState.path || "planned-features.json"}
              </div>
              <div className="text-[11px] text-gray-400 mt-1 mb-2">
                {featureProgress.done}/{featureProgress.total} 已完成
              </div>
              <div className="space-y-1.5">
                {(Array.isArray(featureState?.feature?.features) ? featureState.feature.features : []).map((feature, featureIndex) => {
                  const status = resolveFeatureStatus(feature);
                  const done = status === "completed";
                  const rowTone = done
                    ? "border-green-500/30 bg-green-500/5"
                    : status === "failed"
                      ? "border-red-500/35 bg-red-500/8"
                      : status === "in_progress"
                        ? "border-blue-500/35 bg-blue-500/8"
                        : status === "blocked"
                          ? "border-amber-500/35 bg-amber-500/8"
                        : status === "skipped"
                          ? "border-slate-500/35 bg-slate-500/8"
                        : "border-[#30363d] bg-[#010409]";
                  return (
                    <div
                      key={feature?.id || feature?.title}
                      onClick={() => startEditFeature(feature, featureIndex)}
                      className={`rounded border px-2 py-1.5 transition-colors hover:bg-[#161b22] cursor-pointer ${rowTone}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-[11px] text-[#f0f6fc] truncate">{feature?.title || feature?.id || "-"}</div>
                        <div className="text-[10px] text-gray-500 font-mono shrink-0">{feature?.id || "-"}</div>
                      </div>
                      {feature?.description ? (
                        <div className="text-[10px] text-gray-400 mt-1 line-clamp-2">{feature.description}</div>
                      ) : null}
                      <div className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full ${
                            done
                              ? "bg-green-400"
                              : status === "failed"
                                ? "bg-red-400"
                                : status === "in_progress"
                                  ? "bg-blue-400"
                                  : status === "blocked"
                                    ? "bg-amber-400"
                                  : status === "skipped"
                                    ? "bg-slate-400"
                                  : "bg-gray-500"
                          }`}
                        />
                        <span className={`px-1 py-0.5 rounded ${getTodoStatusClass(status)}`}>{`status:${status}`}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-[11px] text-amber-300 leading-5">
              未检测到 planned-features.json，请先与 planner 沟通生成功能清单。
            </div>
          )}
        </div>
      </aside>

      <main className="flex-1 flex flex-col bg-[#0d1117]">
        <header className="h-14 border-b border-[#30363d] flex items-center px-4 bg-[#0d1117] justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Bot size={16} className="text-blue-400" />
            <span className="capitalize">{activeClient?.id || "-"}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={clearActiveClientHistory}
              className="px-2 py-1 text-xs border border-red-500/40 rounded hover:bg-red-500/10 text-red-300"
            >
              清理会话历史
            </button>
            <button
              type="button"
              onClick={() => {
                fetchClients(setActiveClientId);
                fetchRuntime(activeClientId);
                fetchGitStatus();
                fetchGitCommits();
                fetchFeatureState();
              }}
              className="px-2 py-1 text-xs border border-[#30363d] rounded hover:bg-[#21262d] text-gray-300"
            >
              刷新
            </button>
          </div>
        </header>

        {error ? (
          <div className="px-4 py-2 text-xs bg-red-950/40 border-b border-red-900 text-red-200">{error}</div>
        ) : null}

        <section className="flex-1 overflow-y-auto p-4 space-y-3">
          {loadingMessages ? <div className="text-sm text-gray-500">加载中...</div> : null}
          {!loadingMessages && displayMessages.length === 0 ? (
            <div className="text-sm text-gray-500">暂无消息，先发一条试试。</div>
          ) : null}

          {displayMessages.map((entry, idx) => {
            const isUser = entry?.kind === "user";
            const isPendingStream = isPendingStreamingEntry(entry);
            const userText = entry?.raw?.text || "";
            const userImages = Array.isArray(entry?.raw?.images) ? entry.raw.images : [];
            const entryKey = `${entry.createdAt || "msg"}-${idx}`;
            const canEdit = isEntryTextEditable(entry);

            return (
              <div
                key={`${entry.createdAt || "msg"}-${idx}`}
                className={`flex min-w-0 gap-3 ${isUser ? "justify-end" : "justify-start"}`}
              >
                {!isUser ? (
                  <div className="w-9 h-9 rounded bg-[#21262d] border border-[#30363d] flex items-center justify-center flex-shrink-0">
                    <Cpu size={18} className="text-blue-400" />
                  </div>
                ) : null}
                <div
                  data-message-card="true"
                  onContextMenu={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setMessageContextMenu({
                      clientId: activeClientId,
                      entryKey,
                      canEdit,
                      x: event.clientX,
                      y: event.clientY,
                      entry,
                    });
                  }}
                  className={`min-w-0 max-w-[92%] lg:max-w-[78%] xl:max-w-[72%] rounded-md border ${
                    isUser
                      ? "bg-blue-500/10 border-blue-500/30"
                      : "bg-[#161b22] border-[#30363d]"
                  }`}
                >
                  {!isPendingStream ? (
                    <div className="px-3 py-2 border-b border-inherit text-[10px] uppercase text-gray-500 flex items-center gap-1">
                      {isUser ? <User size={12} /> : <FileText size={12} />}
                      {isUser ? "user" : "codex"}
                    </div>
                  ) : null}
                  <div className="min-w-0 p-3 text-sm whitespace-pre-wrap break-words">
                    {isUser ? (
                      <div className="space-y-2">
                        {userText ? <div>{userText}</div> : null}
                        {userImages.length > 0 ? (
                          <div className="grid gap-2 sm:grid-cols-2">
                            {userImages.map((image, imageIndex) => (
                              <div key={image?.id || image?.dataUrl || imageIndex} className="rounded border border-blue-500/20 bg-[#0d1117] p-2">
                                {image?.dataUrl || image?.url ? (
                                  <img
                                    src={image?.dataUrl || image?.url || ""}
                                    alt={image?.name || `image-${imageIndex + 1}`}
                                    className="max-h-48 w-full rounded object-contain bg-[#010409]"
                                  />
                                ) : (
                                  <div className="flex h-32 items-center justify-center rounded bg-[#010409] text-[11px] text-gray-500">
                                    图片已发送
                                  </div>
                                )}
                                <div className="mt-1 text-[10px] text-gray-400 truncate">
                                  {image?.name || `image-${imageIndex + 1}`}
                                </div>
                                {image?.omitted ? (
                                  <div className="mt-1 text-[10px] text-amber-300">图片预览已省略，避免超大历史消息。</div>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <AgentEntry entry={entry} />
                    )}
                  </div>
                </div>
                {isUser ? (
                  <div className="w-9 h-9 rounded bg-gray-700 border border-[#30363d] flex items-center justify-center flex-shrink-0">
                    <User size={18} className="text-white" />
                  </div>
                ) : null}
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </section>

        <footer className="border-t border-[#30363d] p-3 bg-[#010409]">
          <div className="border border-[#30363d] rounded-md bg-[#0d1117] focus-within:border-blue-500 transition-colors">
            <div className="p-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleComposerKeyDown}
                onPaste={handleComposerPaste}
                placeholder={activeClientId ? `发送给 ${activeClientId}...` : "请选择 client"}
                className="w-full bg-transparent border-none outline-none text-sm resize-none h-20 text-gray-300 placeholder-gray-600"
              />
              {composerImages.length > 0 ? (
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {composerImages.map((image) => (
                    <div key={image.id} className="rounded border border-[#30363d] bg-[#010409] p-2">
                      <img
                        src={image.dataUrl}
                        alt={image.name}
                        className="h-24 w-full rounded object-contain bg-[#0d1117]"
                      />
                      <div className="mt-1 flex items-center justify-between gap-2">
                        <div className="min-w-0 text-[10px] text-gray-400 truncate">{image.name}</div>
                        <button
                          type="button"
                          onClick={() => removeComposerImage(image.id)}
                          className="rounded border border-[#30363d] px-1.5 py-0.5 text-[10px] text-gray-300 hover:bg-[#161b22]"
                        >
                          移除
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-[#30363d]">
                <button
                  type="button"
                  onClick={handleStopTask}
                  disabled={!workspace.initialized || !activeClientId || !activeClientCanInterrupt || activeClientInterrupting}
                  className="px-2 py-1 text-[10px] border border-[#30363d] rounded hover:bg-[#21262d] disabled:opacity-50 disabled:cursor-not-allowed text-gray-400"
                >
                  {activeClientInterrupting ? "停止中" : "停止任务"}
                </button>
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={
                    !workspace.initialized ||
                    !activeClientId ||
                    activeClientSending ||
                    activeClientBusy ||
                    (!input.trim() && composerImages.length === 0)
                  }
                  className="px-3 py-1 text-[11px] font-semibold rounded-md bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50 disabled:cursor-not-allowed text-white flex items-center justify-center gap-1"
                >
                  <Send size={12} />
                  {activeClientSending ? "发送中" : "执行"}
                </button>
              </div>
            </div>
            <div className="px-3 pb-3 text-[11px] text-gray-500">Enter 发送，Shift+Enter 换行，直接粘贴图片可作为附件发送</div>
          </div>
        </footer>
      </main>

      {messageContextMenu ? (
        <div
          className="fixed z-50 min-w-36 rounded-md border border-[#30363d] bg-[#161b22] p-1 shadow-2xl"
          style={{ left: `${messageContextMenu.x}px`, top: `${messageContextMenu.y}px` }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            disabled={!messageContextMenu.canEdit}
            onClick={() => {
              if (!messageContextMenu.canEdit) return;
              openMessageEditor(messageContextMenu.clientId, messageContextMenu.entryKey, messageContextMenu.entry);
              closeMessageContextMenu();
            }}
            className="block w-full rounded px-3 py-1.5 text-left text-[12px] text-gray-200 hover:bg-[#21262d] disabled:cursor-not-allowed disabled:text-gray-500"
          >
            修改文字
          </button>
          <button
            type="button"
            onClick={() => {
              updateMessageOverride(messageContextMenu.clientId, messageContextMenu.entryKey, {
                action: "delete",
              });
              closeMessageContextMenu();
            }}
            className="block w-full rounded px-3 py-1.5 text-left text-[12px] text-red-300 hover:bg-[#21262d]"
          >
            删除消息
          </button>
          <button
            type="button"
            onClick={() => {
              removeMessageOverride(messageContextMenu.clientId, messageContextMenu.entryKey);
              closeMessageContextMenu();
            }}
            className="block w-full rounded px-3 py-1.5 text-left text-[12px] text-gray-400 hover:bg-[#21262d]"
          >
            还原显示
          </button>
        </div>
      ) : null}

      {editingMessage ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-2xl rounded-lg border border-[#30363d] bg-[#0d1117] shadow-2xl">
            <div className="border-b border-[#30363d] px-4 py-3 text-sm font-semibold text-[#f0f6fc]">修改消息文字</div>
            <div className="p-4">
              <textarea
                value={editingMessage.text}
                onChange={(event) =>
                  setEditingMessage((prev) =>
                    prev
                      ? {
                          ...prev,
                          text: event.target.value,
                        }
                      : prev
                  )
                }
                className="h-64 w-full resize-none rounded border border-[#30363d] bg-[#010409] px-3 py-2 text-sm text-gray-200 outline-none focus:border-blue-500"
              />
              <div className="mt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeMessageEditor}
                  className="rounded border border-[#30363d] px-3 py-1.5 text-xs text-gray-300 hover:bg-[#161b22]"
                >
                  取消
                </button>
                <button
                  type="button"
                  onClick={saveEditedMessage}
                  className="rounded border border-blue-500/40 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-200 hover:bg-blue-500/20"
                >
                  保存显示修改
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {editingFeature ? (
        <div className="absolute inset-0 z-30 bg-[#0d1117]/90 backdrop-blur-sm overflow-y-auto p-4">
          <div className="w-full max-w-2xl border border-[#30363d] bg-[#010409] rounded-lg p-4 mx-auto my-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-[#f0f6fc]">编辑功能</h3>
              <button
                type="button"
                onClick={cancelEditFeature}
                className="px-2 py-1 text-xs border border-[#30363d] rounded hover:bg-[#21262d] text-gray-300"
              >
                关闭
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-400 mb-1">功能 ID</div>
                <input
                  value={editingFeature.id}
                  onChange={(e) => setEditingFeature((prev) => ({ ...prev, id: e.target.value }))}
                  placeholder="如 F001"
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded px-2 py-1.5 text-sm outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">功能标题</div>
                <input
                  value={editingFeature.title}
                  onChange={(e) => setEditingFeature((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="功能标题"
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded px-2 py-1.5 text-sm outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">功能描述</div>
                <textarea
                  value={editingFeature.description}
                  onChange={(e) => setEditingFeature((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="描述"
                  className="w-full h-20 bg-[#0d1117] border border-[#30363d] rounded px-2 py-1.5 text-sm outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">验收标准（每行一条）</div>
                <textarea
                  value={editingFeature.acceptanceText}
                  onChange={(e) => setEditingFeature((prev) => ({ ...prev, acceptanceText: e.target.value }))}
                  placeholder="例如：yarn build 成功"
                  className="w-full h-28 bg-[#0d1117] border border-[#30363d] rounded px-2 py-1.5 text-sm outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">依赖功能（每行一个功能 ID）</div>
                <textarea
                  value={editingFeature.dependsOnText || ""}
                  onChange={(e) => setEditingFeature((prev) => ({ ...prev, dependsOnText: e.target.value }))}
                  placeholder="例如：F001"
                  className="w-full h-20 bg-[#0d1117] border border-[#30363d] rounded px-2 py-1.5 text-sm outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">功能状态</div>
                <select
                  value={editingFeature.status}
                  onChange={(e) => setEditingFeature((prev) => ({ ...prev, status: e.target.value }))}
                  className="bg-[#0d1117] border border-[#30363d] rounded px-2 py-1.5 text-sm outline-none focus:border-blue-500"
                >
                  <option value="pending">pending</option>
                  <option value="in_progress">in_progress</option>
                  <option value="completed">completed</option>
                  <option value="failed">failed</option>
                  <option value="blocked">blocked</option>
                  <option value="skipped">skipped</option>
                </select>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={cancelEditFeature}
                  className="px-3 py-1.5 text-sm border border-[#30363d] rounded hover:bg-[#21262d]"
                >
                  取消
                </button>
                <button
                  type="button"
                  onClick={saveFeature}
                  disabled={savingFeature}
                  className="px-3 py-1.5 text-sm rounded bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50"
                >
                  {savingFeature ? "保存中..." : "保存功能"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <aside className="w-96 border-l border-[#30363d] bg-[#0d1117] flex flex-col">
        <div className="p-4 border-b border-[#30363d] bg-[#010409] space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <FolderGit2 size={16} className="text-blue-400" />
                未提交变更
              </h3>
              <p className="text-[10px] text-gray-500 mt-1 font-mono">branch: {gitStatus.branch}</p>
            </div>
            <button
              type="button"
              onClick={refreshGitPanels}
              disabled={loadingGit || loadingGitCommits || !workspace.initialized}
              className="p-2 border border-[#30363d] rounded hover:bg-[#21262d] disabled:opacity-50"
            >
              <RefreshCw size={14} className={loadingGit || loadingGitCommits ? "animate-spin" : ""} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              value={workspaceInput}
              onChange={(e) => setWorkspaceInput(e.target.value)}
              placeholder="输入工作目录路径"
              className="flex-1 bg-[#0d1117] border border-[#30363d] rounded px-2 py-1.5 text-xs outline-none focus:border-blue-500 font-mono"
            />
            <button
              type="button"
              onClick={initWorkspace}
              disabled={!workspaceInput.trim() || initializingWorkspace}
              className="px-2 py-1.5 text-xs rounded bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50 disabled:cursor-not-allowed text-white"
            >
              {initializingWorkspace ? "切换中..." : workspace.initialized ? "切换" : "初始化"}
            </button>
          </div>
          <div className="text-[10px] text-gray-500 font-mono truncate">
            workspace: {workspace.directory || "-"}
          </div>
        </div>

        <div className="h-56 overflow-y-auto border-b border-[#30363d] p-2 space-y-1">
          {gitStatus.files.length === 0 ? (
            <div className="text-xs text-gray-500 px-2 py-3">暂无未提交内容</div>
          ) : null}
          {renderTreeNodes(gitTree)}
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-3">
          {!selectedGitFile ? (
            <div className="text-xs text-gray-500">选择一个文件查看差异</div>
          ) : (
            <>
              <div className="text-xs text-gray-400 mb-2 font-mono">{selectedGitFile.path}</div>
              <div className="space-y-3">
                {selectedGitFile.stagedDiff ? (
                  <div>
                    <div className="text-[10px] text-green-400 mb-1 uppercase">staged</div>
                    <DiffBlock text={selectedGitFile.stagedDiff} />
                  </div>
                ) : null}
                {selectedGitFile.unstagedDiff ? (
                  <div>
                    <div className="text-[10px] text-orange-400 mb-1 uppercase">unstaged</div>
                    <DiffBlock text={selectedGitFile.unstagedDiff} />
                  </div>
                ) : null}
                {!selectedGitFile.stagedDiff && !selectedGitFile.unstagedDiff ? (
                  <div className="text-xs text-gray-500">该文件暂无可显示 diff（可能是 untracked）。</div>
                ) : null}
              </div>
            </>
          )}
        </div>

        <div className="h-56 border-t border-[#30363d] bg-[#010409] flex flex-col">
          <div className="px-3 py-2 border-b border-[#30363d] flex items-center justify-between">
            <div className="text-xs font-semibold text-[#f0f6fc] flex items-center gap-2">
              <GitCommitHorizontal size={13} className="text-gray-400" />
              提交历史
            </div>
            <div className="text-[10px] text-gray-500 font-mono">
              {loadingGitCommits ? "SYNC..." : `${gitCommits.length} commits`}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {gitCommits.length === 0 ? (
              <div className="text-xs text-gray-500 px-2 py-3">暂无 commit 记录</div>
            ) : null}
            {gitCommits.map((commit) => (
              <div
                key={commit.hash}
                className="rounded border border-[#30363d] bg-[#0d1117] px-2 py-1.5"
                title={commit.hash}
              >
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="font-mono text-blue-300 shrink-0">{commit.shortHash}</span>
                  <span className="truncate text-gray-200">{commit.subject || "(no subject)"}</span>
                </div>
                <div className="mt-0.5 text-[10px] text-gray-500 truncate">
                  {commit.author} · {commit.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {fixDialog.open ? (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-[1px] flex items-center justify-center p-4">
          <div className="w-full max-w-xl rounded-lg border border-[#30363d] bg-[#0d1117] shadow-2xl">
            <div className="px-4 py-3 border-b border-[#30363d]">
              <div className="text-sm font-semibold text-[#f0f6fc]">{fixDialog.title || "修复建议"}</div>
              <div className="text-xs text-gray-400 mt-1">{fixDialog.subtitle || "是否发送构造的 /fix 指令给 agent？"}</div>
            </div>
            <div className="p-4 space-y-3">
              <div className="text-xs text-red-300 bg-red-500/10 border border-red-500/30 rounded p-2">
                {fixDialog.message || "检测到需要修复的问题"}
              </div>
              {fixDialog.details.length > 0 ? (
                <div className="max-h-40 overflow-y-auto rounded border border-[#30363d] bg-[#010409] p-2 space-y-1">
                  {fixDialog.details.map((detail, idx) => (
                    <div key={`todo-fix-detail-${idx}`} className="text-[11px] text-gray-300 font-mono">
                      - {detail}
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="rounded border border-[#30363d] bg-[#010409] p-2">
                <div className="text-[10px] text-gray-500 mb-1 uppercase">
                  将发送给 {getFixTargetLabel()} 的消息
                </div>
                <pre className="text-[11px] text-gray-300 whitespace-pre-wrap font-mono">{fixDialog.preview}</pre>
              </div>
              {fixDialog.running ? (
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <RefreshCw size={14} className="animate-spin" />
                  {fixDialog.phase === "sending"
                    ? `正在发送 /fix 给 ${getFixTargetLabel()}...`
                    : `已发送，等待 ${getFixTargetLabel()} 修复完成...`}
                </div>
              ) : null}
            </div>
            <div className="px-4 py-3 border-t border-[#30363d] flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={dismissFixDialog}
                disabled={fixDialog.running}
                className="px-3 py-1.5 text-sm rounded border border-[#30363d] hover:bg-[#21262d] disabled:opacity-50"
              >
                取消
              </button>
              <button
                type="button"
                onClick={sendFixToAgent}
                disabled={fixDialog.running}
                className="px-3 py-1.5 text-sm rounded bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50"
              >
                {fixDialog.running
                  ? fixDialog.phase === "sending"
                    ? "发送中..."
                    : "修复中..."
                  : "发送 /fix"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
