---
module: services.monero.limits
option_count: 4
source: options.html
---

# services.monero.limits

## services.monero.limits.download

Limit of the download rate in kB/s. Set to -1 to leave unlimited. Type: signed integer Default: -1 Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.limits.syncSize

Maximum number of blocks to sync at once. Set to 0 for adaptive. Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.limits.threads

Maximum number of threads used for a parallel job. Set to 0 to leave unlimited. Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.limits.upload

Limit of the upload rate in kB/s. Set to -1 to leave unlimited. Type: signed integer Default: -1 Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>
