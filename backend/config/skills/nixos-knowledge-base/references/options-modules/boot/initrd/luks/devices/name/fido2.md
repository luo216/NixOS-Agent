---
module: boot.initrd.luks.devices.<name>.fido2
option_count: 4
source: options.html
---

# boot.initrd.luks.devices.<name>.fido2

## boot.initrd.luks.devices.<name>.fido2.credential

The FIDO2 credential ID. Type: null or string Default: null Example: "f1d00200d8dc783f7fb1e10ace8da27f8312d72692abfca2f7e4960a73f48e82e1f7571f6ebfcee9fb434f9886ccc8fcc52a6614d8d2" Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.fido2.credentials

List of FIDO2 credential IDs. Use this if you have multiple FIDO2 keys you want to use for the same luks device. Type: list of string Default: [ ] Example: [ "f1d00200d8dc783f7fb1e10ace8da27f8312d72692abfca2f7e4960a73f48e82e1f7571f6ebfcee9fb434f9886ccc8fcc52a6614d8d2" ] Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.fido2.gracePeriod

Time in seconds to wait for the FIDO2 key. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.fido2.passwordLess

Defines whatever to use an empty string as a default salt. Enable only when your device is PIN protected, such as Trezor. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>
