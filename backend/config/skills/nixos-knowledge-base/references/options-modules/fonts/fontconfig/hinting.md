---
module: fonts.fontconfig.hinting
option_count: 3
source: options.html
---

# fonts.fontconfig.hinting

## fonts.fontconfig.hinting.enable

Enable font hinting. Hinting aligns glyphs to pixel boundaries to improve rendering sharpness at low resolution. At high resolution (> 200 dpi) hinting will do nothing (at best); users of such displays may want to disable this option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.hinting.autohint

Enable the autohinter in place of the default interpreter. The results are usually lower quality than correctly-hinted fonts, but better than unhinted fonts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.hinting.style

Hintstyle is the amount of font reshaping done to line up to the grid. slight will make the font more fuzzy to line up to the grid but will be better in retaining font shape, while full will be a crisp font that aligns well to the pixel grid but will lose a greater amount of font shape. Type: one of “none”, “slight”, “medium”, “full” Default: "slight" Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>
