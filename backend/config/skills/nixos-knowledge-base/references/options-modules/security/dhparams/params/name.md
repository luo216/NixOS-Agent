---
module: security.dhparams.params.<name>
option_count: 2
source: options.html
---

# security.dhparams.params.<name>

## security.dhparams.params.<name>.bits

The bit size for the prime that is used during a Diffie-Hellman key exchange. Type: integer of at least 16 bits Default: config.security.dhparams.defaultBitSize Declared by: <nixpkgs/nixos/modules/security/dhparams.nix>

## security.dhparams.params.<name>.path

The resulting path of the generated Diffie-Hellman parameters file for other services to reference. This could be either a store path or a file inside the directory specified by security.dhparams.path. Type: absolute path (read only) Declared by: <nixpkgs/nixos/modules/security/dhparams.nix>
