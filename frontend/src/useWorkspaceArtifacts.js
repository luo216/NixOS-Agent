import { useState } from "react";

export function useWorkspaceArtifacts({
  apiBase,
  workspace,
  fixDialog,
  setError,
  maybeOpenFixDialog,
  resetFixDialog,
  dismissedFixKeysRef,
  buildGitWorkspaceFixCommandMessage,
  buildPlannedFeaturesFixCommandMessage,
}) {
  const [gitStatus, setGitStatus] = useState({ branch: "-", fileCount: 0, files: [] });
  const [loadingGit, setLoadingGit] = useState(false);
  const [gitCommits, setGitCommits] = useState([]);
  const [loadingGitCommits, setLoadingGitCommits] = useState(false);
  const [featureState, setFeatureState] = useState({
    exists: false,
    loading: false,
    path: "",
    mtimeMs: 0,
    itemCount: 0,
    feature: null,
    error: "",
  });
  const [selectedGitPath, setSelectedGitPath] = useState("");
  const [expandedDirs, setExpandedDirs] = useState({});

  async function fetchWorkspaceFixState(options = {}) {
    if (!workspace.initialized && !options.force) return { ok: false, reason: "workspace_not_initialized" };

    try {
      const res = await fetch(`${apiBase}/api/workspace/fix-state`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || data?.error || "fetch workspace fix state failed");
      }

      const issues = Array.isArray(data?.issues) ? data.issues : [];
      if (data?.needsFix) {
        const issueKey = `git-workspace:${workspace.directory || ""}:${issues.map((item) => item?.code || "").join("|")}`;
        if (!options.suppressFixPrompt) {
          maybeOpenFixDialog({
            kind: "git-workspace",
            issueKey,
            title: "Git / .codex 工作区需要修复",
            subtitle: "检测到当前 workspace 需要统一修复 git 与 .codex 状态，是否执行一次性 /fix 修复？",
            message: issues.map((item) => item?.message).filter(Boolean).join(" "),
            details: issues.map((item) => item?.message).filter(Boolean),
            preview: buildGitWorkspaceFixCommandMessage({
              workspaceDir: workspace.directory || "",
              initializeRepo: data?.gitInitialized !== true,
              details: issues.map((item) => item?.message).filter(Boolean),
            }),
          });
        }
      } else if (fixDialog.kind === "git-workspace" && !fixDialog.running) {
        dismissedFixKeysRef.current.delete(fixDialog.issueKey);
        resetFixDialog();
      }

      return { ok: true, status: 200, data };
    } catch (e) {
      setError(e instanceof Error ? e.message : "读取 workspace 修复状态失败");
      return { ok: false, status: -1, error: e };
    }
  }

  async function fetchGitStatus(options = {}) {
    if (!workspace.initialized && !options.force) return;
    setLoadingGit(true);
    try {
      const fixStateResult = await fetchWorkspaceFixState(options);
      if (!fixStateResult?.ok) {
        setGitStatus({ branch: "-", fileCount: 0, files: [] });
        setSelectedGitPath("");
        return fixStateResult;
      }
      if (fixStateResult.data?.gitInitialized !== true) {
        setGitStatus({ branch: "-", fileCount: 0, files: [] });
        setSelectedGitPath("");
        return { ok: false, status: 400, type: "not_git_repo", data: fixStateResult.data };
      }

      const res = await fetch(`${apiBase}/api/workspace/git-status`);
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 400 && data?.error === "selected directory is not a git repository") {
          setGitStatus({ branch: "-", fileCount: 0, files: [] });
          setSelectedGitPath("");
          return { ok: false, status: 400, type: "not_git_repo", data };
        }
        throw new Error(data?.error || "fetch git status failed");
      }
      const files = Array.isArray(data?.files) ? data.files : [];
      setGitStatus({
        branch: data?.branch || "-",
        fileCount: files.length,
        files,
      });
      setSelectedGitPath((prev) => {
        if (files.length === 0) return "";
        if (prev && files.some((file) => file.path === prev)) return prev;
        return files[0].path;
      });
      setExpandedDirs((prev) => {
        const next = { ...prev };
        files.forEach((file) => {
          const parts = file.path.split("/").filter(Boolean);
          let built = "";
          parts.slice(0, -1).forEach((part) => {
            built = built ? `${built}/${part}` : part;
            if (next[built] === undefined) next[built] = true;
          });
        });
        return next;
      });
      setError("");
      return { ok: true, status: 200, data };
    } catch (e) {
      setGitStatus({ branch: "-", fileCount: 0, files: [] });
      setSelectedGitPath("");
      setError(e instanceof Error ? e.message : "读取 git 状态失败");
      return { ok: false, status: -1, error: e };
    } finally {
      setLoadingGit(false);
    }
  }

  async function fetchGitCommits(options = {}) {
    if (!workspace.initialized && !options.force) return;
    setLoadingGitCommits(true);
    try {
      const res = await fetch(`${apiBase}/api/workspace/git-commits?limit=50`);
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 400 && data?.error === "selected directory is not a git repository") {
          setGitCommits([]);
          return { ok: false, status: 400, type: "not_git_repo", data };
        }
        throw new Error(data?.error || "fetch git commits failed");
      }
      setGitCommits(Array.isArray(data?.commits) ? data.commits : []);
      setError("");
      return { ok: true, status: 200, data };
    } catch (e) {
      setGitCommits([]);
      setError(e instanceof Error ? e.message : "读取 git commit 失败");
      return { ok: false, status: -1, error: e };
    } finally {
      setLoadingGitCommits(false);
    }
  }

  async function fetchFeatureState(options = {}) {
    if (!workspace.initialized && !options.force) return { ok: false, reason: "workspace_not_initialized" };
    if (!options.silent) {
      setFeatureState((prev) => ({ ...prev, loading: true }));
    }
    try {
      const res = await fetch(`${apiBase}/api/workspace/planned-features`);
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 404) {
          setFeatureState({
            exists: false,
            loading: false,
            path: data?.path || "",
            mtimeMs: 0,
            itemCount: 0,
            feature: null,
            error: "",
          });
          return { ok: false, status: 404, data };
        }
        if (res.status === 500) {
          const message = data?.message || data?.error || "planned-features.json parse failed";
          const details = Array.isArray(data?.details) ? data.details : [];
          setFeatureState((prev) => ({
            ...prev,
            loading: false,
            error: message,
          }));
          maybeOpenFixDialog({
            kind: "planned-features-json",
            issueKey: `feature-invalid:${message}:${details.join("|")}`,
            title: "planned-features.json 异常",
            subtitle: "检测到格式错误，是否执行一次性 /fix 修复？",
            message,
            details,
            preview: buildPlannedFeaturesFixCommandMessage({
              workspaceDir: workspace.directory || "",
              message,
              details,
            }),
          });
          return { ok: false, status: 500, data };
        }
        throw new Error(data?.message || data?.error || "fetch planned features failed");
      }
      setFeatureState({
        exists: true,
        loading: false,
        path: data?.path || "",
        mtimeMs: data?.mtimeMs || 0,
        itemCount: Array.isArray(data?.feature?.features) ? data.feature.features.length : 0,
        feature: data?.feature || null,
        error: "",
      });
      setError("");
      return { ok: true, status: 200, data };
    } catch (e) {
      const message = e instanceof Error ? e.message : "读取 planned-features.json 失败";
      setFeatureState((prev) => ({
        ...prev,
        loading: false,
        error: message,
      }));
      setError(message);
      return { ok: false, status: -1, error: e };
    }
  }

  return {
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
  };
}
