---
module: services.xserver.xkb
option_count: 6
source: options.html
---

# services.xserver.xkb

## services.xserver.xkb.dir

Path used for -xkbdir xserver parameter. Type: absolute path Default: "${pkgs.xkeyboard_config}/etc/X11/xkb" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.xkb.extraLayouts

Extra custom layouts that will be included in the xkb configuration. Information on how to create a new layout can be found here: https://www.x.org/releases/current/doc/xorg-docs/input/XKB-Enhancing.html#Defining_New_Layouts. For more examples see https://wiki.archlinux.org/index.php/X_KeyBoard_extension#Basic_examples Type: attribute set of (submodule) Default: { } Example: { mine = { description = "My custom xkb layout."; languages = [ "eng" ]; symbolsFile = /path/to/my/layout; }; } Declared by: <nixpkgs/nixos/modules/services/x11/extra-layouts.nix>

## services.xserver.xkb.layout

X keyboard layout, or multiple keyboard layouts separated by commas. Type: string Default: "us" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.xkb.model

X keyboard model. Type: string Default: "pc104" Example: "presario" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.xkb.options

X keyboard options; layout switching goes here. Type: strings concatenated with “,” Default: "terminate:ctrl_alt_bksp" Example: "grp:caps_toggle,grp_led:scroll" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.xkb.variant

X keyboard variant. Type: string Default: "" Example: "colemak" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>
