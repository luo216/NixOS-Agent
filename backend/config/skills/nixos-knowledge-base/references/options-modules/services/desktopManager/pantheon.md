---
module: services.desktopManager.pantheon
option_count: 7
source: options.html
---

# services.desktopManager.pantheon

## services.desktopManager.pantheon.enable

Enable the pantheon desktop manager Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/desktop-managers/pantheon.nix>

## services.desktopManager.pantheon.debug

Whether to enable gnome-session debug messages. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktop-managers/pantheon.nix>

## services.desktopManager.pantheon.extraGSettingsOverridePackages

List of packages for which gsettings are overridden. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/desktop-managers/pantheon.nix>

## services.desktopManager.pantheon.extraGSettingsOverrides

Additional gsettings overrides. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/desktop-managers/pantheon.nix>

## services.desktopManager.pantheon.extraSwitchboardPlugs

Plugs to add to Switchboard. Type: null or (list of package) Default: null Declared by: <nixpkgs/nixos/modules/services/desktop-managers/pantheon.nix>

## services.desktopManager.pantheon.extraWingpanelIndicators

Indicators to add to Wingpanel. Type: null or (list of package) Default: null Declared by: <nixpkgs/nixos/modules/services/desktop-managers/pantheon.nix>

## services.desktopManager.pantheon.sessionPath

Additional list of packages to be added to the session search path. Useful for GSettings-conditional autostart. Note that this should be a last resort; patching the package is preferred (see GPaste). Type: list of package Default: [ ] Example: [ pkgs.gpaste ] Declared by: <nixpkgs/nixos/modules/services/desktop-managers/pantheon.nix>
