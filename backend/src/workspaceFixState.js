import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

async function runGit(cwd, args) {
  const { stdout } = await execFileAsync("git", ["-C", cwd, ...args], {
    maxBuffer: 2 * 1024 * 1024,
  });
  return stdout;
}

async function isGitRepository(cwd) {
  try {
    await runGit(cwd, ["rev-parse", "--is-inside-work-tree"]);
    return true;
  } catch {
    return false;
  }
}

async function isPathIgnoredByGit(cwd, targetPath) {
  try {
    await runGit(cwd, ["check-ignore", targetPath]);
    return true;
  } catch {
    return false;
  }
}

export async function collectWorkspaceFixState(cwd) {
  const codexDir = path.join(cwd, ".codex");
  let codexExists = false;

  try {
    const stat = await fs.stat(codexDir);
    codexExists = stat.isDirectory();
  } catch {
    codexExists = false;
  }

  const gitInitialized = await isGitRepository(cwd);
  const codexIgnored = gitInitialized ? await isPathIgnoredByGit(cwd, ".codex/") : false;

  const issues = [];
  if (!gitInitialized) {
    issues.push({
      code: "git_not_initialized",
      message: "当前 workspace 还不是 git 仓库。",
    });
  }
  if (gitInitialized && !codexIgnored) {
    issues.push({
      code: "codex_not_ignored",
      message: "当前 git 工作区没有忽略 .codex/。",
    });
  }
  if (!codexExists) {
    issues.push({
      code: "codex_missing",
      message: "当前 workspace 缺少 .codex 目录，需要重新同步。",
    });
  }

  return {
    gitInitialized,
    codexIgnored,
    codexExists,
    needsFix: issues.length > 0,
    issues,
  };
}
