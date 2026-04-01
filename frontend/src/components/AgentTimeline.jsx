import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { GitCommitHorizontal } from "lucide-react";
import { buildTimelineBlocks } from "../runtimeMessageUtils.js";

const META_BLOCK_KINDS = new Set(["warning_block", "status_block", "reasoning_block"]);

function normalizeMarkdownSpacing(text) {
  if (typeof text !== "string" || !text.trim()) return "";

  const normalized = text.replace(/\r\n?/g, "\n");
  const segments = normalized.split(/(```[\s\S]*?```)/g);

  return segments
    .map((segment) => {
      if (segment.startsWith("```") && segment.endsWith("```")) {
        return segment;
      }

      return segment
        .replace(/\n{3,}/g, "\n\n")
        .replace(/((?:^|\n)\s*(?:[-*+]|\d+\.)[^\n]*?)\n{2,}(?=\s*(?:[-*+]|\d+\.)\s)/g, "$1\n");
    })
    .join("");
}

function DiffBlock({ text }) {
  const lines = text.split("\n");

  return (
    <div className="min-w-0 max-w-full overflow-hidden rounded border border-[#30363d] bg-[#010409] text-[11px] font-mono">
      {lines.map((line, idx) => {
        let cls = "px-2 py-0.5 text-gray-300";
        if (line.startsWith("+") && !line.startsWith("+++")) {
          cls = "px-2 py-0.5 bg-green-500/15 text-green-300";
        } else if (line.startsWith("-") && !line.startsWith("---")) {
          cls = "px-2 py-0.5 bg-red-500/15 text-red-300";
        } else if (line.startsWith("@@")) {
          cls = "px-2 py-0.5 bg-blue-500/10 text-blue-300";
        } else if (
          line.startsWith("diff --git") ||
          line.startsWith("index ") ||
          line.startsWith("---") ||
          line.startsWith("+++")
        ) {
          cls = "px-2 py-0.5 bg-slate-700/20 text-slate-300";
        }

        return (
          <div key={`${idx}-${line}`} className={cls}>
            {line || " "}
          </div>
        );
      })}
    </div>
  );
}

function basename(path) {
  if (typeof path !== "string" || !path.trim()) return "";
  const normalized = path.replace(/\\/g, "/");
  return normalized.split("/").filter(Boolean).at(-1) || normalized;
}

function buildFallbackPatchText(path, kind, movePath) {
  const normalizedMovePath = typeof movePath === "string" && movePath.trim() ? movePath.trim() : "";

  switch (kind) {
    case "add":
    case "create":
      return [
        `diff --tool a/${path} b/${path}`,
        `--- /dev/null`,
        `+++ b/${path}`,
        "@@",
        `+ created ${path}`,
      ].join("\n");
    case "delete":
    case "remove":
      return [
        `diff --tool a/${path} b/${path}`,
        `--- a/${path}`,
        `+++ /dev/null`,
        "@@",
        `- deleted ${path}`,
      ].join("\n");
    case "move":
    case "rename":
      return [
        `diff --tool a/${path} b/${normalizedMovePath || path}`,
        `--- a/${path}`,
        `+++ b/${normalizedMovePath || path}`,
        "@@",
        `- moved from ${path}`,
        `+ moved to ${normalizedMovePath || path}`,
      ].join("\n");
    default:
      return [`diff --tool a/${path} b/${path}`, `@@ ${kind} @@`, `~ ${path}`].join("\n");
  }
}

function isUnifiedDiffText(text) {
  if (typeof text !== "string") return false;
  const trimmed = text.trim();
  if (!trimmed) return false;
  return (
    trimmed.startsWith("@@") ||
    trimmed.includes("\n@@") ||
    trimmed.startsWith("diff --") ||
    trimmed.startsWith("--- ") ||
    trimmed.startsWith("+++ ")
  );
}

function prefixDiffLines(text, prefix) {
  const normalized = typeof text === "string" ? text.replace(/\r\n?/g, "\n") : "";
  const lines = normalized.split("\n");
  if (lines.length === 1 && lines[0] === "") return `${prefix}`;
  return lines.map((line) => `${prefix}${line}`).join("\n");
}

function renderChangeDiff(path, kind, diff, movePath) {
  const normalizedDiff = typeof diff === "string" ? diff.trimEnd() : "";
  if (!normalizedDiff) {
    return buildFallbackPatchText(path, kind, movePath);
  }

  if (isUnifiedDiffText(normalizedDiff)) {
    return [`diff --tool a/${path} b/${path}`, `--- a/${path}`, `+++ b/${path}`, normalizedDiff].join("\n");
  }

  if (kind === "add" || kind === "create") {
    return [
      `diff --tool a/${path} b/${path}`,
      `--- /dev/null`,
      `+++ b/${path}`,
      "@@",
      prefixDiffLines(normalizedDiff, "+"),
    ].join("\n");
  }

  if (kind === "delete" || kind === "remove") {
    return [
      `diff --tool a/${path} b/${path}`,
      `--- a/${path}`,
      `+++ /dev/null`,
      "@@",
      prefixDiffLines(normalizedDiff, "-"),
    ].join("\n");
  }

  return [`diff --tool a/${path} b/${path}`, `--- a/${path}`, `+++ b/${path}`, normalizedDiff].join("\n");
}

