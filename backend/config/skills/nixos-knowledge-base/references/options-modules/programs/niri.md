---
module: programs.niri
option_count: 3
source: options.html
---

# programs.niri

## programs.niri.enable

Whether to enable Niri, a scrollable-tiling Wayland compositor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/niri.nix>

## programs.niri.package

The niri package to use. Type: package Default: pkgs.niri Declared by: <nixpkgs/nixos/modules/programs/wayland/niri.nix>

## programs.niri.useNautilus

Whether to enable Nautilus as file-chooser for xdg-desktop-portal-gnome. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/niri.nix>
