---
module: services.xserver.desktopManager.cde
option_count: 2
source: options.html
---

# services.xserver.desktopManager.cde

## services.xserver.desktopManager.cde.enable

Whether to enable Common Desktop Environment. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/cde.nix>

## services.xserver.desktopManager.cde.extraPackages

Extra packages to be installed system wide. Type: list of package Default: with pkgs.xorg; [ xclock bitmap xlsfonts xfd xrefresh xload xwininfo xdpyinfo xwd xwud ] Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/cde.nix>
