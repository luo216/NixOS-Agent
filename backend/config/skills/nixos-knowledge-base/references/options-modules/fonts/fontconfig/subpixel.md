---
module: fonts.fontconfig.subpixel
option_count: 2
source: options.html
---

# fonts.fontconfig.subpixel

## fonts.fontconfig.subpixel.lcdfilter

FreeType LCD filter. At high resolution (> 200 DPI), LCD filtering has no visible effect; users of such displays may want to select none. Type: one of “none”, “default”, “light”, “legacy” Default: "default" Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.subpixel.rgba

Subpixel order. The overwhelming majority of displays are rgb in their normal orientation. Select vrgb for mounting such a display 90 degrees clockwise from its normal orientation or vbgr for mounting 90 degrees counter-clockwise. Select bgr in the unlikely event of mounting 180 degrees from the normal orientation. Reverse these directions in the improbable event that the display’s native subpixel order is bgr. Type: one of “rgb”, “bgr”, “vrgb”, “vbgr”, “none” Default: "none" Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>
