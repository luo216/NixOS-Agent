---
module: services.i2pd.trust
option_count: 4
source: options.html
---

# services.i2pd.trust

## services.i2pd.trust.enable

Whether to enable explicit trust options. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.trust.family

Router Family to trust for first hops. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.trust.hidden

Whether to enable router concealment. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.trust.routers

Only connect to the listed routers. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
