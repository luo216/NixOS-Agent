---
module: services.cpuminer-cryptonight
option_count: 5
source: options.html
---

# services.cpuminer-cryptonight

## services.cpuminer-cryptonight.enable

Whether to enable the cpuminer cryptonight miner. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/cpuminer-cryptonight.nix>

## services.cpuminer-cryptonight.pass

Password for mining server Type: string Default: "x" Declared by: <nixpkgs/nixos/modules/services/misc/cpuminer-cryptonight.nix>

## services.cpuminer-cryptonight.threads

Number of miner threads, defaults to available processors Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/misc/cpuminer-cryptonight.nix>

## services.cpuminer-cryptonight.url

URL of mining server Type: string Declared by: <nixpkgs/nixos/modules/services/misc/cpuminer-cryptonight.nix>

## services.cpuminer-cryptonight.user

Username for mining server Type: string Declared by: <nixpkgs/nixos/modules/services/misc/cpuminer-cryptonight.nix>
