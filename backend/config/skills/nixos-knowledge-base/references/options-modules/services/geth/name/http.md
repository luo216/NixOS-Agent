---
module: services.geth.<name>.http
option_count: 4
source: options.html
---

# services.geth.<name>.http

## services.geth.<name>.http.enable

Whether to enable Go Ethereum HTTP API. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.http.address

Listen address of Go Ethereum HTTP API. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.http.apis

APIs to enable over WebSocket Type: null or (list of string) Default: null Example: [ "net" "eth" ] Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.http.port

Port number of Go Ethereum HTTP API. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8545 Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>
