---
module: networking.sits.<name>
option_count: 5
source: options.html
---

# networking.sits.<name>

## networking.sits.<name>.dev

The underlying network device on which the tunnel resides. Type: null or string Default: null Example: "enp4s0f0" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.sits.<name>.encapsulation

Configures the type of encapsulation. Type: null or (submodule) Default: { } Example: { port = 9001; type = "fou"; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.sits.<name>.local

The address of the local endpoint which the remote side should send packets to. Type: null or string Default: null Example: "10.0.0.22" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.sits.<name>.remote

The address of the remote endpoint to forward traffic over. Type: null or string Default: null Example: "10.0.0.1" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.sits.<name>.ttl

The time-to-live of the connection to the remote tunnel endpoint. Type: null or signed integer Default: null Example: 255 Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
