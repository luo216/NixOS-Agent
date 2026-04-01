---
module: boot.loader.efi
option_count: 2
source: options.html
---

# boot.loader.efi

## boot.loader.efi.canTouchEfiVariables

Whether the installation process is allowed to modify EFI boot variables. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/efi.nix>

## boot.loader.efi.efiSysMountPoint

Where the EFI System Partition is mounted. Type: string Default: "/boot" Declared by: <nixpkgs/nixos/modules/system/boot/loader/efi.nix>
