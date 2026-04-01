---
module: virtualisation.emptyDiskImages.*.driveConfig
option_count: 3
source: options.html
---

# virtualisation.emptyDiskImages.*.driveConfig

## virtualisation.emptyDiskImages.*.driveConfig.deviceExtraOpts

Extra options passed to device flag. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.emptyDiskImages.*.driveConfig.driveExtraOpts

Extra options passed to drive flag. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.emptyDiskImages.*.driveConfig.name

A name for the drive. Must be unique in the drives list. Not passed to qemu. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
