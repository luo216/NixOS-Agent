---
module: services.monero.rpc
option_count: 5
source: options.html
---

# services.monero.rpc

## services.monero.rpc.address

IP address the RPC server will bind to. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.rpc.password

Password for RPC connections. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.rpc.port

Port the RPC server will bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 18081 Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.rpc.restricted

Whether to restrict RPC to view only commands. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.rpc.user

User name for RPC connections. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>
