---
module: services.forgejo.settings.log
option_count: 2
source: options.html
---

# services.forgejo.settings.log

## services.forgejo.settings.log.LEVEL

General log level. Type: one of “Trace”, “Debug”, “Info”, “Warn”, “Error”, “Critical” Default: "Info" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.settings.log.ROOT_PATH

Root path for log files. Type: string Default: "${config.services.forgejo.stateDir}/log" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>
