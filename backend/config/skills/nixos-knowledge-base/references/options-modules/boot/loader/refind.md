---
module: boot.loader.refind
option_count: 6
source: options.html
---

# boot.loader.refind

## boot.loader.refind.enable

Whether to enable the rEFInd boot loader. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/refind/refind.nix>

## boot.loader.refind.package

The refind package to use. Type: package Default: pkgs.refind Declared by: <nixpkgs/nixos/modules/system/boot/loader/refind/refind.nix>

## boot.loader.refind.additionalFiles

A set of files to be copied to /boot. Each attribute name denotes the destination file name in /boot, while the corresponding attribute value specifies the source file. Type: attribute set of absolute path Default: { } Example: { "efi/memtest86/memtest86.efi" = "${pkgs.memtest86-efi}/BOOTX64.efi"; } Declared by: <nixpkgs/nixos/modules/system/boot/loader/refind/refind.nix>

## boot.loader.refind.efiInstallAsRemovable

Whether or not to install the rEFInd EFI files as removable. See boot.loader.grub.efiInstallAsRemovable Type: boolean Default: !config.boot.loader.efi.canTouchEfiVariables Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/refind/refind.nix>

## boot.loader.refind.extraConfig

A string which is prepended to refind.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/loader/refind/refind.nix>

## boot.loader.refind.maxGenerations

Maximum number of latest generations in the boot menu. Useful to prevent boot partition of running out of disk space. null means no limit i.e. all generations that were not garbage collected yet. Type: null or signed integer Default: null Example: 50 Declared by: <nixpkgs/nixos/modules/system/boot/loader/refind/refind.nix>
