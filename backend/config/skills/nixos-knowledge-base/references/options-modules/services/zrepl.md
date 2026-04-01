---
module: services.zrepl
option_count: 3
source: options.html
---

# services.zrepl

## services.zrepl.enable

Whether to enable zrepl. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/zrepl.nix>

## services.zrepl.package

The zrepl package to use. Type: package Default: pkgs.zrepl Declared by: <nixpkgs/nixos/modules/services/backup/zrepl.nix>

## services.zrepl.settings

Configuration for zrepl. See https://zrepl.github.io/configuration.html for more information. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/zrepl.nix>