function MarkdownBlock({ text }) {
  const headingClass = "font-semibold text-[#f0f6fc] leading-[1.3] mt-1.5 mb-1 first:mt-0";
  const normalizedText = normalizeMarkdownSpacing(text);

  return (
    <div className="min-w-0 max-w-full text-[13px] leading-[1.45] text-gray-100">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className={`${headingClass} text-[18px]`}>{children}</h1>,
          h2: ({ children }) => <h2 className={`${headingClass} text-[16px]`}>{children}</h2>,
          h3: ({ children }) => <h3 className={`${headingClass} text-[15px]`}>{children}</h3>,
          h4: ({ children }) => <h4 className={`${headingClass} text-[14px]`}>{children}</h4>,
          h5: ({ children }) => <h5 className={`${headingClass} text-[13px]`}>{children}</h5>,
          h6: ({ children }) => <h6 className={`${headingClass} text-[13px] uppercase tracking-[0.04em]`}>{children}</h6>,
          p: ({ children }) => <p className="my-0 leading-[1.32]">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc pl-5 my-0 leading-[1.32] [&>li+li]:mt-0.5 [&>li>p]:my-0">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 my-0 leading-[1.32] [&>li+li]:mt-0.5 [&>li>p]:my-0">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="my-0 [&>p]:my-0 [&>p]:inline [&>ul]:mt-0.5 [&>ol]:mt-0.5">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mb-0.5 last:mb-0 border-l-2 border-[#30363d] pl-3 text-gray-300">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-1 border-0 border-t border-[#30363d]" />,
          table: ({ children }) => (
            <div className="mb-0.5 last:mb-0 overflow-x-auto">
              <table className="w-full border-collapse text-[12px] border border-[#30363d]">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-[#161b22]">{children}</thead>,
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => <tr className="border-b border-[#30363d]">{children}</tr>,
          th: ({ children }) => (
            <th className="px-2 py-1 text-left font-semibold text-[#f0f6fc] border-r border-[#30363d]">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-2 py-1 align-top text-gray-300 border-r border-[#30363d]">{children}</td>
          ),
          pre: ({ children }) => (
            <pre className="mb-0.5 last:mb-0 max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded border border-[#30363d] bg-[#010409] p-2 text-[12px] leading-[1.34]">
              {children}
            </pre>
          ),
          code: ({ children }) => (
            <code className="break-words rounded border border-[#30363d] bg-[#0d1117] px-1 py-0.5">{children}</code>
          ),
        }}
      >
        {normalizedText}
      </ReactMarkdown>
    </div>
  );
}

function AssistantBlock({ event }) {
  const text = event?.chunk?.text;
  const thought = event?.chunk?.thought;

  if (!text && !thought) return null;

  return (
    <div className="rounded border border-[#30363d] bg-[#0d1117] p-2">
      {text ? <MarkdownBlock text={text} /> : null}
      {thought ? (
        <details className="mt-1">
          <summary className="cursor-pointer text-[11px] text-gray-500">thought</summary>
          <pre className="mt-1 text-[11px] bg-[#010409] border border-[#30363d] rounded p-2 whitespace-pre-wrap">
            {thought}
          </pre>
        </details>
      ) : null}
    </div>
  );
}

function buildToolDiffText(event) {
  if (!event || typeof event !== "object" || event.status !== "completed") return "";
  const toolName = typeof event.toolName === "string" ? event.toolName : "";
  if (toolName !== "apply_patch") return "";

  const args = event.args && typeof event.args === "object" ? event.args : {};
  const changes = Array.isArray(args.changes) ? args.changes : [];
  if (changes.length === 0) {
    const output = typeof event?.output === "string" ? event.output.trim() : "";
    return output;
  }

  const renderedChanges = changes.map((change, idx) => {
    const changePath =
      change?.path ||
      change?.filePath ||
      change?.absolute_path ||
      change?.target_file ||
      change?.file ||
      `unknown-${idx + 1}`;
    const diff = typeof change?.diff === "string" ? change.diff.trim() : "";
    const kindType =
      typeof change?.kind?.type === "string"
        ? change.kind.type
        : typeof change?.type === "string"
          ? change.type
          : "update";

    return renderChangeDiff(changePath, kindType, diff, change?.kind?.move_path);
  });

  return renderedChanges.join("\n");
}

function buildApplyPatchFiles(event) {
  const args = event?.args && typeof event.args === "object" ? event.args : {};
  const changes = Array.isArray(args.changes) ? args.changes : [];
  return changes.map((change, idx) => {
    const path =
      change?.path ||
      change?.filePath ||
      change?.absolute_path ||
      change?.target_file ||
      change?.file ||
      `unknown-${idx + 1}`;
    const diff = typeof change?.diff === "string" ? change.diff.trim() : "";
    const kind =
      typeof change?.kind?.type === "string"
        ? change.kind.type
        : typeof change?.type === "string"
          ? change.type
          : "update";

    return {
      path,
      name: basename(path) || path,
      kind,
      diff: renderChangeDiff(path, kind, diff, change?.kind?.move_path),
    };
  });
}

function formatToolArgs(args) {
  if (!args || typeof args !== "object") return "";

  const command =
    typeof args.command === "string" && args.command.trim()
      ? args.command.trim()
      : typeof args.cmd === "string" && args.cmd.trim()
        ? args.cmd.trim()
        : "";
  if (command) return command;

  const query =
    typeof args.query === "string" && args.query.trim()
      ? args.query.trim()
      : "";
  if (query) return query;

  const path =
    typeof args.path === "string" && args.path.trim()
      ? args.path.trim()
      : typeof args.absolute_path === "string" && args.absolute_path.trim()
        ? args.absolute_path.trim()
        : typeof args.file_path === "string" && args.file_path.trim()
          ? args.file_path.trim()
          : "";
  if (path) return path;

  const changes = Array.isArray(args.changes) ? args.changes : [];
  if (changes.length > 0) {
    const firstPath = changes.find((item) => typeof item?.path === "string" && item.path.trim())?.path || "";
    return firstPath || `${changes.length} changes`;
  }

  const prompt =
    typeof args.prompt === "string" && args.prompt.trim()
      ? args.prompt.trim()
      : "";
  if (prompt) return prompt;

  try {
    const compact = JSON.stringify(args);
    return compact.length > 160 ? `${compact.slice(0, 157)}...` : compact;
  } catch {
    return "";
  }
}

function getToolTitle(event) {
  const toolName = typeof event?.toolName === "string" ? event.toolName : "";
  const args = event?.args && typeof event.args === "object" ? event.args : {};
  const detail = formatToolArgs(args);

  if (toolName === "run_shell_command") {
    return detail ? `Ran "${detail}"` : "Ran shell command";
  }
  if (toolName === "web_search") {
    return event?.status === "completed"
      ? detail
        ? `Searched ${detail}`
        : "Searched the web"
      : "Searching the web";
  }
  if (toolName === "apply_patch") {
    return detail ? `Applied patch to ${detail}` : "Applied patch";
  }
  if (toolName === "image_view") {
    return detail ? `Viewed image ${detail}` : "Viewed image";
  }
  if (toolName === "mcp_tool_call") {
    return detail ? `Called MCP tool ${event?.label || toolName}: ${detail}` : `Called MCP tool ${event?.label || toolName}`;
  }
  if (toolName === "collab_agent") {
    return detail ? `Delegated work: ${detail}` : "Delegated work";
  }
  return detail ? `Called ${event?.label || toolName || "tool"}: ${detail}` : `Called ${event?.label || toolName || "tool"}`;
}

function getToolOutputLine(event, output) {
  if (output.trim()) {
    return output.trim().split("\n")[0];
  }
  if (event?.status === "completed") {
    return "completed";
  }
  if (event?.status === "failed") {
    return "failed";
  }
  return "running";
}

function ToolCallBlock({ event }) {
  const [showRaw, setShowRaw] = useState(false);
  const toolName = typeof event?.toolName === "string" ? event.toolName : "";
  const isWriteTool = toolName === "apply_patch" && event?.status === "completed";
  const isPending = event?.status === "pending";
  const output = typeof event?.output === "string" ? event.output : "";
  const title = getToolTitle(event);
  const outputLine = getToolOutputLine(event, output);
  const toolDiffText = buildToolDiffText(event);
  const applyPatchFiles = toolName === "apply_patch" ? buildApplyPatchFiles(event) : [];

  if (isWriteTool) {
    return (
      <div className="min-w-0 max-w-full rounded border border-[#30363d] bg-[#0d1117] p-2">
        <div className="flex items-start justify-between gap-2">
          <div className="font-mono text-[12px] leading-5 text-[#c9d1d9]">
            <div>{`• ${title}`}</div>
            <div className="text-gray-400 pl-3">{`└ ${outputLine}`}</div>
          </div>
          <button
            type="button"
            onClick={() => setShowRaw((prev) => !prev)}
            className="text-[10px] px-2 py-1 rounded border border-[#30363d] hover:bg-[#21262d] text-gray-300 shrink-0"
          >
            {showRaw ? "查看 diff" : "查看 raw"}
          </button>
        </div>
        <div className="mt-2">
          {showRaw ? (
            <>
              <div className="text-[10px] uppercase text-gray-500 mb-1">raw json</div>
              <pre className="text-[11px] bg-[#010409] border border-[#30363d] rounded p-2 whitespace-pre-wrap">
                {JSON.stringify(event, null, 2)}
              </pre>
            </>
          ) : (
            <>
              <div className="text-[10px] uppercase text-gray-500 mb-1">modified files</div>
              <div className="space-y-2">
                {applyPatchFiles.length > 0 ? (
                  applyPatchFiles.map((file, idx) => (
                    <div key={`${file.path}-${idx}`} className="rounded border border-[#30363d] bg-[#010409]">
                      <div className="flex items-center justify-between gap-2 px-2 py-1 border-b border-[#30363d]">
                        <div className="min-w-0">
                          <div className="text-[11px] font-mono text-[#f0f6fc] truncate">{file.name}</div>
                          <div className="text-[10px] text-gray-500 truncate">{file.path}</div>
                        </div>
                        <span className="shrink-0 rounded border border-[#30363d] bg-white/5 px-1.5 py-0.5 text-[10px] text-gray-300">
                          {file.kind}
                        </span>
                      </div>
                      <DiffBlock text={file.diff} />
                    </div>
                  ))
                ) : (
                  <DiffBlock text={toolDiffText} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <details className="min-w-0 max-w-full rounded border border-[#30363d] bg-[#0d1117] p-2" open>
      <summary className="cursor-pointer list-none">
        <div className="flex items-start justify-between gap-3 font-mono text-[12px] leading-5 text-[#c9d1d9]">
          <div className="min-w-0">
            <div className="whitespace-pre-wrap break-words">{`• ${title}`}</div>
            <div className="text-gray-400 pl-3">{`└ ${outputLine}`}</div>
          </div>
          <span
            className={`shrink-0 rounded border px-1.5 py-0.5 text-[10px] ${
              event?.status === "completed"
                ? "border-green-500/30 bg-green-500/10 text-green-300"
                : event?.status === "failed"
                  ? "border-red-500/30 bg-red-500/10 text-red-300"
                  : "border-amber-500/30 bg-amber-500/10 text-amber-300"
            }`}
          >
            {event?.status || "pending"}
          </span>
        </div>
      </summary>
      <div className="mt-1.5">
        {output.trim() ? (
          <div className="mb-1.5">
            <pre className="max-h-72 max-w-full overflow-auto whitespace-pre-wrap break-words rounded border border-[#30363d] bg-[#010409] p-2 font-mono text-[11px] text-gray-300">
              {output}
            </pre>
          </div>
        ) : null}
        {toolDiffText ? (
          <div className="mb-1.5">
            <div className="text-[10px] uppercase text-gray-500 mb-1">tool diff</div>
            <DiffBlock text={toolDiffText} />
          </div>
        ) : null}
        <details>
          <summary className="cursor-pointer text-[10px] uppercase text-gray-500">raw json</summary>
          <pre className="mt-1 text-[11px] bg-[#010409] border border-[#30363d] rounded p-2 whitespace-pre-wrap">
            {JSON.stringify(event, null, 2)}
          </pre>
        </details>
      </div>
    </details>
  );
}

function MetaEventRow({ block }) {
  const event = block?.event;

  if (block?.kind === "reasoning_block") {
    const text = typeof event?.delta === "string" ? event.delta.trim() : "";
    if (!text) return null;
    return (
      <div className="rounded border border-fuchsia-500/20 bg-fuchsia-500/5 px-2 py-1.5">
        <div className="text-[10px] uppercase text-fuchsia-300/80 mb-1">
          {event?.kind === "summary" ? "reasoning summary" : "reasoning"}
        </div>
        <div className="text-[12px] leading-5 text-fuchsia-100 whitespace-pre-wrap">{text}</div>
      </div>
    );
  }

  if (block?.kind === "warning_block") {
    const title = typeof event?.title === "string" ? event.title : "warning";
    const details = typeof event?.details === "string" ? event.details.trim() : "";
    return (
      <div className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5">
        <div className="text-[10px] uppercase text-amber-300/80 mb-1">warning</div>
        <div className="text-[12px] text-amber-100">{title}</div>
        {details ? <div className="mt-1 text-[11px] text-amber-200/80 whitespace-pre-wrap">{details}</div> : null}
      </div>
    );
  }

  const title = typeof event?.title === "string" ? event.title : "status";
  const message = typeof event?.message === "string" ? event.message.trim() : "";
  return (
    <div className="rounded border border-sky-500/20 bg-sky-500/10 px-2 py-1.5">
      <div className="text-[10px] uppercase text-sky-300/80 mb-1">status</div>
      <div className="text-[12px] text-sky-100">{title}</div>
      {message ? <div className="mt-1 text-[11px] text-sky-200/80 whitespace-pre-wrap">{message}</div> : null}
    </div>
  );
}

function groupTimelineBlocks(blocks) {
  const grouped = [];

  blocks.forEach((block) => {
    if (META_BLOCK_KINDS.has(block?.kind)) {
      const last = grouped[grouped.length - 1];
      if (last?.kind === "meta_group") {
        last.items.push(block);
      } else {
        grouped.push({
          kind: "meta_group",
          eventKey: block?.eventKey || `meta-${grouped.length}`,
          items: [block],
        });
      }
      return;
    }

    grouped.push(block);
  });

  return grouped;
}

function MetaGroupBlock({ block }) {
  const items = Array.isArray(block?.items) ? block.items : [];
  const summary = [];

  items.forEach((item) => {
    if (item?.kind === "reasoning_block") {
      summary.push("reasoning");
    } else if (item?.kind === "warning_block") {
      summary.push("warning");
    } else if (item?.kind === "status_block") {
      summary.push("status");
    }
  });

  return (
    <details className="py-1">
      <summary className="cursor-pointer list-none">
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-[#30363d]" />
          <div className="text-[10px] font-mono uppercase tracking-wide text-gray-500">
            {summary.length > 0 ? `${summary.join(" / ")} · ${items.length}` : `runtime meta · ${items.length}`}
          </div>
          <div className="h-px flex-1 bg-[#30363d]" />
        </div>
      </summary>
      <div className="mt-2 space-y-2">
        {items.map((item, idx) => (
          <MetaEventRow key={item?.eventKey || `${item?.kind}-${idx}`} block={item} />
        ))}
      </div>
    </details>
  );
}

function PlanBlock({ event }) {
  const entries = Array.isArray(event?.entries) ? event.entries : [];
  const doneCount = entries.filter((item) => item?.status === "completed" || item?.status === "done").length;
  const inProgressCount = entries.filter((item) => item?.status === "in_progress").length;
  const explanation = typeof event?.explanation === "string" ? event.explanation.trim() : "";

  function statusTone(status) {
    if (status === "in_progress") return "text-blue-300 bg-blue-500/10 border-blue-500/30";
    if (status === "completed" || status === "done") return "text-green-300 bg-green-500/10 border-green-500/30";
    if (status === "failed" || status === "blocked") return "text-red-300 bg-red-500/10 border-red-500/30";
    return "text-gray-300 bg-white/5 border-[#30363d]";
  }

  function priorityTone(priority) {
    if (priority === "high") return "text-red-300 bg-red-500/10 border-red-500/30";
    if (priority === "medium") return "text-amber-300 bg-amber-500/10 border-amber-500/30";
    if (priority === "low") return "text-green-300 bg-green-500/10 border-green-500/30";
    return "text-gray-300 bg-white/5 border-[#30363d]";
  }

  return (
    <details className="rounded border border-[#30363d] bg-[#0d1117] p-2" open>
      <summary className="cursor-pointer list-none">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[12px] text-[#c9d1d9]">plan</div>
          <div className="text-[10px] text-gray-400">
            {entries.length > 0 ? `${doneCount}/${entries.length} done` : "no steps"}
            {inProgressCount > 0 ? ` · ${inProgressCount} active` : ""}
          </div>
        </div>
      </summary>
      <div className="mt-2 space-y-1.5">
        {explanation ? (
          <div className="rounded border border-[#30363d] bg-[#010409] p-2 text-[12px] leading-5 text-gray-300">
            <MarkdownBlock text={explanation} />
          </div>
        ) : null}
        {entries.length === 0 ? <div className="text-[11px] text-gray-500">空计划</div> : null}
        {entries.map((entry, idx) => (
          <div
            key={`${entry?.id || entry?.title || entry?.content || "plan"}-${idx}`}
            className="rounded border border-[#30363d] bg-[#010409] p-2"
          >
            {entry?.title && entry.title !== entry?.content ? (
              <div className="text-[10px] uppercase tracking-wide text-gray-500 mb-1">{entry.title}</div>
            ) : null}
            <div className="text-[12px] text-[#f0f6fc] leading-5">{entry?.content || entry?.title || "-"}</div>
            {entry?.details ? (
              <div className="mt-1 text-[11px] leading-5 text-gray-400 whitespace-pre-wrap">{entry.details}</div>
            ) : null}
            <div className="mt-1 flex items-center gap-1 text-[10px]">
              <span className={`px-1 py-0.5 rounded border ${statusTone(entry?.status)}`}>
                {entry?.status || "pending"}
              </span>
              <span className={`px-1 py-0.5 rounded border ${priorityTone(entry?.priority)}`}>
                {entry?.priority || "normal"}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <details>
          <summary className="cursor-pointer text-[10px] uppercase text-gray-500">raw json</summary>
          <pre className="mt-1 text-[11px] bg-[#010409] border border-[#30363d] rounded p-2 whitespace-pre-wrap">
            {JSON.stringify(event, null, 2)}
          </pre>
        </details>
      </div>
    </details>
  );
}

function ExitPlanModeBlock({ event }) {
  const planText =
    typeof event?.plan === "string"
      ? event.plan.trim()
      : typeof event?.content === "string"
        ? event.content.trim()
        : typeof event?.message === "string"
          ? event.message.trim()
          : "";
  const title =
    typeof event?.title === "string" && event.title.trim() ? event.title.trim() : "规划已完成";
  const summary =
    typeof event?.summary === "string" && event.summary.trim()
      ? event.summary.trim()
      : "已退出 plan mode，下面是整理后的实施方案。";

  return (
    <details className="rounded border border-[#30363d] bg-[#0d1117] p-2" open>
      <summary className="cursor-pointer list-none">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded border border-[#30363d] bg-[#161b22] text-gray-300">
              <GitCommitHorizontal size={12} />
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[12px] text-[#c9d1d9]">exit_plan_mode</div>
              <div className="truncate text-[11px] text-gray-400">{title}</div>
            </div>
          </div>
          <span className="shrink-0 rounded border border-green-500/30 bg-green-500/10 px-1.5 py-0.5 text-[10px] text-green-300">
            ready
          </span>
        </div>
      </summary>

      <div className="mt-2 space-y-2">
        <div className="rounded border border-[#30363d] bg-[#010409] px-2 py-1.5 text-[12px] leading-5 text-gray-300">
          {summary}
        </div>
        {planText ? (
          <div className="rounded border border-[#30363d] bg-[#010409] p-2">
            <MarkdownBlock text={planText} />
          </div>
        ) : (
          <div className="rounded border border-dashed border-[#30363d] bg-[#010409] px-2 py-3 text-[11px] text-gray-500">
            未提供计划正文。
          </div>
        )}
        <div>
          <details>
            <summary className="cursor-pointer text-[10px] uppercase text-gray-500">raw json</summary>
            <pre className="mt-1 text-[11px] bg-[#010409] border border-[#30363d] rounded p-2 whitespace-pre-wrap">
              {JSON.stringify(event, null, 2)}
            </pre>
          </details>
        </div>
      </div>
    </details>
  );
}

function isCustomOption(option) {
  const label = typeof option?.label === "string" ? option.label.trim().toLowerCase() : "";
  return label === "other" || label === "custom" || label === "other (free-form)";
}

function AskUserQuestionsBlock({ event, eventKey, onSubmit, submitting }) {
  const questions = Array.isArray(event?.questions) ? event.questions : [];
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [customInputs, setCustomInputs] = useState({});
  const [localError, setLocalError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function getQuestionKey(question, idx) {
    return String(question?.header || `Q${idx + 1}`).trim();
  }

  function toggleAnswer(header, label, multiSelect) {
    setSelectedAnswers((prev) => {
      if (!multiSelect) return { ...prev, [header]: label };
      const prevArray = Array.isArray(prev[header]) ? prev[header] : [];
      const exists = prevArray.includes(label);
      return {
        ...prev,
        [header]: exists ? prevArray.filter((item) => item !== label) : [...prevArray, label],
      };
    });
  }

  function applyCustomAnswer(header, multiSelect) {
    const value = typeof customInputs[header] === "string" ? customInputs[header].trim() : "";
    if (!value) return;
    setSelectedAnswers((prev) => {
      if (!multiSelect) {
        return { ...prev, [header]: value };
      }
      const prevArray = Array.isArray(prev[header]) ? prev[header] : [];
      if (prevArray.includes(value)) return prev;
      return {
        ...prev,
        [header]: [...prevArray, value],
      };
    });
  }

  async function submitAnswers() {
    const payload = {};
    for (let idx = 0; idx < questions.length; idx += 1) {
      const question = questions[idx];
      const header = getQuestionKey(question, idx);
      const value = selectedAnswers[header];
      if (question?.multiSelect) {
        if (!Array.isArray(value) || value.length === 0) {
          setLocalError(`请先回答：${header}`);
          return;
        }
        payload[header] = value;
      } else {
        if (typeof value !== "string" || !value.trim()) {
          setLocalError(`请先回答：${header}`);
          return;
        }
        payload[header] = value;
      }
    }

    setLocalError("");
    try {
      await onSubmit(payload, eventKey);
      setSubmitted(true);
    } catch (error) {
      setLocalError(error instanceof Error ? error.message : "提交失败");
    }
  }

  return (
    <div className="rounded border border-amber-500/40 bg-amber-500/10 p-2">
      <div className="text-[11px] font-semibold text-amber-300 mb-2">需要你确认</div>
      <div className="space-y-3">
        {questions.map((question, idx) => {
          const header = getQuestionKey(question, idx);
          const options = Array.isArray(question?.options) ? question.options : [];
          const displayOptions = options.filter((opt) => !isCustomOption(opt));
          const optionLabels = new Set(displayOptions.map((opt) => String(opt?.label || "")));
          const multiSelect = Boolean(question?.multiSelect);
          const current = selectedAnswers[header];
          const selectedCustom = multiSelect
            ? (Array.isArray(current) ? current : []).filter((item) => !optionLabels.has(String(item || "")))
            : typeof current === "string" && !optionLabels.has(current)
              ? [current]
              : [];

          return (
            <div key={`${header}-${idx}`} className="border border-[#30363d] rounded p-2 bg-[#0d1117]">
              <div className="text-[11px] text-gray-400 mb-1">{header}</div>
              <div className="text-[12px] text-[#f0f6fc] mb-2">{question?.question || "-"}</div>
              <div className="space-y-1">
                {displayOptions.map((opt, optionIdx) => {
                  const label = opt?.label || "";
                  const checked = multiSelect
                    ? Array.isArray(current) && current.includes(label)
                    : current === label;
                  return (
                    <button
                      key={`${header}-${label}-${optionIdx}`}
                      type="button"
                      onClick={() => toggleAnswer(header, label, multiSelect)}
                      className={`w-full text-left px-2 py-1 rounded border text-[12px] ${
                        checked
                          ? "border-blue-500/70 bg-blue-500/15 text-blue-200"
                          : "border-[#30363d] bg-[#010409] text-gray-300 hover:bg-[#161b22]"
                      }`}
                    >
                      <div>{label}</div>
                      <div className="text-[10px] text-gray-500">{opt?.description || ""}</div>
                    </button>
                  );
                })}
              </div>
              <div className="mt-2 flex gap-2">
                <input
                  value={customInputs[header] || ""}
                  onChange={(e) =>
                    setCustomInputs((prev) => ({
                      ...prev,
                      [header]: e.target.value,
                    }))
                  }
                  placeholder={multiSelect ? "输入自定义项并添加" : "输入自定义答案"}
                  className="flex-1 bg-[#010409] border border-[#30363d] rounded px-2 py-1 text-[12px] outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => applyCustomAnswer(header, multiSelect)}
                  className="px-2 py-1 text-[11px] rounded border border-[#30363d] hover:bg-[#21262d]"
                >
                  使用自定义
                </button>
              </div>
              {selectedCustom.length > 0 ? (
                <div className="mt-2 text-[11px] text-blue-300">
                  {`已选自定义：${selectedCustom.join(" / ")}`}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      {localError ? <div className="text-[11px] text-red-300 mt-2">{localError}</div> : null}
      <div className="mt-2 flex justify-end">
        <button
          type="button"
          onClick={submitAnswers}
          disabled={submitting || submitted || questions.length === 0}
          className="px-2 py-1 text-[11px] rounded border border-[#30363d] hover:bg-[#21262d] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitted ? "已提交" : submitting ? "提交中..." : "提交回答"}
        </button>
      </div>
    </div>
  );
}

function ErrorBlock({ event }) {
  const code = event?.code;
  const message = event?.message || "unknown error";
  const details = event?.details;

  return (
    <details className="rounded border border-red-500/40 bg-red-500/10 p-2" open>
      <summary className="cursor-pointer list-none">
        <div className="font-mono text-[12px] leading-5 text-red-200">
          <div>{`error${code !== undefined ? ` (${code})` : ""}`}</div>
          <div className="text-red-300/90 pl-3">{`└ ${message}`}</div>
        </div>
      </summary>
      {details ? (
        <div className="mt-2">
          <div className="text-[10px] uppercase text-red-200/80 mb-1">details</div>
          <pre className="text-[11px] bg-[#010409] border border-red-500/30 rounded p-2 whitespace-pre-wrap">
            {typeof details === "string" ? details : JSON.stringify(details, null, 2)}
          </pre>
        </div>
      ) : null}
      <div className="mt-2">
        <details>
          <summary className="cursor-pointer text-[10px] uppercase text-red-200/80">raw json</summary>
          <pre className="mt-1 text-[11px] bg-[#010409] border border-red-500/30 rounded p-2 whitespace-pre-wrap">
            {JSON.stringify(event, null, 2)}
          </pre>
        </details>
      </div>
    </details>
  );
}

function WarningBlock({ event }) {
  const title = typeof event?.title === "string" && event.title.trim() ? event.title.trim() : "warning";
  const details = typeof event?.details === "string" ? event.details.trim() : "";

  return (
    <details className="rounded border border-amber-500/40 bg-amber-500/10 p-2" open>
      <summary className="cursor-pointer list-none">
        <div className="font-mono text-[12px] leading-5 text-amber-200">
          <div>{title}</div>
          {details ? <div className="text-amber-300/90 pl-3">{`└ ${details}`}</div> : null}
        </div>
      </summary>
      <div className="mt-2">
        <details>
          <summary className="cursor-pointer text-[10px] uppercase text-amber-200/80">raw json</summary>
          <pre className="mt-1 text-[11px] bg-[#010409] border border-amber-500/30 rounded p-2 whitespace-pre-wrap">
            {JSON.stringify(event, null, 2)}
          </pre>
        </details>
      </div>
    </details>
  );
}

function StatusBlock({ event }) {
  const title = typeof event?.title === "string" && event.title.trim() ? event.title.trim() : "status";
  const message = typeof event?.message === "string" ? event.message.trim() : "";
  const details = event?.details;

  return (
    <details className="rounded border border-sky-500/30 bg-sky-500/10 p-2">
      <summary className="cursor-pointer list-none">
        <div className="font-mono text-[12px] leading-5 text-sky-200">
          <div>{title}</div>
          {message ? <div className="text-sky-300/90 pl-3">{`└ ${message}`}</div> : null}
        </div>
      </summary>
      {details ? (
        <div className="mt-2">
          <div className="text-[10px] uppercase text-sky-200/80 mb-1">details</div>
          <pre className="text-[11px] bg-[#010409] border border-sky-500/30 rounded p-2 whitespace-pre-wrap">
            {typeof details === "string" ? details : JSON.stringify(details, null, 2)}
          </pre>
        </div>
      ) : null}
    </details>
  );
}

function ReasoningBlock({ event }) {
  const title = event?.kind === "summary" ? "reasoning summary" : "reasoning";
  const text = typeof event?.delta === "string" ? event.delta : "";

  if (!text.trim()) return null;

  return (
    <details className="rounded border border-fuchsia-500/20 bg-fuchsia-500/5 p-2">
      <summary className="cursor-pointer list-none">
        <div className="font-mono text-[12px] leading-5 text-fuchsia-200">
          <div>{title}</div>
          <div className="text-fuchsia-300/80 pl-3">{`└ ${text.split("\n")[0]}`}</div>
        </div>
      </summary>
      <pre className="mt-2 text-[11px] bg-[#010409] border border-fuchsia-500/20 rounded p-2 whitespace-pre-wrap">
        {text}
      </pre>
    </details>
  );
}

function GenericBlock({ event }) {
  return (
    <div className="rounded border border-[#30363d] bg-[#0d1117] p-2">
      <div className="text-[11px] text-gray-400 uppercase mb-1">{event?.type || "event"}</div>
      <pre className="text-[11px] bg-[#010409] border border-[#30363d] rounded p-2 whitespace-pre-wrap">
        {JSON.stringify(event, null, 2)}
      </pre>
    </div>
  );
}

function StreamingPlaceholderBlock() {
  const [dotCount, setDotCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setDotCount((prev) => (prev >= 6 ? 3 : prev + 1));
    }, 280);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded border border-[#30363d] bg-[#0d1117] p-3">
      <div className="text-[12px] text-gray-400 font-mono">{`正在生成${".".repeat(dotCount)}`}</div>
    </div>
  );
}

function FallbackMarkdownBlock({ text }) {
  return (
    <div className="rounded border border-[#30363d] bg-[#0d1117] p-2">
      <MarkdownBlock text={text} />
    </div>
  );
}

function TimelineBlockRenderer({ block }) {
  switch (block?.kind) {
    case "assistant_message":
      return <AssistantBlock event={block.event} />;
    case "plan_block":
      return <PlanBlock event={block.event} />;
    case "exit_plan_mode_block":
      return <ExitPlanModeBlock event={block.event} />;
    case "tool_call_block":
      return <ToolCallBlock event={block.event} />;
    case "finish_block":
      return null;
    case "error_block":
      return <ErrorBlock event={block.event} />;
    case "warning_block":
      return <WarningBlock event={block.event} />;
    case "status_block":
      return <StatusBlock event={block.event} />;
    case "reasoning_block":
      return <ReasoningBlock event={block.event} />;
    case "meta_group":
      return <MetaGroupBlock block={block} />;
    case "streaming_placeholder":
      return <StreamingPlaceholderBlock />;
    case "fallback_markdown":
      return <FallbackMarkdownBlock text={block.text} />;
    default:
      return <GenericBlock event={block?.event} />;
  }
}

export function AgentTimeline({ entry }) {
  const blocks = groupTimelineBlocks(buildTimelineBlocks(entry));

  return (
    <div className="min-w-0 max-w-full space-y-2">
      {blocks.map((block, idx) => (
        <TimelineBlockRenderer key={block?.eventKey || `${block?.kind || "block"}-${idx}`} block={block} />
      ))}
    </div>
  );
}

export { DiffBlock, MarkdownBlock };
