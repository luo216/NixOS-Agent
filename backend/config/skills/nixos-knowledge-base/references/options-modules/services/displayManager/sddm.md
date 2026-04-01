---
module: services.displayManager.sddm
option_count: 9
source: options.html
---

# services.displayManager.sddm

## services.displayManager.sddm.enable

Whether to enable sddm as the display manager. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>

## services.displayManager.sddm.enableHidpi

Whether to enable automatic HiDPI mode. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>

## services.displayManager.sddm.package

The sddm package to use. Type: package Default: pkgs.kdePackages.sddm Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>

## services.displayManager.sddm.autoNumlock

Enable numlock at login. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>

## services.displayManager.sddm.extraPackages

Extra Qt plugins / QML libraries to add to the environment. Type: list of package Default: "[]" Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>

## services.displayManager.sddm.settings

Extra settings merged in and overwriting defaults in sddm.conf. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { Autologin = { Session = "plasma.desktop"; User = "john"; }; } Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>

## services.displayManager.sddm.setupScript

A script to execute when starting the display server. DEPRECATED, please use services.xserver.displayManager.setupCommands. Type: string Default: "" Example: '' # workaround for using NVIDIA Optimus without Bumblebee xrandr --setprovideroutputsource modesetting NVIDIA-0 xrandr --auto '' Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>

## services.displayManager.sddm.stopScript

A script to execute when stopping the display server. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>

## services.displayManager.sddm.theme

Greeter theme to use. Type: string Default: "" Example: "${pkgs.where-is-my-sddm-theme.override { variants = [ "qt5" ]; }}/share/sddm/themes/where_is_my_sddm_theme_qt5" Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>
