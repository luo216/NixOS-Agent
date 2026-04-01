---
module: services.rebuilderd
option_count: 3
source: options.html
---

# services.rebuilderd

## services.rebuilderd.enable

Whether to enable rebuilderd service for independent verification of binary packages. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/rebuilderd.nix>

## services.rebuilderd.package

The rebuilderd package to use. Type: package Default: pkgs.rebuilderd Declared by: <nixpkgs/nixos/modules/services/misc/rebuilderd.nix>

## services.rebuilderd.settings

Configuration for rebuilderd (rebuilderd.conf) Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/rebuilderd.nix>
