---
module: security.agnos.generateKeys
option_count: 2
source: options.html
---

# security.agnos.generateKeys

## security.agnos.generateKeys.enable

Enable automatic generation of account keys. When this is true, a key will be generated for each account where the file referred to by the private_key path does not exist yet. Currently, only RSA keys can be generated. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.generateKeys.keySize

Key size in bits to use when generating new keys. Type: signed integer Default: 4096 Declared by: <nixpkgs/nixos/modules/security/agnos.nix>
