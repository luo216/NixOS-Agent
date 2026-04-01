---
module: services.geth.<name>
option_count: 8
source: options.html
---

# services.geth.<name>

## services.geth.<name>.enable

Whether to enable Go Ethereum Node. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.package

The geth package to use. Type: package Default: pkgs.go-ethereum.geth Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.extraArgs

Additional arguments passed to Go Ethereum. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.gcmode

Blockchain garbage collection mode. Type: one of “full”, “archive” Default: "full" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.maxpeers

Maximum peers to connect to. Type: signed integer Default: 50 Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.network

The network to connect to. Mainnet (null) is the default ethereum network. Type: null or one of “holesky”, “sepolia” Default: null Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.port

Port number Go Ethereum will be listening on, both TCP and UDP. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 30303 Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.syncmode

Blockchain sync mode. Type: one of “snap”, “fast”, “full”, “light” Default: "snap" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>
