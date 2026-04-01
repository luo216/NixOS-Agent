---
module: hardware.apple.touchBar
option_count: 3
source: options.html
---

# hardware.apple.touchBar

## hardware.apple.touchBar.enable

Whether to enable support for the Touch Bar on some Apple laptops using tiny-dfr. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/apple-touchbar.nix>

## hardware.apple.touchBar.package

The tiny-dfr package to use. Type: package Default: pkgs.tiny-dfr Declared by: <nixpkgs/nixos/modules/hardware/apple-touchbar.nix>

## hardware.apple.touchBar.settings

Configuration for tiny-dfr. See example configuration for available options. Type: TOML value Default: { } Example: { MediaLayerDefault = true; ShowButtonOutlines = false; EnablePixelShift = true; } Declared by: <nixpkgs/nixos/modules/hardware/apple-touchbar.nix>
