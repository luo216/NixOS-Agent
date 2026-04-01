---
module: boot.initrd.luks.devices.<name>.yubikey.storage
option_count: 3
source: options.html
---

# boot.initrd.luks.devices.<name>.yubikey.storage

## boot.initrd.luks.devices.<name>.yubikey.storage.device

An unencrypted device that will temporarily be mounted in stage-1. Must contain the current salt to create the challenge for this LUKS device. Type: absolute path Default: "/dev/sda1" Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.yubikey.storage.fsType

The filesystem of the unencrypted device. Type: string Default: "vfat" Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.yubikey.storage.path

Absolute path of the salt on the unencrypted device with that device’s root directory as “/”. Type: string Default: "/crypt-storage/default" Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>
