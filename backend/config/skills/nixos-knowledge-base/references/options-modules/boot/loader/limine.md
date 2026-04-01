---
module: boot.loader.limine
option_count: 16
source: options.html
---

# boot.loader.limine

## boot.loader.limine.enable

Whether to enable the Limine Bootloader. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.enableEditor

Whether to allow editing the boot entries before booting them. It is recommended to set this to false, as it allows gaining root access by passing init=/bin/sh as a kernel parameter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.package

The limine package to use. Type: package Default: pkgs.limine Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.additionalFiles

A set of files to be copied to /boot. Each attribute name denotes the destination file name in /boot, while the corresponding attribute value specifies the source file. Type: attribute set of absolute path Default: { } Example: { "efi/memtest86/memtest86.efi" = "${pkgs.memtest86-efi}/BOOTX64.efi"; } Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.biosDevice

Device to install the BIOS version of limine on. Type: string Default: "nodev" Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.biosSupport

Whether or not to install limine for BIOS. Type: boolean Default: !config.boot.loader.limine.efiSupport && pkgs.stdenv.hostPlatform.isx86 Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.efiInstallAsRemovable

Whether or not to install the limine EFI files as removable. See boot.loader.grub.efiInstallAsRemovable Type: boolean Default: !config.boot.loader.efi.canTouchEfiVariables Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.efiSupport

Whether or not to install the limine EFI files. Type: boolean Default: pkgs.stdenv.hostPlatform.isEfi Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.enrollConfig

Whether or not to enroll the config. Only works on EFI! Type: boolean Default: boot.loader.limine.panicOnChecksumMismatch Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.extraConfig

A string which is prepended to limine.conf. The config format can be found here. Type: strings concatenated with “\n” Default: "" Example: serial: yes Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.extraEntries

A string which is appended to the end of limine.conf. The config format can be found here. Type: strings concatenated with “\n” Default: "" Example: /memtest86 protocol: chainload path: boot():///efi/memtest86/memtest86.efi Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.force

Force installation even if the safety checks fail, use absolutely only if necessary! Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.maxGenerations

Maximum number of latest generations in the boot menu. Useful to prevent boot partition of running out of disk space. null means no limit i.e. all generations that were not garbage collected yet. Type: null or signed integer Default: null Example: 50 Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.panicOnChecksumMismatch

Whether or not checksum validation failure should be a fatal error at boot time. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.partitionIndex

The 1-based index of the dedicated partition for limine’s second stage. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>

## boot.loader.limine.validateChecksums

Whether to validate file checksums before booting. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/limine/limine.nix>
