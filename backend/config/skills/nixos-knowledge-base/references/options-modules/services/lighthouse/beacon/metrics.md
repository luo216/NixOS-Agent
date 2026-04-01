---
module: services.lighthouse.beacon.metrics
option_count: 3
source: options.html
---

# services.lighthouse.beacon.metrics

## services.lighthouse.beacon.metrics.enable

Whether to enable Beacon node prometheus metrics. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.metrics.address

Listen address of Beacon node metrics service. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.metrics.port

Port number of Beacon node metrics service. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5054 Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>
