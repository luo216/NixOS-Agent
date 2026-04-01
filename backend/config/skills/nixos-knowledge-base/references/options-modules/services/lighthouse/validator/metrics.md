---
module: services.lighthouse.validator.metrics
option_count: 3
source: options.html
---

# services.lighthouse.validator.metrics

## services.lighthouse.validator.metrics.enable

Whether to enable Validator node prometheus metrics. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.validator.metrics.address

Listen address of Validator node metrics service. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.validator.metrics.port

Port number of Validator node metrics service. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5056 Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>
