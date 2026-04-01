---
module: services.strongswan-swanctl.swanctl.secrets.eap.<name>
option_count: 2
source: options.html
---

# services.strongswan-swanctl.swanctl.secrets.eap.<name>

## services.strongswan-swanctl.swanctl.secrets.eap.<name>.id

Identity the EAP/XAuth secret belongs to. Multiple unique identities may be specified, each having an id prefix, if a secret is shared between multiple users. Type: attribute set of (null or string) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.eap.<name>.secret

Value of the EAP/XAuth secret. It may either be an ASCII string, a hex encoded string if it has a 0x prefix or a Base64 encoded string if it has a 0s prefix in its value. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
