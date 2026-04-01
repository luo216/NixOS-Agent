---
module: services.desktopManager.gnome.flashback
option_count: 3
source: options.html
---

# services.desktopManager.gnome.flashback

## services.desktopManager.gnome.flashback.enableMetacity

Whether to enable the standard GNOME Flashback session with Metacity. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>

## services.desktopManager.gnome.flashback.customSessions

Other GNOME Flashback sessions to enable. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>

## services.desktopManager.gnome.flashback.panelModulePackages

Packages containing modules that should be made available to pkgs.gnome-panel (usually for applets). If you’re packaging something to use here, please install the modules in $out/lib/gnome-panel/modules. Type: list of package Default: [ pkgs.gnome-applets ] Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>
