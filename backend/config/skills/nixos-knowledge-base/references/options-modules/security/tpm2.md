---
module: security.tpm2
option_count: 4
source: options.html
---

# security.tpm2

## security.tpm2.enable

Whether to enable Trusted Platform Module 2 support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.applyUdevRules

Whether to make the /dev/tpm[0-9] devices accessible by the tssUser, or the /dev/tpmrm[0-9] by tssGroup respectively Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.tssGroup

Group of the tpm kernel resource manager (tpmrm) device-group, set if applyUdevRules is set. Type: null or string Default: "tss" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>

## security.tpm2.tssUser

Name of the tpm device-owner and service user, set if applyUdevRules is set. Type: null or string Default: if config.security.tpm2.abrmd.enable then "tss" else "root" Declared by: <nixpkgs/nixos/modules/security/tpm2.nix>
