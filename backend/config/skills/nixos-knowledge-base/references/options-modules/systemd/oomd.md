---
module: systemd.oomd
option_count: 4
source: options.html
---

# systemd.oomd

## systemd.oomd.enable

Whether to enable the systemd-oomd OOM killer. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/oomd.nix>

## systemd.oomd.enableRootSlice

Whether to enable oomd on the root slice (-.slice). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/oomd.nix>

## systemd.oomd.enableSystemSlice

Whether to enable oomd on the system slice (system.slice). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/oomd.nix>

## systemd.oomd.enableUserSlices

Whether to enable oomd on all user slices (user@.slice) and all user owned slices. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/oomd.nix>
