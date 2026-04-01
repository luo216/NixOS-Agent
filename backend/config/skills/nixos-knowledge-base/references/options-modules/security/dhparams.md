---
module: security.dhparams
option_count: 5
source: options.html
---

# security.dhparams

## security.dhparams.enable

Whether to generate new DH params and clean up old DH params. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/dhparams.nix>

## security.dhparams.defaultBitSize

This allows to override the default bit size for all of the Diffie-Hellman parameters set in security.dhparams.params. Type: integer of at least 16 bits Default: 2048 Declared by: <nixpkgs/nixos/modules/security/dhparams.nix>

## security.dhparams.params

Diffie-Hellman parameters to generate. The value is the size (in bits) of the DH params to generate. The generated DH params path can be found in config.security.dhparams.params.«name».path. Note The name of the DH params is taken as being the name of the service it serves and the params will be generated before the said service is started. Warning If you are removing all dhparams from this list, you have to leave security.dhparams.enable for at least one activation in order to have them be cleaned up. This also means if you rollback to a version without any dhparams the existing ones won’t be cleaned up. Of course this only applies if security.dhparams.stateful is true. Note For module implementers: It’s recommended to not set a specific bit size here, so that users can easily override this by setting security.dhparams.defaultBitSize. Type: attribute set of ((submodule) or signed integer convertible to it) Default: { } Example: { nginx.bits = 3072; } Declared by: <nixpkgs/nixos/modules/security/dhparams.nix>

## security.dhparams.path

Path to the directory in which Diffie-Hellman parameters will be stored. This only is relevant if security.dhparams.stateful is true. Type: string Default: "/var/lib/dhparams" Declared by: <nixpkgs/nixos/modules/security/dhparams.nix>

## security.dhparams.stateful

Whether generation of Diffie-Hellman parameters should be stateful or not. If this is enabled, PEM-encoded files for Diffie-Hellman parameters are placed in the directory specified by security.dhparams.path. Otherwise the files are created within the Nix store. Note If this is false the resulting store path will be non-deterministic and will be rebuilt every time the openssl package changes. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/dhparams.nix>
