---
module: services.xserver.desktopManager.retroarch
option_count: 3
source: options.html
---

# services.xserver.desktopManager.retroarch

## services.xserver.desktopManager.retroarch.enable

Whether to enable RetroArch. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/retroarch.nix>

## services.xserver.desktopManager.retroarch.package

The retroarch package to use. Type: package Default: pkgs.retroarch Example: retroarch-full Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/retroarch.nix>

## services.xserver.desktopManager.retroarch.extraArgs

Extra arguments to pass to RetroArch. Type: list of string Default: [ ] Example: [ "--verbose" "--host" ] Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/retroarch.nix>
