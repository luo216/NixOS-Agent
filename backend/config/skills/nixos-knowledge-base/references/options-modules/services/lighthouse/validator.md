---
module: services.lighthouse.validator
option_count: 4
source: options.html
---

# services.lighthouse.validator

## services.lighthouse.validator.enable

Enable Lightouse Validator node. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.validator.beaconNodes

Beacon nodes to connect to. Type: list of string Default: [ "http://localhost:5052" ] Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.validator.dataDir

Directory where data will be stored. Each chain will be stored under it’s own specific subdirectory. Type: string Default: "/var/lib/lighthouse-validator" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.validator.extraArgs

Additional arguments passed to the lighthouse validator command. Type: string Default: "" Example: "" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>
