---
module: services.xserver.desktopManager.wallpaper
option_count: 2
source: options.html
---

# services.xserver.desktopManager.wallpaper

## services.xserver.desktopManager.wallpaper.combineScreens

When set to true the wallpaper will stretch across all screens. When set to false the wallpaper is duplicated to all screens. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/default.nix>

## services.xserver.desktopManager.wallpaper.mode

The file ~/.background-image is used as a background image. This option specifies the placement of this image onto your desktop. Possible values: center: Center the image on the background. If it is too small, it will be surrounded by a black border. fill: Like scale, but preserves aspect ratio by zooming the image until it fits. Either a horizontal or a vertical part of the image will be cut off. max: Like fill, but scale the image to the maximum size that fits the screen with black borders on one side. scale: Fit the file into the background without repeating it, cutting off stuff or using borders. But the aspect ratio is not preserved either. tile: Tile (repeat) the image in case it is too small for the screen. Type: one of “center”, “fill”, “max”, “scale”, “tile” Default: "scale" Example: "fill" Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/default.nix>
