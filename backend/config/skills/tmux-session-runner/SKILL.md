---
name: tmux-session-runner
description: Minimal tmux runner for one task per session. Use when Codex needs to create an isolated tmux session, send commands into that session's main shell, inspect the session status, or inspect recent output from the main window.
---

# Tmux Session Runner

## File Tree

```text
.
|-- SKILL.md
`-- scripts/
    `-- tmux-session-runner.sh
```

Use this skill as the execution backend for anything that is not a short one-shot shell command.

Hard rule:

- Any `ssh` command, any `nix` command, and any command that may run for a long time must use this skill.
- After sending a long-running command, do not assume it finished. Use `sleep` plus repeated `inspect-session` / `inspect-window` checks until the session returns to `idle` or a blocker appears.

Default model:

- one task = one session
- one session = one `main` shell
- send every follow-up command into that same `main` shell
- create or confirm the session before sending commands

By default this skill uses an isolated tmux server:

- socket path: `/tmp/nixos-agent-tmux.sock`
- config file: `/dev/null`

That isolation avoids breakage from the user's personal `tmux` config.

## Main Commands

Use only these commands in normal work:

- `ensure-session --session NAME`
- `list-sessions`
- `send-command --session NAME --command CMD`
- `inspect-session --session NAME`
- `inspect-window --session NAME --lines 100`

`run-command` is still accepted as a compatibility alias for `send-command`, but prefer `send-command` in new usage.

`send-command` does not create sessions implicitly. The expected sequence is:

1. `list-sessions`
2. `ensure-session --session NAME`
3. `send-command --session NAME --command CMD`

## Session Naming

Keep session names short and task-specific. Prefer names like:

- `hm-switch`
- `nixos-rebuild`
- `paru-upgrade`
- `review-foo`

Avoid vague names like `test`, `work`, or `temp`.

## Practical Pattern

For real work, prefer this pattern:

1. Create or reuse the task session.
2. Use `list-sessions` when you need to discover existing task sessions before reusing one.
3. Send commands into that session's `main` shell.
4. Include `cd` in the command string when the task must run in another directory.
5. Poll with `inspect-session` and `inspect-window`.

Example:

```bash
scripts/tmux-session-runner.sh ensure-session --session hm-switch
scripts/tmux-session-runner.sh send-command --session hm-switch --command "cd /home/steve/Share/nix-config && nix run github:nix-community/home-manager -- switch --flake .#steve@hasee"
scripts/tmux-session-runner.sh inspect-session --session hm-switch
scripts/tmux-session-runner.sh inspect-window --session hm-switch --lines 120
sleep 30
scripts/tmux-session-runner.sh inspect-session --session hm-switch
scripts/tmux-session-runner.sh inspect-window --session hm-switch --lines 120
```

What this demonstrates:

- The task keeps all context in one shell.
- `cd ... && ...` keeps directory changes inside the session.
- `inspect-session` answers whether the task is `idle`, `busy`, or `dead`.
- `inspect-window` shows recent output without attaching.
- `sleep 30` represents the normal polling rhythm for long-running work: send the command, wait, inspect again, and repeat until the session returns to `idle` or a prompt/error appears.

## Recommended Command Style

Prefer these patterns inside `send-command`:

- use `cd /target/path && ...` so the session stays self-contained
- use one clear top-level command per session
- prefer explicit flags over shell aliases
- keep stdout/stderr visible; do not silence output unless the task requires it
- for repeated observation, poll with `inspect-session` and `inspect-window` instead of attaching interactively

## Nix Workloads

Use tmux for all of these:

- `nix build`
- `nix run`
- `nixos-rebuild switch`
- `home-manager switch`
- `nix flake check`
- any build or evaluation likely to take more than a few seconds

Recommended patterns:

- include `--accept-flake-config` when the target repo expects it
- keep the session name tied to the task, for example `flake-check`, `hm-switch`, `rebuild-host`
- when a command may run long, inspect every 15-60 seconds depending on expected duration

Examples:

```bash
scripts/tmux-session-runner.sh ensure-session --session flake-check
scripts/tmux-session-runner.sh send-command --session flake-check --command "cd /workspace && nix flake check --accept-flake-config"
sleep 20
scripts/tmux-session-runner.sh inspect-session --session flake-check
scripts/tmux-session-runner.sh inspect-window --session flake-check --lines 120
```

```bash
scripts/tmux-session-runner.sh ensure-session --session rebuild-host
scripts/tmux-session-runner.sh send-command --session rebuild-host --command "cd /workspace && sudo nixos-rebuild switch --flake .#my-host"
sleep 30
scripts/tmux-session-runner.sh inspect-session --session rebuild-host
scripts/tmux-session-runner.sh inspect-window --session rebuild-host --lines 120
```

```bash
scripts/tmux-session-runner.sh ensure-session --session hm-switch
scripts/tmux-session-runner.sh send-command --session hm-switch --command "cd /workspace && home-manager switch --flake .#user@host"
sleep 20
scripts/tmux-session-runner.sh inspect-session --session hm-switch
scripts/tmux-session-runner.sh inspect-window --session hm-switch --lines 120
```

## SSH Workloads

Use tmux for all `ssh` checks, remote tails, and remote rebuild / restart flows.

Recommended patterns:

- prefer explicit SSH options in the command string rather than relying on local shell aliases
- when the task is read-only, prefer `ssh -o BatchMode=yes ...` so prompts fail fast
- when remote output may stream for a while, dedicate one session to that remote task
- keep the remote command quoted as a single string
- for software-function or runtime-behavior checks, prefer verifying over `ssh` or another headless path; do not assume a local GUI environment is available

Examples:

```bash
scripts/tmux-session-runner.sh ensure-session --session ssh-check
scripts/tmux-session-runner.sh send-command --session ssh-check --command "ssh -o BatchMode=yes root@host 'hostname && uptime && systemctl is-system-running'"
sleep 10
scripts/tmux-session-runner.sh inspect-session --session ssh-check
scripts/tmux-session-runner.sh inspect-window --session ssh-check --lines 120
```

```bash
scripts/tmux-session-runner.sh ensure-session --session ssh-journal
scripts/tmux-session-runner.sh send-command --session ssh-journal --command "ssh root@host 'journalctl -fu nixos-rebuild.service'"
sleep 15
scripts/tmux-session-runner.sh inspect-session --session ssh-journal
scripts/tmux-session-runner.sh inspect-window --session ssh-journal --lines 120
```

## Common Monitoring Rhythms

- quick command: wait 5-10 seconds, inspect once
- medium command: wait 15-30 seconds between inspections
- long build / remote tail: wait 30-60 seconds between inspections
- if output shows a prompt, password request, confirmation, or crash, stop polling and report it explicitly

## Status Model

`inspect-session` reports only one window: `main`.

- `idle`: foreground process is a shell
- `busy`: some other command is running
- `dead`: the pane exited; the next `send-command` will respawn it automatically

## Notes

- By default the skill uses `/tmp/nixos-agent-tmux.sock` and ignores user tmux config via `/dev/null`.
- Pass `TMUX_SOCKET_PATH`, `TMUX_SOCKET_NAME`, or `TMUX_CONFIG_PATH` only when you intentionally want different behavior.
- Keep the session name explicit in user-facing explanations so the operator can attach manually if needed.
- When worker finishes monitoring or hits a blocker, hand results back with `bash .codex/skills/codex-operations-manual/scripts/activate-implementer.sh worker "MESSAGE"`.
