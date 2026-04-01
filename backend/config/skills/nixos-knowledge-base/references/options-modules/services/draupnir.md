---
module: services.draupnir
option_count: 3
source: options.html
---

# services.draupnir

## services.draupnir.enable

Whether to enable Draupnir, a moderations bot for Matrix. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/draupnir.nix>

## services.draupnir.package

The draupnir package to use. Type: package Default: pkgs.draupnir Declared by: <nixpkgs/nixos/modules/services/matrix/draupnir.nix>

## services.draupnir.settings

Free-form settings written to Draupnir’s configuration file. See Draupnir’s default configuration for available settings. Type: open submodule of (YAML 1.1 value) Default: { } Example: { homeserverUrl = "https://matrix.org"; managementRoom = "#moderators:example.org"; autojoinOnlyIfManager = true; automaticallyRedactForReasons = [ "spam" "advertising" ]; } Declared by: <nixpkgs/nixos/modules/services/matrix/draupnir.nix>
