---
module: networking.defaultGateway
option_count: 4
source: options.html
---

# networking.defaultGateway

## networking.defaultGateway.address

The default gateway address. Type: string Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.defaultGateway.interface

The default gateway interface. Type: null or string Default: null Example: "enp0s3" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.defaultGateway.metric

The default gateway metric/preference. Type: null or signed integer Default: null Example: 42 Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.defaultGateway.source

The default source address. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
