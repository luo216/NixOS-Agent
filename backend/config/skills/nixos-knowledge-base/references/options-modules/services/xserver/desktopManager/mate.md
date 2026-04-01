---
module: services.xserver.desktopManager.mate
option_count: 5
source: options.html
---

# services.xserver.desktopManager.mate

## services.xserver.desktopManager.mate.enable

Enable the MATE desktop environment Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/mate.nix>

## services.xserver.desktopManager.mate.enableWaylandSession

Whether to enable MATE Wayland session. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/mate.nix>

## services.xserver.desktopManager.mate.debug

Whether to enable mate-session debug messages. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/mate.nix>

## services.xserver.desktopManager.mate.extraCajaExtensions

Extra extensions to add to caja. Type: list of package Default: [ ] Example: with pkgs.mate; [ caja-extensions ] Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/mate.nix>

## services.xserver.desktopManager.mate.extraPanelApplets

Extra applets to add to mate-panel. Type: list of package Default: [ ] Example: with pkgs.mate; [ mate-applets ] Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/mate.nix>
