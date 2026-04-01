---
module: boot.initrd.luks.devices.<name>.yubikey
option_count: 6
source: options.html
---

# boot.initrd.luks.devices.<name>.yubikey

## boot.initrd.luks.devices.<name>.yubikey.gracePeriod

Time in seconds to wait for the YubiKey. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.yubikey.iterationStep

How much the iteration count for PBKDF2 is increased at each successful authentication. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.yubikey.keyLength

Length of the LUKS slot key derived with PBKDF2 in byte. Type: signed integer Default: 64 Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.yubikey.saltLength

Length of the new salt in byte (64 is the effective maximum). Type: signed integer Default: 16 Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.yubikey.slot

Which slot on the YubiKey to challenge. Type: signed integer Default: 2 Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.yubikey.twoFactor

Whether to use a passphrase and a YubiKey (true), or only a YubiKey (false). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>
