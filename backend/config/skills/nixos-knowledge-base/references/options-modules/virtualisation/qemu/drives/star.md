---
module: virtualisation.qemu.drives.*
option_count: 4
source: options.html
---

# virtualisation.qemu.drives.*

## virtualisation.qemu.drives.*.deviceExtraOpts

Extra options passed to device flag. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.qemu.drives.*.driveExtraOpts

Extra options passed to drive flag. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.qemu.drives.*.file

The file image used for this drive. Type: string Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.qemu.drives.*.name

A name for the drive. Must be unique in the drives list. Not passed to qemu. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
