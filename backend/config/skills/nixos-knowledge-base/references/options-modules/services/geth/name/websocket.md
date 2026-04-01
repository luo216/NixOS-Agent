---
module: services.geth.<name>.websocket
option_count: 4
source: options.html
---

# services.geth.<name>.websocket

## services.geth.<name>.websocket.enable

Whether to enable Go Ethereum WebSocket API. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.websocket.address

Listen address of Go Ethereum WebSocket API. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.websocket.apis

APIs to enable over WebSocket Type: null or (list of string) Default: null Example: [ "net" "eth" ] Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.websocket.port

Port number of Go Ethereum WebSocket API. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8546 Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>
