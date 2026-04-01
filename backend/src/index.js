import express from "express";
import { ClientRegistry } from "./clientRegistry.js";
import { collectGitCommits, collectGitStatus } from "./gitStatus.js";
import { getToolCatalog } from "./toolCatalog.js";
import { collectWorkspaceFixState } from "./workspaceFixState.js";
import fs from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { WebSocketServer } from "ws";

const app = express();
const port = process.env.PORT || 8787;
const server = createServer(app);
const wss = new WebSocketServer({ server, path: "/api/ws" });

const registry = new ClientRegistry();
const bootState = await registry.bootstrapFromSavedWorkspace();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  next();
});
app.use(express.json({ limit: "12mb" }));

app.get("/health", (_req, res) => {
  const workspace = registry.getWorkspaceState();
  res.json({
    ok: true,
    service: "backend",
    stage: "workspace-initialized-clients-ready",
    initState: workspace.initialized ? "ready" : "awaiting_workspace",
    workspace,
    clients: registry.listClients(),
  });
});

app.get("/api/workspace", (_req, res) => {
  res.json(registry.getWorkspaceState());
});

app.get("/api/workspace/planned-features", async (_req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized || !workspace.directory) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  const featurePath = path.join(workspace.directory, "planned-features.json");
  try {
    const stat = await fs.stat(featurePath);
    const content = await fs.readFile(featurePath, "utf8");
    const data = JSON.parse(content);
    return res.json({
      exists: true,
      path: featurePath,
      mtimeMs: stat.mtimeMs,
      itemCount: Array.isArray(data?.features) ? data.features.length : 0,
      feature: data,
    });
  } catch (error) {
    if (error && typeof error === "object" && error.code === "ENOENT") {
      return res.json({
        exists: false,
        path: featurePath,
        mtimeMs: 0,
        itemCount: 0,
        feature: null,
        error: "planned-features.json not found",
      });
    }
    if (error instanceof SyntaxError) {
      return res.status(500).json({
        error: "planned-features.json parse failed",
        message: error.message,
      });
    }
    return res.status(500).json({
      error: "read planned-features.json failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.put("/api/workspace/planned-features", async (req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized || !workspace.directory) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  const feature = req.body?.feature;
  if (!feature || typeof feature !== "object" || Array.isArray(feature)) {
    return res.status(400).json({ error: "feature object is required" });
  }

  const featurePath = path.join(workspace.directory, "planned-features.json");
  try {
    await fs.writeFile(featurePath, `${JSON.stringify(feature, null, 2)}\n`, "utf8");
    const stat = await fs.stat(featurePath);
    return res.json({
      ok: true,
      exists: true,
      path: featurePath,
      mtimeMs: stat.mtimeMs,
      itemCount: Array.isArray(feature?.features) ? feature.features.length : 0,
      feature,
    });
  } catch (error) {
    return res.status(500).json({
      error: "write planned-features.json failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.get("/api/tools/catalog", async (_req, res) => {
  try {
    const items = await getToolCatalog();
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({
      error: "load tool catalog failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.post("/api/workspace/init", async (req, res) => {
  const directory = typeof req.body?.directory === "string" ? req.body.directory.trim() : "";
  if (!directory) {
    return res.status(400).json({ error: "directory is required" });
  }

  try {
    const workspace = await registry.setWorkspaceDir(directory);
    return res.json({
      ok: true,
      workspace,
      clients: registry.listClients(),
    });
  } catch (error) {
    if (error && typeof error === "object" && error.code === "INVALID_DIRECTORY") {
      return res.status(400).json({ error: "invalid directory path" });
    }
    return res.status(500).json({
      error: "workspace init failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.post("/api/workspace/sync-codex", (_req, res) => {
  try {
    const result = registry.syncWorkspaceCodexAssets();
    return res.json(result);
  } catch (error) {
    if (error && typeof error === "object" && error.code === "WORKSPACE_NOT_READY") {
      return res.status(400).json({ error: "workspace not initialized" });
    }
    return res.status(500).json({
      error: "sync codex assets failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.get("/api/workspace/git-status", async (_req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized || !workspace.directory) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  try {
    const data = await collectGitStatus(workspace.directory);
    return res.json({
      directory: workspace.directory,
      ...data,
    });
  } catch (error) {
    if (error && typeof error === "object" && error.code === "NOT_GIT_REPO") {
      return res.status(400).json({ error: "selected directory is not a git repository" });
    }
    return res.status(500).json({
      error: "git status failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.get("/api/workspace/fix-state", async (_req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized || !workspace.directory) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  try {
    const data = await collectWorkspaceFixState(workspace.directory);
    return res.json({
      directory: workspace.directory,
      ...data,
    });
  } catch (error) {
    return res.status(500).json({
      error: "workspace fix state failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.get("/api/workspace/git-commits", async (req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized || !workspace.directory) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  const limit = Number.parseInt(String(req.query.limit || "30"), 10);
  try {
    const data = await collectGitCommits(workspace.directory, Number.isNaN(limit) ? 30 : limit);
    return res.json({
      directory: workspace.directory,
      ...data,
    });
  } catch (error) {
    if (error && typeof error === "object" && error.code === "NOT_GIT_REPO") {
      return res.status(400).json({ error: "selected directory is not a git repository" });
    }
    return res.status(500).json({
      error: "git commits failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.get("/api/clients", (_req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  res.json({
    items: registry.listClients(),
  });
});

app.get("/api/activations/pending", (_req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  return res.json({
    items: registry.listPendingActivations(),
  });
});

app.post("/api/activations/:id/consume", (req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  try {
    return res.json(registry.consumePendingActivation(req.params.id));
  } catch (error) {
    if (error && typeof error === "object" && error.code === "ACTIVATION_NOT_FOUND") {
      return res.status(404).json({ error: "activation not found" });
    }
    return res.status(500).json({
      error: "consume activation failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.get("/api/clients/:id/runtime", (req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  const runtime = registry.getClientRuntime(req.params.id);
  if (!runtime) {
    return res.status(404).json({ error: "client not found" });
  }

  return res.json(runtime);
});

app.get("/api/clients/:id/options", (req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  const options = registry.getClientOptions(req.params.id);
  if (!options) {
    return res.status(404).json({ error: "client not found" });
  }

  return res.json(options);
});

app.put("/api/clients/:id/options", async (req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  try {
    const updated = await registry.updateClientOptions(req.params.id, req.body || {});
    return res.json({
      ok: true,
      item: updated,
    });
  } catch (error) {
    if (error && typeof error === "object" && error.code === "CLIENT_NOT_FOUND") {
      return res.status(404).json({ error: "client not found" });
    }
    return res.status(500).json({
      error: "update client options failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.post("/api/clients/:id/turns", async (req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  try {
    const result = await registry.startTurn(req.params.id, req.body || {});
    return res.status(202).json(result);
  } catch (error) {
    if (error && typeof error === "object" && error.code === "CLIENT_NOT_FOUND") {
      return res.status(404).json({ error: "client not found" });
    }
    if (error && typeof error === "object" && error.code === "WORKSPACE_NOT_READY") {
      return res.status(400).json({ error: "workspace not initialized" });
    }
    if (error && typeof error === "object" && error.code === "CLIENT_BUSY") {
      return res.status(409).json({ error: "client is busy" });
    }
    if (error && typeof error === "object" && error.code === "INVALID_TURN_PAYLOAD") {
      return res.status(400).json({
        error: "invalid turn payload",
        message: error instanceof Error ? error.message : String(error),
      });
    }
    return res.status(500).json({
      error: "start turn failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.post("/api/fix/run", async (req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  try {
    const result = await registry.runEphemeralFix(req.body || {});
    return res.json(result);
  } catch (error) {
    if (error && typeof error === "object" && error.code === "WORKSPACE_NOT_READY") {
      return res.status(400).json({ error: "workspace not initialized" });
    }
    if (error && typeof error === "object" && error.code === "INVALID_FIX_PAYLOAD") {
      return res.status(400).json({
        error: "invalid fix payload",
        message: error instanceof Error ? error.message : String(error),
      });
    }
    return res.status(500).json({
      error: "run ephemeral fix failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

async function handleActivateClient(req, res, toClientId) {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  const fromClientId = typeof req.body?.fromClientId === "string" ? req.body.fromClientId.trim() : "";
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  if (!fromClientId) {
    return res.status(400).json({ error: "fromClientId is required" });
  }
  if (!message) {
    return res.status(400).json({ error: "message is required" });
  }

  try {
    const result = await registry.activateClientMessage(fromClientId, toClientId, message);
    return res.json({
      ok: true,
      message: "发送成功",
      fromClientId: result?.fromClientId || fromClientId,
      toClientId: result?.toClientId || toClientId,
      dispatched: result?.dispatched === true,
    });
  } catch (error) {
    if (error && typeof error === "object" && error.code === "CLIENT_NOT_FOUND") {
      return res.status(404).json({ error: "from or target client not found" });
    }
    if (error && typeof error === "object" && error.code === "WORKSPACE_NOT_READY") {
      return res.status(400).json({ error: "workspace not initialized" });
    }
    return res.status(500).json({
      error: "activate client failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
}

app.post("/api/clients/:targetClientId/activate-client", async (req, res) => {
  return handleActivateClient(req, res, req.params.targetClientId);
});


app.post("/api/clients/:id/interrupt", async (req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  try {
    const result = await registry.interruptClient(req.params.id);
    return res.json(result);
  } catch (error) {
    if (error && typeof error === "object" && error.code === "CLIENT_NOT_FOUND") {
      return res.status(404).json({ error: "client not found" });
    }
    return res.status(500).json({
      error: "interrupt failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

app.post("/api/clients/:id/history/clear", async (req, res) => {
  const workspace = registry.getWorkspaceState();
  if (!workspace.initialized) {
    return res.status(400).json({ error: "workspace not initialized" });
  }

  try {
    const result = await registry.clearClientHistory(req.params.id);
    return res.json(result);
  } catch (error) {
    if (error && typeof error === "object" && error.code === "CLIENT_NOT_FOUND") {
      return res.status(404).json({ error: "client not found" });
    }
    return res.status(500).json({
      error: "clear history failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});

function sendWsJson(ws, payload) {
  if (ws.readyState !== 1) return;
  ws.send(JSON.stringify(payload));
}

wss.on("connection", (ws) => {
  sendWsJson(ws, {
    type: "bootstrap",
    workspace: registry.getWorkspaceState(),
    clients: registry.listClients(),
    pendingActivations: registry.listPendingActivations(),
  });

  const unsubscribe = registry.subscribe((payload) => {
    sendWsJson(ws, payload);
  });

  ws.on("close", () => {
    unsubscribe();
  });
});

async function gracefulShutdown() {
  await registry.shutdownAll();
  process.exit(0);
}

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);

app.use((error, _req, res, next) => {
  if (error?.type === "entity.too.large") {
    return res.status(413).json({
      error: "payload too large",
      message: "request body exceeds the configured size limit",
    });
  }
  return next(error);
});

server.listen(port, () => {
  if (bootState?.restored) {
    console.log(`Workspace restored: ${bootState.directory}`);
  } else {
    console.log("Workspace not restored, waiting for init");
  }
  console.log(`Backend listening on http://localhost:${port}`);
});
