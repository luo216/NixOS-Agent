---
module: services.xserver.displayManager.lightdm.greeter
option_count: 3
source: options.html
---

# services.xserver.displayManager.lightdm.greeter

## services.xserver.displayManager.lightdm.greeter.enable

If set to false, run lightdm in greeterless mode. This only works if autologin is enabled and autoLogin.timeout is zero. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm.nix>

## services.xserver.displayManager.lightdm.greeter.package

The LightDM greeter to login via. The package should be a directory containing a .desktop file matching the name in the ‘name’ option. Type: package Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm.nix>

## services.xserver.displayManager.lightdm.greeter.name

The name of a .desktop file in the directory specified in the ‘package’ option. Type: string Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm.nix>
