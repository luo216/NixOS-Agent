---
module: fonts.fontDir
option_count: 2
source: options.html
---

# fonts.fontDir

## fonts.fontDir.enable

Whether to create a directory with links to all fonts in /run/current-system/sw/share/X11/fonts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/fonts/fontdir.nix>

## fonts.fontDir.decompressFonts

Whether to decompress fonts in /run/current-system/sw/share/X11/fonts. Type: boolean Default: config.programs.xwayland.enable Declared by: <nixpkgs/nixos/modules/config/fonts/fontdir.nix>
