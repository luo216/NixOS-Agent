---
module: services.xserver.displayManager.lightdm
option_count: 4
source: options.html
---

# services.xserver.displayManager.lightdm

## services.xserver.displayManager.lightdm.enable

Whether to enable lightdm as the display manager. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm.nix>

## services.xserver.displayManager.lightdm.background

The background image or color to use. Type: absolute path or string matching the pattern ^#[0-9A-Fa-f]{6}$ Default: pkgs.nixos-artwork.wallpapers.simple-dark-gray-bottom.gnomeFilePath Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm.nix>

## services.xserver.displayManager.lightdm.extraConfig

Extra lines to append to LightDM section. Type: strings concatenated with “\n” Default: "" Example: '' user-authority-in-system-dir = true '' Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm.nix>

## services.xserver.displayManager.lightdm.extraSeatDefaults

Extra lines to append to SeatDefaults section. Type: strings concatenated with “\n” Default: "" Example: '' greeter-show-manual-login=true '' Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm.nix>
