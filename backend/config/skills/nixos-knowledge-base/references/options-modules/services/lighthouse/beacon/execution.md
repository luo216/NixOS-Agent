---
module: services.lighthouse.beacon.execution
option_count: 3
source: options.html
---

# services.lighthouse.beacon.execution

## services.lighthouse.beacon.execution.address

Listen address for the execution layer. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.execution.jwtPath

Path for the jwt secret required to connect to the execution layer. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.execution.port

Port number the Beacon node will be listening on for the execution layer. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8551 Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>
