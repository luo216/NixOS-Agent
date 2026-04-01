---
module: services.gvfs
option_count: 2
source: options.html
---

# services.gvfs

## services.gvfs.enable

Whether to enable GVfs, a userspace virtual filesystem. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktops/gvfs.nix>

## services.gvfs.package

The gvfs package to use. Type: package Default: pkgs.gnome.gvfs Declared by: <nixpkgs/nixos/modules/services/desktops/gvfs.nix>
