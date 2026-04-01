---
module: services.displayManager.ly
option_count: 4
source: options.html
---

# services.displayManager.ly

## services.displayManager.ly.enable

Whether to enable ly as the display manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/display-managers/ly.nix>

## services.displayManager.ly.package

The ly package to use. Type: package Default: pkgs.ly Declared by: <nixpkgs/nixos/modules/services/display-managers/ly.nix>

## services.displayManager.ly.settings

Extra settings merged in and overwriting defaults in config.ini. Type: attribute set of (INI atom (null, bool, int, float or string)) Default: { } Example: { load = false; save = false; } Declared by: <nixpkgs/nixos/modules/services/display-managers/ly.nix>

## services.displayManager.ly.x11Support

Whether to enable support for X11 Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/display-managers/ly.nix>
