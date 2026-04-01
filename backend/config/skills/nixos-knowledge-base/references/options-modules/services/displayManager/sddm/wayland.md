---
module: services.displayManager.sddm.wayland
option_count: 2
source: options.html
---

# services.displayManager.sddm.wayland

## services.displayManager.sddm.wayland.enable

Whether to enable experimental Wayland support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>

## services.displayManager.sddm.wayland.compositor

The compositor to use: kwin, weston Type: one of “kwin”, “weston” Default: "weston" Declared by: <nixpkgs/nixos/modules/services/display-managers/sddm.nix>
