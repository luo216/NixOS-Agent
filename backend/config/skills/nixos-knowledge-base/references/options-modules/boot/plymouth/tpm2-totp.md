---
module: boot.plymouth.tpm2-totp
option_count: 2
source: options.html
---

# boot.plymouth.tpm2-totp

## boot.plymouth.tpm2-totp.enable

Whether to display a TOTP during boot using tpm2-totp and Plymouth. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/plymouth-tpm2-totp.nix>

## boot.plymouth.tpm2-totp.package

The tpm2-totp package to use. Type: package Default: pkgs.tpm2-totp-with-plymouth Declared by: <nixpkgs/nixos/modules/system/boot/plymouth-tpm2-totp.nix>
