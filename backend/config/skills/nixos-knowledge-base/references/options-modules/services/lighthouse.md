---
module: services.lighthouse
option_count: 5
source: options.html
---

# services.lighthouse

## services.lighthouse.package

The lighthouse package to use. Type: package Default: pkgs.lighthouse Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.beacon

Beacon node Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.extraArgs

Additional arguments passed to every lighthouse command. Type: string Default: "" Example: "" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.network

The network to connect to. Mainnet is the default ethereum network. Type: one of “mainnet”, “gnosis”, “chiado”, “sepolia”, “holesky” Default: "mainnet" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>

## services.lighthouse.validator

Validator node Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/lighthouse.nix>
