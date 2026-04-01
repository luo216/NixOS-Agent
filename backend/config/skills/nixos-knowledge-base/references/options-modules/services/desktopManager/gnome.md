---
module: services.desktopManager.gnome
option_count: 5
source: options.html
---

# services.desktopManager.gnome

## services.desktopManager.gnome.enable

Enable GNOME desktop manager. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>

## services.desktopManager.gnome.debug

Whether to enable pkgs.gnome-session debug messages. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>

## services.desktopManager.gnome.extraGSettingsOverridePackages

List of packages for which gsettings are overridden. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>

## services.desktopManager.gnome.extraGSettingsOverrides

Additional gsettings overrides. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>

## services.desktopManager.gnome.sessionPath

Additional list of packages to be added to the session search path. Useful for GNOME Shell extensions or GSettings-conditional autostart. Note that this should be a last resort; patching the package is preferred (see GPaste). Type: list of package Default: [ ] Example: [ pkgs.gpaste ] Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>
