---
module: services.i2pd.precomputation
option_count: 1
source: options.html
---

# services.i2pd.precomputation

## services.i2pd.precomputation.elgamal

Whenever to use precomputated tables for ElGamal. i2pd defaults to false to save 64M of memory (and looses some performance). We default to true as that is what most users want anyway. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
