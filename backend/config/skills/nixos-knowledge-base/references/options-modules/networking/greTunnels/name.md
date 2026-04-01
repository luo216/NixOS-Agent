---
module: networking.greTunnels.<name>
option_count: 5
source: options.html
---

# networking.greTunnels.<name>

## networking.greTunnels.<name>.dev

The underlying network device on which the tunnel resides. Type: null or string Default: null Example: "enp4s0f0" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.greTunnels.<name>.local

The address of the local endpoint which the remote side should send packets to. Type: null or string Default: null Example: "10.0.0.22" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.greTunnels.<name>.remote

The address of the remote endpoint to forward traffic over. Type: null or string Default: null Example: "10.0.0.1" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.greTunnels.<name>.ttl

The time-to-live/hoplimit of the connection to the remote tunnel endpoint. Type: null or signed integer Default: null Example: 255 Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.greTunnels.<name>.type

Whether the tunnel routes layer 2 (tap) or layer 3 (tun) traffic. Type: one of “tun”, “tap”, “tun6”, “tap6” Default: "tap" Example: "tap" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
