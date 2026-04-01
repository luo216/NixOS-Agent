---
module: boot.initrd.luks.devices.<name>.gpgCard
option_count: 3
source: options.html
---

# boot.initrd.luks.devices.<name>.gpgCard

## boot.initrd.luks.devices.<name>.gpgCard.encryptedPass

Path to the GPG encrypted passphrase. Type: absolute path Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.gpgCard.gracePeriod

Time in seconds to wait for the GPG Smartcard. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.gpgCard.publicKey

Path to the Public Key. Type: absolute path Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>
