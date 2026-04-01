const CACHE_TTL_MS = 60 * 1000;

let cachedAt = 0;
let cachedCatalog = [];
const CODEX_TOOL_CATALOG = [
  {
    displayName: "Shell",
    name: "run_shell_command",
    category: "execution",
    description: "Run shell commands through Codex command execution.",
  },
  {
    displayName: "Apply Patch",
    name: "apply_patch",
    category: "execution",
    description: "Apply file changes proposed by Codex.",
  },
  {
    displayName: "Web Search",
    name: "web_search",
    category: "research",
    description: "Use Codex web search during a turn.",
  },
  {
    displayName: "MCP Tool Call",
    name: "mcp_tool_call",
    category: "integration",
    description: "Call an MCP-backed external tool.",
  },
  {
    displayName: "Collab Agent",
    name: "collab_agent",
    category: "coordination",
    description: "Spawn or coordinate with another Codex agent.",
  },
  {
    displayName: "Image View",
    name: "image_view",
    aliases: ["image_read"],
    category: "workspace",
    description: "Open a local image for inspection.",
  },
];

export async function getToolCatalog() {
  const now = Date.now();
  if (cachedCatalog.length > 0 && now - cachedAt < CACHE_TTL_MS) {
    return cachedCatalog;
  }

  cachedCatalog = CODEX_TOOL_CATALOG;
  cachedAt = now;
  return cachedCatalog;
}
