---
module: services.hoogle
option_count: 7
source: options.html
---

# services.hoogle

## services.hoogle.enable

Whether to enable Haskell documentation server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/hoogle.nix>

## services.hoogle.packages

The Haskell packages to generate documentation for. The option value is a function that takes the package set specified in the haskellPackages option as its sole parameter and returns a list of packages. Type: function that evaluates to a(n) list of package Default: hp: [] Example: hp: with hp; [ text lens ] Declared by: <nixpkgs/nixos/modules/services/development/hoogle.nix>

## services.hoogle.extraOptions

Additional command-line arguments to pass to hoogle server Type: list of string Default: [ ] Example: [ "--no-security-headers" ] Declared by: <nixpkgs/nixos/modules/services/development/hoogle.nix>

## services.hoogle.haskellPackages

Which haskell package set to use. Type: attribute set Default: pkgs.haskellPackages Declared by: <nixpkgs/nixos/modules/services/development/hoogle.nix>

## services.hoogle.home

Url for hoogle logo Type: string Default: "https://hoogle.haskell.org" Declared by: <nixpkgs/nixos/modules/services/development/hoogle.nix>

## services.hoogle.host

Set the host to bind on. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/development/hoogle.nix>

## services.hoogle.port

Port number Hoogle will be listening to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/development/hoogle.nix>
