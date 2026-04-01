---
module: services.xserver.desktopManager.budgie
option_count: 5
source: options.html
---

# services.xserver.desktopManager.budgie

## services.xserver.desktopManager.budgie.enable

Whether to enable the Budgie desktop. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/budgie.nix>

## services.xserver.desktopManager.budgie.extraGSettingsOverridePackages

List of packages for which GSettings are overridden. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/budgie.nix>

## services.xserver.desktopManager.budgie.extraGSettingsOverrides

Additional GSettings overrides. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/budgie.nix>

## services.xserver.desktopManager.budgie.extraPlugins

Extra plugins for the Budgie desktop Type: list of package Default: [ ] Example: [ pkgs.budgie-analogue-clock-applet ] Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/budgie.nix>

## services.xserver.desktopManager.budgie.sessionPath

Additional list of packages to be added to the session search path. Useful for GSettings-conditional autostart. Note that this should be a last resort; patching the package is preferred (see GPaste). Type: list of package Default: [ ] Example: [ pkgs.gpaste ] Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/budgie.nix>
