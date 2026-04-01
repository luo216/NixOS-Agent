---
module: networking.ipips.<name>
option_count: 4
source: options.html
---

# networking.ipips.<name>

## networking.ipips.<name>.dev

The underlying network device on which the tunnel resides. Type: null or string Default: null Example: "wan6" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.ipips.<name>.local

The address of the local endpoint which the remote side should send packets to. Type: string Example: "2001:db8::3" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.ipips.<name>.remote

The address of the remote endpoint to forward traffic over. Type: string Example: "2001:db8::1" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.ipips.<name>.ttl

The time-to-live of the connection to the remote tunnel endpoint. Type: null or signed integer Default: null Example: 255 Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
