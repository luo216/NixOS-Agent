---
module: services.monero.mining
option_count: 3
source: options.html
---

# services.monero.mining

## services.monero.mining.enable

Whether to mine monero. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.mining.address

Monero address where to send mining rewards. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.mining.threads

Number of threads used for mining. Set to 0 to use all available. Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>
