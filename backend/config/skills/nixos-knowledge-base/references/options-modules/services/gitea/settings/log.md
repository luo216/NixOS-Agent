---
module: services.gitea.settings.log
option_count: 2
source: options.html
---

# services.gitea.settings.log

## services.gitea.settings.log.LEVEL

General log level. Type: one of “Trace”, “Debug”, “Info”, “Warn”, “Error”, “Critical” Default: "Info" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.settings.log.ROOT_PATH

Root path for log files. Type: string Default: "${config.services.gitea.stateDir}/log" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>
