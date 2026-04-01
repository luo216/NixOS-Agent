---
module: services.earlyoom
option_count: 11
source: options.html
---

# services.earlyoom

## services.earlyoom.enable

Whether to enable early out of memory killing. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/system/earlyoom.nix>

## services.earlyoom.enableDebugInfo

Enable debugging messages. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/system/earlyoom.nix>

## services.earlyoom.enableNotifications

Send notifications about killed processes via the system d-bus. WARNING: enabling this option (while convenient) should not be done on a machine where you do not trust the other users as it allows any other local user to DoS your session by spamming notifications. To actually see the notifications in your GUI session, you need to have systembus-notify running as your user, which this option handles by enabling services.systembus-notify. See README for details. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/system/earlyoom.nix>

## services.earlyoom.package

The earlyoom package to use. Type: package Default: pkgs.earlyoom Declared by: <nixpkgs/nixos/modules/services/system/earlyoom.nix>

## services.earlyoom.extraArgs

Extra command-line arguments to be passed to earlyoom. Each element in the value list will be escaped as an argument without further word-breaking. Type: list of string Default: [ ] Example: [ "-g" "--prefer" "(^|/)(java|chromium)$" ] Declared by: <nixpkgs/nixos/modules/services/system/earlyoom.nix>

## services.earlyoom.freeMemKillThreshold

Minimum available memory (in percent) before sending SIGKILL. If unset, this defaults to half of freeMemThreshold. See the description of services.earlyoom.freeMemThreshold. Type: null or integer between 1 and 100 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/system/earlyoom.nix>

## services.earlyoom.freeMemThreshold

Minimum available memory (in percent). If the available memory falls below this threshold (and the analog is true for freeSwapThreshold) the killing begins. SIGTERM is sent first to the process that uses the most memory; then, if the available memory falls below freeMemKillThreshold (and the analog is true for freeSwapKillThreshold), SIGKILL is sent. See README for details. Type: integer between 1 and 100 (both inclusive) Default: 10 Declared by: <nixpkgs/nixos/modules/services/system/earlyoom.nix>

## services.earlyoom.freeSwapKillThreshold

Minimum free swap space (in percent) before sending SIGKILL. If unset, this defaults to half of freeSwapThreshold. See the description of services.earlyoom.freeMemThreshold. Type: null or integer between 1 and 100 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/system/earlyoom.nix>

## services.earlyoom.freeSwapThreshold

Minimum free swap space (in percent) before sending SIGTERM. See the description of services.earlyoom.freeMemThreshold. Type: integer between 1 and 100 (both inclusive) Default: 10 Declared by: <nixpkgs/nixos/modules/services/system/earlyoom.nix>

## services.earlyoom.killHook

An absolute path to an executable to be run for each process killed. Some environment variables are available, see README and the man page for details. WARNING: earlyoom is running in a sandbox with ProtectSystem=“strict” by default, so filesystem write is also prohibited for the hook. If you want to change these protection rules, override the systemd service via systemd.services.earlyoom.serviceConfig.ProtectSystem. Type: null or absolute path Default: null Example: pkgs.writeShellScript "earlyoom-kill-hook" '' echo "Process $EARLYOOM_NAME ($EARLYOOM_PID) was killed" >> /path/to/log '' Declared by: <nixpkgs/nixos/modules/services/system/earlyoom.nix>

## services.earlyoom.reportInterval

Interval (in seconds) at which a memory report is printed (set to 0 to disable). Type: signed integer Default: 3600 Example: 0 Declared by: <nixpkgs/nixos/modules/services/system/earlyoom.nix>
