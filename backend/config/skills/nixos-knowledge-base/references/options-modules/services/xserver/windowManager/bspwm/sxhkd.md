---
module: services.xserver.windowManager.bspwm.sxhkd
option_count: 2
source: options.html
---

# services.xserver.windowManager.bspwm.sxhkd

## services.xserver.windowManager.bspwm.sxhkd.package

The sxhkd package to use. Type: package Default: pkgs.sxhkd Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/bspwm.nix>

## services.xserver.windowManager.bspwm.sxhkd.configFile

Path to the sxhkd configuration file. If null, $HOME/.config/sxhkd/sxhkdrc will be used. Type: null or absolute path Default: null Example: "${pkgs.bspwm}/share/doc/bspwm/examples/sxhkdrc" Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/bspwm.nix>
