---
module: fonts.fontconfig
option_count: 8
source: options.html
---

# fonts.fontconfig

## fonts.fontconfig.enable

If enabled, a Fontconfig configuration file will be built pointing to a set of default fonts. If you don’t care about running X11 applications or any other program that uses Fontconfig, you can turn this option off and prevent a dependency on all those fonts. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.allowBitmaps

Allow bitmap fonts. Set to false to ban all bitmap fonts. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.allowType1

Allow Type-1 fonts. Default is false because of poor rendering. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.antialias

Enable font antialiasing. At high resolution (> 200 DPI), antialiasing has no visible effect; users of such displays may want to disable this option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.cache32Bit

Generate system fonts cache for 32-bit applications. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.includeUserConf

Include the user configuration from ~/.config/fontconfig/fonts.conf or ~/.config/fontconfig/conf.d. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.localConf

System-wide customization file contents, has higher priority than defaultFonts settings. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>

## fonts.fontconfig.useEmbeddedBitmaps

Use embedded bitmaps in fonts like Calibri. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/fonts/fontconfig.nix>
