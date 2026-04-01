---
module: services.xserver.windowManager.bspwm
option_count: 3
source: options.html
---

# services.xserver.windowManager.bspwm

## services.xserver.windowManager.bspwm.enable

Whether to enable bspwm. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/bspwm.nix>

## services.xserver.windowManager.bspwm.package

The bspwm package to use. Type: package Default: pkgs.bspwm Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/bspwm.nix>

## services.xserver.windowManager.bspwm.configFile

Path to the bspwm configuration file. If null, $HOME/.config/bspwm/bspwmrc will be used. Type: null or absolute path Default: null Example: "${pkgs.bspwm}/share/doc/bspwm/examples/bspwmrc" Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/bspwm.nix>
