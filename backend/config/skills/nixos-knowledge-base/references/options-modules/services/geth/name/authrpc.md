---
module: services.geth.<name>.authrpc
option_count: 5
source: options.html
---

# services.geth.<name>.authrpc

## services.geth.<name>.authrpc.enable

Whether to enable Go Ethereum Auth RPC API. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.authrpc.address

Listen address of Go Ethereum Auth RPC API. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.authrpc.jwtsecret

Path to a JWT secret for authenticated RPC endpoint. Type: string Default: "" Example: "/var/run/geth/jwtsecret" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.authrpc.port

Port number of Go Ethereum Auth RPC API. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8551 Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.authrpc.vhosts

List of virtual hostnames from which to accept requests. Type: null or (list of string) Default: [ "localhost" ] Example: [ "localhost" "geth.example.org" ] Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>
