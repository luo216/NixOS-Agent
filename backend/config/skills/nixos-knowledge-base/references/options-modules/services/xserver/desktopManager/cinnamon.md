---
module: services.xserver.desktopManager.cinnamon
option_count: 4
source: options.html
---

# services.xserver.desktopManager.cinnamon

## services.xserver.desktopManager.cinnamon.enable

Whether to enable the cinnamon desktop manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/cinnamon.nix>

## services.xserver.desktopManager.cinnamon.extraGSettingsOverridePackages

List of packages for which gsettings are overridden. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/cinnamon.nix>

## services.xserver.desktopManager.cinnamon.extraGSettingsOverrides

Additional gsettings overrides. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/cinnamon.nix>

## services.xserver.desktopManager.cinnamon.sessionPath

Additional list of packages to be added to the session search path. Useful for GSettings-conditional autostart. Note that this should be a last resort; patching the package is preferred (see GPaste). Type: list of package Default: [ ] Example: [ pkgs.gpaste ] Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/cinnamon.nix>
