---
module: virtualisation.waydroid
option_count: 2
source: options.html
---

# virtualisation.waydroid

## virtualisation.waydroid.enable

Whether to enable Waydroid. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/waydroid.nix>

## virtualisation.waydroid.package

The waydroid package to use. Type: package Default: if config.networking.nftables.enable then pkgs.waydroid-nftables else pkgs.waydroid Declared by: <nixpkgs/nixos/modules/virtualisation/waydroid.nix>
