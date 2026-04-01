---
module: services.rosenpass.settings.peers.*
option_count: 4
source: options.html
---

# services.rosenpass.settings.peers.*

## services.rosenpass.settings.peers.*.device

Name of the local WireGuard interface to use for this peer. Type: string Default: config.services.rosenpass.defaultDevice Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>

## services.rosenpass.settings.peers.*.endpoint

Endpoint of the remote Rosenpass peer. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>

## services.rosenpass.settings.peers.*.peer

WireGuard public key corresponding to the remote Rosenpass peer. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>

## services.rosenpass.settings.peers.*.public_key

Path to a file containing the public key of the remote Rosenpass peer. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/rosenpass.nix>
