---
module: services.geth.<name>.metrics
option_count: 3
source: options.html
---

# services.geth.<name>.metrics

## services.geth.<name>.metrics.enable

Whether to enable Go Ethereum prometheus metrics. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.metrics.address

Listen address of Go Ethereum metrics service. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.geth.<name>.metrics.port

Port number of Go Ethereum metrics service. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6060 Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>
