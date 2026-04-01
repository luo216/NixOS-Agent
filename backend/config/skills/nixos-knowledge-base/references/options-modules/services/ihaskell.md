---
module: services.ihaskell
option_count: 2
source: options.html
---

# services.ihaskell

## services.ihaskell.enable

Autostart an IHaskell notebook service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/ihaskell.nix>

## services.ihaskell.extraPackages

Extra packages available to ghc when running ihaskell. The value must be a function which receives the attrset defined in haskellPackages as the sole argument. Type: function that evaluates to a(n) list of package Default: haskellPackages: [] Example: haskellPackages: [ haskellPackages.wreq haskellPackages.lens ] Declared by: <nixpkgs/nixos/modules/services/misc/ihaskell.nix>
