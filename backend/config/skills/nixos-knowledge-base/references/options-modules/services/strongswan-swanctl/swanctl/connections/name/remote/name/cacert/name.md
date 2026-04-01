---
module: services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.cacert.<name>
option_count: 4
source: options.html
---

# services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.cacert.<name>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.cacert.<name>.file

Absolute path to the certificate to load. Passed as-is to the daemon, so it must be readable by it. Configure either this or handle, but not both, in one section. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.cacert.<name>.handle

Hex-encoded CKA_ID or handle of the certificate on a token or TPM, respectively. Configure either this or file, but not both, in one section. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.cacert.<name>.module

Optional PKCS#11 module name. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote.<name>.cacert.<name>.slot

Optional slot number of the token that stores the certificate. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
