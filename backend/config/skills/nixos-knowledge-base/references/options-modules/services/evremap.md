---
module: services.evremap
option_count: 2
source: options.html
---

# services.evremap

## services.evremap.enable

Whether to enable evremap, a keyboard input remapper for Linux/Wayland systems. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/evremap.nix>

## services.evremap.settings

Settings for evremap. See the upstream documentation for how to configure evremap. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/evremap.nix>
