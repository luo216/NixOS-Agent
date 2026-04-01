---
module: services.strongswan-swanctl.swanctl.secrets.token.<name>
option_count: 4
source: options.html
---

# services.strongswan-swanctl.swanctl.secrets.token.<name>

## services.strongswan-swanctl.swanctl.secrets.token.<name>.handle

Hex-encoded CKA_ID or handle of the private key on the token or TPM, respectively. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.token.<name>.module

Optional PKCS#11 module name to access the token. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.token.<name>.pin

Optional PIN required to access the key on the token. If none is provided the user is prompted during an interactive --load-creds call. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.token.<name>.slot

Optional slot number to access the token. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
