---
module: system.etc.overlay
option_count: 2
source: options.html
---

# system.etc.overlay

## system.etc.overlay.enable

Mount /etc as an overlayfs instead of generating it via a perl script. Note: This is currently experimental. Only enable this option if you’re confident that you can recover your system if it breaks. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>

## system.etc.overlay.mutable

Whether to mount /etc mutably (i.e. read-write) or immutably (i.e. read-only). If this is false, only the immutable lowerdir is mounted. If it is true, a writable upperdir is mounted on top. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>
