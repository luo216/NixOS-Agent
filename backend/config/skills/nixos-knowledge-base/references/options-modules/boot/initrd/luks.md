---
module: boot.initrd.luks
option_count: 7
source: options.html
---

# boot.initrd.luks

## boot.initrd.luks.cryptoModules

A list of cryptographic kernel modules needed to decrypt the root device(s). The default includes all common modules. Type: list of string Default: [ "aes" "aes_generic" "blowfish" "twofish" "serpent" "cbc" "xts" "lrw" "sha1" "sha256" "sha512" "af_alg" "algif_skcipher" "cryptd" "input_leds" ] Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices

The encrypted disk that should be opened before the root filesystem is mounted. Both LVM-over-LUKS and LUKS-over-LVM setups are supported. The unencrypted devices can be accessed as /dev/mapper/«name». Type: attribute set of (submodule) Default: { } Example: { luksroot = { device = "/dev/disk/by-uuid/430e9eff-d852-4f68-aa3b-2fa3599ebe08"; }; } Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.fido2Support

Enables support for authenticating with FIDO2 devices. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.gpgSupport

Enables support for authenticating with a GPG encrypted password. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.mitigateDMAAttacks

Unless enabled, encryption keys can be easily recovered by an attacker with physical access to any machine with PCMCIA, ExpressCard, ThunderBolt or FireWire port. More information is available at https://en.wikipedia.org/wiki/DMA_attack. This option blacklists FireWire drivers, but doesn’t remove them. You can manually load the drivers if you need to use a FireWire device, but don’t forget to unload them! Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.reusePassphrases

When opening a new LUKS device try reusing last successful passphrase. Useful for mounting a number of devices that use the same passphrase without retyping it several times. Such setup can be useful if you use cryptsetup luksSuspend. Different LUKS devices will still have different master keys even when using the same passphrase. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.yubikeySupport

Enables support for authenticating with a YubiKey on LUKS devices. See the NixOS wiki for information on how to properly setup a LUKS device and a YubiKey to work with this feature. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>
