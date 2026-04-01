import { execFile } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs/promises";
import path from "node:path";

const execFileAsync = promisify(execFile);

function parsePorcelainLine(line) {
  const staged = line.slice(0, 1);
  const unstaged = line.slice(1, 2);
  let filePath = line.slice(3).trim();

  if (filePath.includes(" -> ")) {
    filePath = filePath.split(" -> ").at(-1) || filePath;
  }

  return {
    path: filePath,
    staged,
    unstaged,
    status: `${staged}${unstaged}`,
    untracked: staged === "?" && unstaged === "?",
  };
}

async function runGit(cwd, args) {
  const { stdout } = await execFileAsync("git", ["-C", cwd, ...args], {
    maxBuffer: 2 * 1024 * 1024,
  });
  return stdout;
}

async function runGitDiff(cwd, args) {
  try {
    return await runGit(cwd, args);
  } catch (error) {
    if (error && typeof error === "object" && typeof error.stdout === "string") {
      return error.stdout;
    }
    return "";
  }
}

export async function collectGitStatus(cwd) {
  try {
    await runGit(cwd, ["rev-parse", "--is-inside-work-tree"]);
  } catch {
    const err = new Error("not a git repository");
    err.code = "NOT_GIT_REPO";
    throw err;
  }

  const branch = (await runGit(cwd, ["rev-parse", "--abbrev-ref", "HEAD"]))
    .trim()
    .replace(/^HEAD$/, "detached");

  const porcelain = await runGit(cwd, ["status", "--porcelain"]);
  const files = porcelain
    .split("\n")
    .filter(Boolean)
    .map(parsePorcelainLine);

  const expandedFiles = [];
  for (const item of files) {
    if (item.untracked && item.path.endsWith("/")) {
      const listed = await runGitDiff(cwd, ["ls-files", "--others", "--exclude-standard", "--", item.path]);
      const childFiles = listed
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((childPath) => ({
          path: childPath,
          staged: "?",
          unstaged: "?",
          status: "??",
          untracked: true,
        }));
      if (childFiles.length > 0) {
        expandedFiles.push(...childFiles);
      } else {
        expandedFiles.push(item);
      }
      continue;
    }
    expandedFiles.push(item);
  }

  const detailedFiles = [];
  for (const item of expandedFiles) {
    let unstagedDiff = "";
    let stagedDiff = "";

    if (item.untracked) {
      const absPath = path.join(cwd, item.path);
      const gitGeneratedDiff = await runGitDiff(cwd, ["diff", "--no-index", "--", "/dev/null", item.path]);
      if (gitGeneratedDiff.trim()) {
        unstagedDiff = gitGeneratedDiff;
        detailedFiles.push({
          ...item,
          unstagedDiff,
          stagedDiff,
        });
        continue;
      }
      try {
        const content = await fs.readFile(absPath, "utf8");
        const rawLines = content === "" ? [] : content.split("\n");
        const plusLines = rawLines
          .map((line) => `+${line}`)
          .join("\n");
        const lineCount = rawLines.length;
        unstagedDiff = [
          `diff --git a/${item.path} b/${item.path}`,
          "new file mode 100644",
          "index 0000000..0000000",
          "--- /dev/null",
          `+++ b/${item.path}`,
          `@@ -0,0 +1,${lineCount} @@`,
          plusLines,
        ].join("\n");
      } catch {
        unstagedDiff = [
          `diff --git a/${item.path} b/${item.path}`,
          "new file mode 100644",
          "--- /dev/null",
          `+++ b/${item.path}`,
          "@@ -0,0 +1 @@",
          "+[binary or unreadable file]",
        ].join("\n");
      }
    } else {
      unstagedDiff = await runGitDiff(cwd, ["diff", "--", item.path]);
      stagedDiff = await runGitDiff(cwd, ["diff", "--cached", "--", item.path]);
    }

    detailedFiles.push({
      ...item,
      unstagedDiff,
      stagedDiff,
    });
  }

  return {
    branch,
    fileCount: detailedFiles.length,
    files: detailedFiles,
  };
}

export async function collectGitCommits(cwd, limit = 30) {
  try {
    await runGit(cwd, ["rev-parse", "--is-inside-work-tree"]);
  } catch {
    const err = new Error("not a git repository");
    err.code = "NOT_GIT_REPO";
    throw err;
  }

  const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(200, Math.floor(limit))) : 30;
  const raw = await runGit(cwd, [
    "log",
    `--max-count=${safeLimit}`,
    "--date=iso-strict",
    "--pretty=format:%H%x1f%h%x1f%an%x1f%ad%x1f%s%x1e",
  ]);

  const commits = raw
    .split("\x1e")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const [hash = "", shortHash = "", author = "", date = "", subject = ""] = entry.split("\x1f");
      return {
        hash,
        shortHash,
        author,
        date,
        subject,
      };
    });

  return {
    count: commits.length,
    commits,
  };
}
