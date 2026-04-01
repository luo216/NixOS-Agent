---
module: services.namecoind.rpc
option_count: 7
source: options.html
---

# services.namecoind.rpc

## services.namecoind.rpc.address

IP address the RPC server will bind to. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>

## services.namecoind.rpc.allowFrom

List of IP address ranges allowed to use the RPC API. Wiledcards (*) can be user to specify a range. Type: list of string Default: [ "127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>

## services.namecoind.rpc.certificate

Certificate file for securing RPC connections. Type: null or absolute path Default: null Example: "/var/lib/namecoind/server.cert" Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>

## services.namecoind.rpc.key

Key file for securing RPC connections. Type: null or absolute path Default: null Example: "/var/lib/namecoind/server.pem" Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>

## services.namecoind.rpc.password

Password for RPC connections. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>

## services.namecoind.rpc.port

Port the RPC server will bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8332 Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>

## services.namecoind.rpc.user

User name for RPC connections. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>
