---
module: virtualisation.emptyDiskImages.*
option_count: 2
source: options.html
---

# virtualisation.emptyDiskImages.*

## virtualisation.emptyDiskImages.*.driveConfig

Drive configuration to pass to virtualisation.qemu.drives Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.emptyDiskImages.*.size

The size of the disk in MiB Type: positive integer, meaning >0 Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
