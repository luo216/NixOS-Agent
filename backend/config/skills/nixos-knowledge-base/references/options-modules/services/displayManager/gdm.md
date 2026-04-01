---
module: services.displayManager.gdm
option_count: 6
source: options.html
---

# services.displayManager.gdm

## services.displayManager.gdm.enable

Whether to enable GDM, the GNOME Display Manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/display-managers/gdm.nix>

## services.displayManager.gdm.autoSuspend

On the GNOME Display Manager login screen, suspend the machine after inactivity. (Does not affect automatic suspend while logged in, or at lock screen.) Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/display-managers/gdm.nix>

## services.displayManager.gdm.banner

Optional message to display on the login screen. Type: null or strings concatenated with “\n” Default: null Example: '' foo bar baz '' Declared by: <nixpkgs/nixos/modules/services/display-managers/gdm.nix>

## services.displayManager.gdm.debug

Whether to enable debugging messages in GDM. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/display-managers/gdm.nix>

## services.displayManager.gdm.settings

Options passed to the gdm daemon. See here for supported options. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { debug = { enable = true; }; } Declared by: <nixpkgs/nixos/modules/services/display-managers/gdm.nix>

## services.displayManager.gdm.wayland

Allow GDM to run on Wayland instead of Xserver. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/display-managers/gdm.nix>
