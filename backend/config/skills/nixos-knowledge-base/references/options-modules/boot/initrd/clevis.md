---
module: boot.initrd.clevis
option_count: 4
source: options.html
---

# boot.initrd.clevis

## boot.initrd.clevis.enable

Whether to enable Clevis in initrd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/clevis.nix>

## boot.initrd.clevis.package

The clevis package to use. Type: package Default: pkgs.clevis Declared by: <nixpkgs/nixos/modules/system/boot/clevis.nix>

## boot.initrd.clevis.devices

Encrypted devices that need to be unlocked at boot using Clevis Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/clevis.nix>

## boot.initrd.clevis.useTang

Whether the Clevis JWE file used to decrypt the devices uses a Tang server as a pin. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/clevis.nix>
