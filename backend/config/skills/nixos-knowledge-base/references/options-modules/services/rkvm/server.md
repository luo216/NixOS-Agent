---
module: services.rkvm.server
option_count: 2
source: options.html
---

# services.rkvm.server

## services.rkvm.server.enable

Whether to enable the rkvm server daemon (input transmitter). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>

## services.rkvm.server.settings

Structured server daemon configuration Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>
