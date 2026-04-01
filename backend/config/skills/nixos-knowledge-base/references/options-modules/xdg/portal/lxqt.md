---
module: xdg.portal.lxqt
option_count: 2
source: options.html
---

# xdg.portal.lxqt

## xdg.portal.lxqt.enable

Whether to enable the desktop portal for the LXQt desktop environment. This will add the lxqt.xdg-desktop-portal-lxqt package (with the extra Qt styles) into the xdg.portal.extraPortals option . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/xdg/portals/lxqt.nix>

## xdg.portal.lxqt.styles

Extra Qt styles that will be available to the lxqt.xdg-desktop-portal-lxqt. Type: list of package Default: [ ] Example: [ pkgs.libsForQt5.qtstyleplugin-kvantum pkgs.breeze-qt5 pkgs.qtcurve ]; Declared by: <nixpkgs/nixos/modules/config/xdg/portals/lxqt.nix>
