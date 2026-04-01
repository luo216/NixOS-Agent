# Implementer Manual

## Role

- Implement confirmed features from `planned-features.json`.
- 保持实施日志和交接上下文同步。
- Delegate execution and verification work to `worker`.

## Skill Usage

- Use `nixos` for implementation direction, module composition judgment, and common NixOS patterns.
- Use `nixos-knowledge-base` for manual lookup when exact module or option behavior is unclear.
- Use `nixos-patterns` when a working example or repository layout reference will speed up implementation.
- Use `nixpkgs-inspector` whenever package names, options, modules, or attr paths need exact verification.

## Inputs

- `planned-features.json`
- `AGENTS.md`
- `codex-progress.md`
- Current repository state and existing configuration files

## Standard Procedure

1. Read `planned-features.json`, `AGENTS.md`, and `codex-progress.md`.
2. Pick exactly one executable feature from `planned-features.json` at a time. A feature is executable only when all ids in `dependsOn` are already `completed`.
3. Before implementation starts, mark that single feature as `in_progress` in `planned-features.json`. If this status change has not been written yet, implementation has not started.
4. Implement only that feature. Do not start a second feature before the current one is resolved.
5. Use the Nix-related skills progressively. Do not guess when a skill can confirm syntax, option names, or module behavior.
6. Keep `planned-features.json` and `codex-progress.md` updated as you go.
7. Every feature must have validation before it can be resolved.
8. Use direct shell execution only for short, single-shot, non-interactive commands.
9. Route any `nix` command, `ssh`-based check, build, install, long-running verification, or full-TTY flow to `worker`.
10. If validation is about software functionality, runtime behavior, or interactive flows, prefer `ssh` or another headless path; do not assume a GUI environment exists.
11. When the task needs `ssh`, instruct `worker` to first enter a tmux-backed remote interactive shell with `ssh ...`, then run the actual checks and tests inside that same remote shell instead of spawning disconnected one-shot ssh commands.
12. In the handoff message, say whether `worker` should stay attached to the remote shell for repeated checks, service inspection, or follow-up commands.
13. Once `worker` has been activated, stop the current turn immediately. Resume only after `worker` reports back.
14. If the current feature is clearly blocked, failed, or not worth more immediate effort, write `blocked` or `failed`, record the reason, and move on to the next dependency-ready feature.
15. If the current feature has gone through multiple rounds without meaningful progress, do not keep grinding indefinitely. Prefer marking it `blocked`, `failed`, or `skipped`, record the reason clearly, and continue with the next dependency-ready feature.
16. Before resolving a feature, write its final status back to `planned-features.json`, append the development record to `codex-progress.md`, and keep artifacts mutually consistent.
17. Every completed feature requires its own git commit before you move on.
18. Do not stop after one completed feature unless the user asks you to pause, all features are done, or you hit a real blocker. After each completed feature, immediately continue to the next dependency-ready feature.
19. If current implementation changes project usage or structure, update the relevant README.
20. 在向 `worker` 发起交接前，明确总结任务目标、命令范围、验证目标和期望的回传内容。

## Execution Checklist

1. Read `planned-features.json`, `AGENTS.md`, and `codex-progress.md`.
2. Select the first dependency-ready feature.
3. Mark it `in_progress` before touching implementation files.
4. Implement only that feature.
5. Validate it; if validation needs `nix`, `ssh`, long supervision, or full TTY, activate `worker` and end the current turn immediately.
6. If the feature is blocked or fails, record the reason and set it to `blocked` or `failed` instead of getting stuck.
7. If several rounds pass without meaningful progress, prefer `blocked`, `failed`, or `skipped` over endless retries, and record the reason clearly.
8. Append new log entries and the development record to `codex-progress.md`.
9. Set the feature status to `completed`, `failed`, `blocked`, or `skipped` before closing the round.
10. Record the validation result and commit information in `codex-progress.md`.
11. Commit the resolved feature as one git commit.
12. Only after the progress entry and commit both exist, continue to the next dependency-ready feature.
13. Long-running tests, long-running validation, `nix`, `ssh`, and full-TTY command flows belong to `worker`, not `implementer`.
14. For software-function tests, runtime checks, or interaction checks, prefer `ssh` or other headless verification paths instead of assuming a GUI is available.
15. For `ssh`-driven validation, tell `worker` whether to keep one tmux session open as a remote shell and continue all related commands inside it.

## When To Use Worker

- any `nix build`, `nix run`, `nixos-rebuild`, `home-manager switch`
- any `ssh` command or remote verification
- any software-function or runtime-behavior check that can be validated over `ssh`
- any case where a remote shell should stay alive across multiple checks, prompts, or observations
- anything expected to run longer than a short one-shot command
- anything likely to prompt, stream logs, or require repeated observation
- any command sequence that depends on a real TTY

## Outputs

- Implemented repository changes aligned with the approved plan.
- Updated `planned-features.json`
- Updated `codex-progress.md`

## 交接

- 需要交接时：只使用下面固定的脚本，不要直接调用 activation API。
- If a command is not short, single-shot, and non-interactive, do not run it directly from `implementer`.
- 对长时间运行的命令或完整 TTY 命令序列，向 `worker` 发起交接是强制要求，不是可选项。
- 对 `ssh` 场景，默认按“tmux 会话 -> 进入远端 shell -> 在远端 shell 内继续验证”的方式交接，除非任务明确只需要一次性无状态远程命令。
- 激活 `worker` 后，立即结束当前 turn，并等待 `worker` 在后续 turn 中回传结果。
- Fixed command:
  `bash .codex/skills/codex-operations-manual/scripts/activate-worker.sh implementer "MESSAGE"`
