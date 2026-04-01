---
module: services.wgautomesh.settings.peers.*
option_count: 3
source: options.html
---

# services.wgautomesh.settings.peers.*

## services.wgautomesh.settings.peers.*.address

Wireguard address of this peer (a single IP address, multiple addresses or address ranges are not supported). Type: string Example: "10.0.0.42" Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.settings.peers.*.endpoint

Bootstrap endpoint for connecting to this Wireguard peer if no other address is known or none are working. Type: null or string Default: null Example: "wgnode.mydomain.example:51820" Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.settings.peers.*.pubkey

Wireguard public key of this peer. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>
