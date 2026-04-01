---
module: console
option_count: 7
source: options.html
---

# console

## console.enable

Whether to enable virtual console. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/config/console.nix>

## console.packages

List of additional packages that provide console fonts, keymaps and other resources for virtual consoles use. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/config/console.nix>

## console.colors

The 16 colors palette used by the virtual consoles. Leave empty to use the default colors. Colors must be in hexadecimal format and listed in order from color 0 to color 15. Type: list of string matching the pattern [[:xdigit:]]{6} Default: [ ] Example: [ "002b36" "dc322f" "859900" "b58900" "268bd2" "d33682" "2aa198" "eee8d5" "002b36" "cb4b16" "586e75" "657b83" "839496" "6c71c4" "93a1a1" "fdf6e3" ] Declared by: <nixpkgs/nixos/modules/config/console.nix>

## console.earlySetup

Enable setting virtual console options as early as possible (in initrd). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/console.nix>

## console.font

The font used for the virtual consoles. Can be null, a font name, or a path to a PSF font file. Use null to let the kernel choose a built-in font. The default is 8x16, and, as of Linux 5.3, Terminus 32 bold for display resolutions of 2560x1080 and higher. These fonts cover the IBM437 character set. Type: null or string or absolute path Default: null Example: "LatArCyrHeb-16" Declared by: <nixpkgs/nixos/modules/config/console.nix>

## console.keyMap

The keyboard mapping table for the virtual consoles. Type: string or absolute path Default: "us" Example: "fr" Declared by: <nixpkgs/nixos/modules/config/console.nix>

## console.useXkbConfig

If set, configure the virtual console keymap from the xserver keyboard settings. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/console.nix>
