---
module: services.strongswan-swanctl.swanctl.secrets.ntlm.<name>
option_count: 2
source: options.html
---

# services.strongswan-swanctl.swanctl.secrets.ntlm.<name>

## services.strongswan-swanctl.swanctl.secrets.ntlm.<name>.id

Identity the NTLM secret belongs to. Multiple unique identities may be specified, each having an id prefix, if a secret is shared between multiple users. Type: attribute set of (null or string) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.secrets.ntlm.<name>.secret

Value of the NTLM secret, which is the NT Hash of the actual secret, that is, MD4(UTF-16LE(secret)). The resulting 16-byte value may either be given as a hex encoded string with a 0x prefix or as a Base64 encoded string with a 0s prefix. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
