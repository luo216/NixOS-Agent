---
module: services.rauc.slots.<name>.*
option_count: 4
source: options.html
---

# services.rauc.slots.<name>.*

## services.rauc.slots.<name>.*.enable

Whether to enable this RAUC slot. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>

## services.rauc.slots.<name>.*.device

The device to update. Type: string Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>

## services.rauc.slots.<name>.*.settings

Settings for this slot. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>

## services.rauc.slots.<name>.*.type

The type of the device. Type: one of “raw”, “nand”, “nor”, “ubivol”, “ubifs”, “ext4”, “vfat” Default: "raw" Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>
