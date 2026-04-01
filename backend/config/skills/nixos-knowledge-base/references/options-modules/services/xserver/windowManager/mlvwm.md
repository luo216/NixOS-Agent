---
module: services.xserver.windowManager.mlvwm
option_count: 2
source: options.html
---

# services.xserver.windowManager.mlvwm

## services.xserver.windowManager.mlvwm.enable

Whether to enable Macintosh-like Virtual Window Manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/mlvwm.nix>

## services.xserver.windowManager.mlvwm.configFile

Path to the mlvwm configuration file. If left at the default value, $HOME/.mlvwmrc will be used. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/mlvwm.nix>
