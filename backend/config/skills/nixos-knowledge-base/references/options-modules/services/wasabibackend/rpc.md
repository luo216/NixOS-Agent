---
module: services.wasabibackend.rpc
option_count: 5
source: options.html
---

# services.wasabibackend.rpc

## services.wasabibackend.rpc.ip

IP address for RPC connection to bitcoind. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>

## services.wasabibackend.rpc.password

RPC password for the bitcoin endpoint. Warning: this is stored in cleartext in the Nix store! Use configFile or passwordFile if needed. Type: string Default: "password" Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>

## services.wasabibackend.rpc.passwordFile

File that contains the password of the RPC user. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>

## services.wasabibackend.rpc.port

Port for RPC connection to bitcoind. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8332 Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>

## services.wasabibackend.rpc.user

RPC user for the bitcoin endpoint. Type: string Default: "bitcoin" Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>
