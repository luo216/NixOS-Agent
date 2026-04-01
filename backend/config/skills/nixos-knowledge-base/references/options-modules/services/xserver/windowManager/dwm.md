---
module: services.xserver.windowManager.dwm
option_count: 3
source: options.html
---

# services.xserver.windowManager.dwm

## services.xserver.windowManager.dwm.enable

Whether to enable dwm. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/dwm.nix>

## services.xserver.windowManager.dwm.package

The dwm package to use. Type: package Default: pkgs.dwm Example: pkgs.dwm.overrideAttrs (oldAttrs: rec { patches = [ (super.fetchpatch { url = "https://dwm.suckless.org/patches/steam/dwm-steam-6.2.diff"; sha256 = "sha256-f3lffBjz7+0Khyn9c9orzReoLTqBb/9gVGshYARGdVc="; }) ]; }) Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/dwm.nix>

## services.xserver.windowManager.dwm.extraSessionCommands

Shell commands executed just before dwm is started. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/dwm.nix>
