import { useCallback, useState } from "react";

export function useClientSession({ apiBase, workspace, setWorkspace, setWorkspaceInput, setError }) {
  const [clients, setClients] = useState([]);
  const [runtimeByClient, setRuntimeByClient] = useState({});
  const [pendingActivations, setPendingActivations] = useState([]);
  const [loadingClients, setLoadingClients] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);

  const applyClientList = useCallback((items, setActiveClientId) => {
    const nextItems = Array.isArray(items) ? items : [];
    setClients(nextItems);
    if (typeof setActiveClientId === "function") {
      setActiveClientId((prev) => {
        if (nextItems.length === 0) return "";
        if (prev && nextItems.some((client) => client.id === prev)) return prev;
        return nextItems[0].id;
      });
    }
  }, []);

  const applyRuntimeList = useCallback((items) => {
    const nextMap = {};
    (Array.isArray(items) ? items : []).forEach((runtime) => {
      if (runtime?.clientId) {
        nextMap[runtime.clientId] = runtime;
      }
    });
    setRuntimeByClient(nextMap);
  }, []);

  const upsertRuntime = useCallback((runtime) => {
    if (!runtime?.clientId) return;
    setRuntimeByClient((prev) => ({
      ...prev,
      [runtime.clientId]: runtime,
    }));
  }, []);

  const upsertClientSummary = useCallback((clientSummary) => {
    if (!clientSummary?.id) return;
    setClients((prev) => {
      const next = Array.isArray(prev) ? [...prev] : [];
      const idx = next.findIndex((item) => item.id === clientSummary.id);
      if (idx >= 0) {
        next[idx] = clientSummary;
      } else {
        next.push(clientSummary);
      }
      return next;
    });
  }, []);

  const buildWebSocketUrl = useCallback(() => {
    const baseUrl = new URL(apiBase);
    baseUrl.protocol = baseUrl.protocol === "https:" ? "wss:" : "ws:";
    baseUrl.pathname = "/api/ws";
    baseUrl.search = "";
    baseUrl.hash = "";
    return baseUrl.toString();
  }, [apiBase]);

  const applySocketSnapshot = useCallback(
    (payload, setActiveClientId) => {
      if (!payload || typeof payload !== "object") return;
      if (payload.workspace) {
        setWorkspace(payload.workspace);
        if (payload.workspace?.directory) {
          setWorkspaceInput(payload.workspace.directory);
        }
      }
      if (Array.isArray(payload.clients)) {
        applyClientList(payload.clients, setActiveClientId);
      }
      if (Array.isArray(payload.runtimes)) {
        applyRuntimeList(payload.runtimes);
      }
      setPendingActivations(Array.isArray(payload.pendingActivations) ? payload.pendingActivations : []);
      setLoadingClients(false);
      setLoadingMessages(false);
    },
    [applyClientList, applyRuntimeList, setWorkspace, setWorkspaceInput]
  );

  async function fetchWorkspace() {
    try {
      const res = await fetch(`${apiBase}/api/workspace`);
      const data = await res.json();
      setWorkspace(data);
      if (data?.directory) {
        setWorkspaceInput(data.directory);
      }
      return data;
    } catch {
      setError("无法连接后端，请确认 backend 已启动");
      return { initialized: false, directory: null };
    }
  }

  async function fetchClients(setActiveClientId, options = {}) {
    if (!workspace.initialized && !options.force) return;
    if (!options.silent) {
      setLoadingClients(true);
    }
    try {
      const res = await fetch(`${apiBase}/api/clients`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "fetch clients failed");
      applyClientList(data?.items, setActiveClientId);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "读取客户端失败");
    } finally {
      if (!options.silent) {
        setLoadingClients(false);
      }
    }
  }

  async function fetchRuntime(clientId, options = {}) {
    if ((!workspace.initialized && !options.force) || !clientId) return;
    if (!options.silent) {
      setLoadingMessages(true);
    }
    try {
      const res = await fetch(`${apiBase}/api/clients/${clientId}/runtime`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "fetch runtime failed");
      upsertRuntime(data);
      setError("");
    } catch (e) {
      if (!options.silent) {
        setRuntimeByClient((prev) => ({
          ...prev,
          [clientId]: null,
        }));
      }
      setError(e instanceof Error ? e.message : "读取运行时状态失败");
    } finally {
      if (!options.silent) {
        setLoadingMessages(false);
      }
    }
  }

  return {
    clients,
    runtimeByClient,
    pendingActivations,
    loadingClients,
    loadingMessages,
    setRuntimeByClient,
    setPendingActivations,
    applyClientList,
    applyRuntimeList,
    upsertClientSummary,
    upsertRuntime,
    buildWebSocketUrl,
    applySocketSnapshot,
    fetchWorkspace,
    fetchClients,
    fetchRuntime,
  };
}
