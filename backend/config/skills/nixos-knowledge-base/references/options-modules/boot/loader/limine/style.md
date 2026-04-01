---
module: boot.loader.limine.style
option_count: 3
source: options.html
---

# boot.loader.limine.style

## boot.loader.limine.style.backdrop

Color to fill the rest of the screen with when wallpaper_style is centered in RRGGBB format. Type: null or string Default: null Example: "7EBAE4" Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.style.wallpaperStyle

How the wallpaper should be fit to the screen. Type: one of “centered”, “stretched”, “tiled” Default: "stretched" Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.style.wallpapers

A list of wallpapers. If more than one is specified, a random one will be selected at boot. Type: list of absolute path Default: [ ] Example: [ pkgs.nixos-artwork.wallpapers.simple-dark-gray-bootloader.gnomeFilePath ] Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>
