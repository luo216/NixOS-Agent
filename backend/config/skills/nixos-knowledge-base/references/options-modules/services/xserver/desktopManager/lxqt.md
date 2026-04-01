---
module: services.xserver.desktopManager.lxqt
option_count: 3
source: options.html
---

# services.xserver.desktopManager.lxqt

## services.xserver.desktopManager.lxqt.enable

Whether to enable the LXQt desktop manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/lxqt.nix>

## services.xserver.desktopManager.lxqt.extraPackages

Extra packages to be installed system wide. Type: list of package Default: [ ] Example: with pkgs; [ xscreensaver ] Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/lxqt.nix>

## services.xserver.desktopManager.lxqt.iconThemePackage

The package that provides a default icon theme. Type: package Default: pkgs.kdePackages.breeze-icons Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/lxqt.nix>
