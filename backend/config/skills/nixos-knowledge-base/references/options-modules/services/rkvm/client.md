---
module: services.rkvm.client
option_count: 2
source: options.html
---

# services.rkvm.client

## services.rkvm.client.enable

Whether to enable the rkvm client daemon (input receiver). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>

## services.rkvm.client.settings

Structured client daemon configuration Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/rkvm.nix>
