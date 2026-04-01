---
module: boot.loader.grub.mirroredBoots.*
option_count: 4
source: options.html
---

# boot.loader.grub.mirroredBoots.*

## boot.loader.grub.mirroredBoots.*.devices

The path to the devices which will have the GRUB MBR written. Note these are typically device paths and not paths to partitions. Type: list of string Default: [ ] Example: [ "/dev/disk/by-id/wwn-0x500001234567890a" "/dev/disk/by-id/wwn-0x500009876543210a" ] Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.mirroredBoots.*.efiBootloaderId

The id of the bootloader to store in efi nvram. The default is to name it NixOS and append the path or efiSysMountPoint. This is only used if boot.loader.efi.canTouchEfiVariables is true. Type: null or string Default: null Example: "NixOS-fsid" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.mirroredBoots.*.efiSysMountPoint

The path to the efi system mount point. Usually this is the same partition as the above path and can be left as null. Type: null or string Default: null Example: "/boot1/efi" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.mirroredBoots.*.path

The path to the boot directory where GRUB will be written. Generally this boot path should double as an EFI path. Type: string Example: "/boot1" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>
