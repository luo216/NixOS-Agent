---
module: services.xserver.windowManager.wmderland
option_count: 3
source: options.html
---

# services.xserver.windowManager.wmderland

## services.xserver.windowManager.wmderland.enable

Whether to enable wmderland. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/wmderland.nix>

## services.xserver.windowManager.wmderland.extraPackages

Extra packages to be installed system wide. Type: list of package Default: with pkgs; [ rofi dunst light hsetroot feh rxvt-unicode ] Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/wmderland.nix>

## services.xserver.windowManager.wmderland.extraSessionCommands

Shell commands executed just before wmderland is started. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/wmderland.nix>
