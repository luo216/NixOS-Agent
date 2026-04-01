---
module: services.rosenpass.settings
option_count: 5
source: options.html
---

# services.rosenpass.settings

## services.rosenpass.settings.listen

List of local endpoints to listen for connections. Type: list of string Default: [ ] Example: [ "0.0.0.0:10000" ] Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>

## services.rosenpass.settings.peers

List of peers to exchange keys with. Type: list of (open submodule of (TOML value)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>

## services.rosenpass.settings.public_key

Path to a file containing the public key of the local Rosenpass peer. Generate this by running rosenpass gen-keys. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>

## services.rosenpass.settings.secret_key

Path to a file containing the secret key of the local Rosenpass peer. Generate this by running rosenpass gen-keys. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>

## services.rosenpass.settings.verbosity

Verbosity of output produced by the service. Type: one of “Verbose”, “Quiet” Default: "Quiet" Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>
