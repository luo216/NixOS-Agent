---
module: fonts
option_count: 3
source: options.html
---

# fonts

## fonts.enableDefaultPackages

Enable a basic set of fonts providing several styles and families and reasonable coverage of Unicode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/fonts/packages.nix>

## fonts.enableGhostscriptFonts

Whether to add the fonts provided by Ghostscript (such as various URW fonts and the “Base-14” Postscript fonts) to the list of system fonts, making them available to X11 applications. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/fonts/ghostscript.nix>

## fonts.packages

List of primary font packages. Type: list of absolute path Default: [ ] Example: [ pkgs.dejavu_fonts ] Declared by: <nixpkgs/nixos/modules/config/fonts/packages.nix>
