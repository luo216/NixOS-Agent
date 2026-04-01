---
module: services.znapzend
option_count: 8
source: options.html
---

# services.znapzend

## services.znapzend.enable

Whether to enable ZnapZend ZFS backup daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.autoCreation

Automatically create the destination dataset if it does not exist. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.logLevel

The log level when logging to file. Any of debug, info, warning, err, alert. Default in daemonized form is debug. Type: one of “debug”, “info”, “warning”, “err”, “alert” Default: "debug" Example: "warning" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.logTo

Where to log to (syslog::<facility> or <filepath>). Type: string Default: "syslog::daemon" Example: "/var/log/znapzend.log" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.mailErrorSummaryTo

Email address to send a summary to if “send task(s) failed”. Type: (optionally newline-terminated) single-line string Default: "" Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.noDestroy

Does all changes to the filesystem except destroy. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.pure

Do not persist any stateful znapzend setups. If this option is enabled, your previously set znapzend setups will be cleared and only the ones defined with this module will be applied. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>

## services.znapzend.zetup

Znapzend configuration. Type: attribute set of (submodule) Default: { } Example: { "tank/home" = { # Make snapshots of tank/home every hour, keep those for 1 day, # keep every days snapshot for 1 month, etc. plan = "1d=>1h,1m=>1d,1y=>1m"; recursive = true; # Send all those snapshots to john@example.com:rtank/john as well destinations.remote = { host = "john@example.com"; dataset = "rtank/john"; }; }; }; Declared by: <nixpkgs/nixos/modules/services/backup/znapzend.nix>
