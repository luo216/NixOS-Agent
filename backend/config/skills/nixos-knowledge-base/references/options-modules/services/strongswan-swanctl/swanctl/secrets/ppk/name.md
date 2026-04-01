---
module: services.strongswan-swanctl.swanctl.secrets.ppk.<name>
option_count: 2
source: options.html
---

# services.strongswan-swanctl.swanctl.secrets.ppk.<name>

## services.strongswan-swanctl.swanctl.secrets.ppk.<name>.id

PPK identity the PPK belongs to. Multiple unique identities may be specified, each having an id prefix, if a secret is shared between multiple peers. Type: attribute set of (null or string) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.ppk.<name>.secret

Value of the PPK. It may either be an ASCII string, a hex encoded string if it has a 0x prefix or a Base64 encoded string if it has a 0s prefix in its value. Should have at least 256 bits of entropy for 128-bit security. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
