---
module: fonts.fontconfig.defaultFonts
option_count: 4
source: options.html
---

# fonts.fontconfig.defaultFonts

## fonts.fontconfig.defaultFonts.emoji

System-wide default emoji font(s). Multiple fonts may be listed in case a font does not support all emoji. Note that fontconfig matches color emoji fonts preferentially, so if you want to use a black and white font while having a color font installed (eg. Noto Color Emoji installed alongside Noto Emoji), fontconfig will still choose the color font even when it is later in the list. Type: list of string Default: [ "Noto Color Emoji" ] Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.defaultFonts.monospace

System-wide default monospace font(s). Multiple fonts may be listed in case multiple languages must be supported. Type: list of string Default: [ "DejaVu Sans Mono" ] Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.defaultFonts.sansSerif

System-wide default sans serif font(s). Multiple fonts may be listed in case multiple languages must be supported. Type: list of string Default: [ "DejaVu Sans" ] Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.defaultFonts.serif

System-wide default serif font(s). Multiple fonts may be listed in case multiple languages must be supported. Type: list of string Default: [ "DejaVu Serif" ] Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>
