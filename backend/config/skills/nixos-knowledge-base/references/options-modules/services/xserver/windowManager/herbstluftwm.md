---
module: services.xserver.windowManager.herbstluftwm
option_count: 3
source: options.html
---

# services.xserver.windowManager.herbstluftwm

## services.xserver.windowManager.herbstluftwm.enable

Whether to enable herbstluftwm. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/herbstluftwm.nix>

## services.xserver.windowManager.herbstluftwm.package

The herbstluftwm package to use. Type: package Default: pkgs.herbstluftwm Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/herbstluftwm.nix>

## services.xserver.windowManager.herbstluftwm.configFile

Path to the herbstluftwm configuration file. If left at the default value, $XDG_CONFIG_HOME/herbstluftwm/autostart will be used. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/herbstluftwm.nix>
