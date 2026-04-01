---
module: services.displayManager.lemurs
option_count: 3
source: options.html
---

# services.displayManager.lemurs

## services.displayManager.lemurs.enable

Whether to enable lemurs, a customizable TUI display/login manager. Note For Wayland compositors, your user must be in the “seat” group. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/display-managers/lemurs.nix>

## services.displayManager.lemurs.package

The lemurs package to use. Type: package Default: pkgs.lemurs Declared by: <nixpkgs/nixos/modules/services/display-managers/lemurs.nix>

## services.displayManager.lemurs.settings

Configuration for lemurs, provided as a Nix attribute set and automatically serialized to TOML. See lemurs configuration documentation for available options. Type: TOML value Default: { } Example: { do_log = true; } Declared by: <nixpkgs/nixos/modules/services/display-managers/lemurs.nix>
