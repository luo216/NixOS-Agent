---
module: services.lighthouse.beacon
option_count: 7
source: options.html
---

# services.lighthouse.beacon

## services.lighthouse.beacon.enable

Whether to enable Lightouse Beacon node. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.address

Listen address of Beacon node. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.dataDir

Directory where data will be stored. Each chain will be stored under it’s own specific subdirectory. Type: string Default: "/var/lib/lighthouse-beacon" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.disableDepositContractSync

Explicitly disables syncing of deposit logs from the execution node. This overrides any previous option that depends on it. Useful if you intend to run a non-validating beacon node. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.extraArgs

Additional arguments passed to the lighthouse beacon command. Type: string Default: "" Example: "" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.openFirewall

Open the port in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon.port

Port number the Beacon node will be listening on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9000 Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>
