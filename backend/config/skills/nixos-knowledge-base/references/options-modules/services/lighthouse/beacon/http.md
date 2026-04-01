---
module: services.lighthouse.beacon.http
option_count: 3
source: options.html
---

# services.lighthouse.beacon.http

## services.lighthouse.beacon.http.enable

Whether to enable Beacon node http api. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.http.address

Listen address of Beacon node RPC service. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.http.port

Port number of Beacon node RPC service. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5052 Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>
