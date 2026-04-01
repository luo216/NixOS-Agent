---
module: services.xserver.displayManager.sx
option_count: 3
source: options.html
---

# services.xserver.displayManager.sx

## services.xserver.displayManager.sx.enable

Whether to enable the “sx” pseudo-display manager, which allows users to start manually via the “sx” command from a vt shell. The X server runs under the user’s id, not as root. The user must provide a ~/.config/sx/sxrc file containing session startup commands, see sx(1). This is not automatically generated from the desktopManager and windowManager settings. sx doesn’t have a way to directly set X server flags, but it can be done by overriding its xorgserver dependency. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/sx.nix>

## services.xserver.displayManager.sx.package

The sx package to use. Type: package Default: pkgs.sx Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/sx.nix>

## services.xserver.displayManager.sx.addAsSession

Whether to add sx as a display manager session. Keep in mind that sx expects to be run from a TTY, so it may not work in your display manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/sx.nix>
