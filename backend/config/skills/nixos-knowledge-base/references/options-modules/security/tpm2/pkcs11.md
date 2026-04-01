---
module: security.tpm2.pkcs11
option_count: 2
source: options.html
---

# security.tpm2.pkcs11

## security.tpm2.pkcs11.enable

Whether to enable TPM2 PKCS#11 tool and shared library in system path (/run/current-system/sw/lib/libtpm2_pkcs11.so) . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.pkcs11.package

tpm2-pkcs11 package to use Type: package Default: if config.security.tpm2.abrmd.enable then pkgs.tpm2-pkcs11.abrmd else pkgs.tpm2-pkcs11 Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>
