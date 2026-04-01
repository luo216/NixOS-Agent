---
module: services.cachix-watch-store
option_count: 9
source: options.html
---

# services.cachix-watch-store

## services.cachix-watch-store.enable

Whether to enable Cachix Watch Store: https://docs.cachix.org. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/system/cachix-watch-store.nix>

## services.cachix-watch-store.package

The cachix package to use. Type: package Default: pkgs.cachix Declared by: <nixpkgs/nixos/modules/services/system/cachix-watch-store.nix>

## services.cachix-watch-store.cacheName

Cachix binary cache name Type: string Declared by: <nixpkgs/nixos/modules/services/system/cachix-watch-store.nix>

## services.cachix-watch-store.cachixTokenFile

Required file that needs to contain the cachix auth token. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/system/cachix-watch-store.nix>

## services.cachix-watch-store.compressionLevel

The compression level for ZSTD compression (between 0 and 16) Type: null or integer between 0 and 16 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/system/cachix-watch-store.nix>

## services.cachix-watch-store.host

Cachix host to connect to Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/system/cachix-watch-store.nix>

## services.cachix-watch-store.jobs

Number of threads used for pushing store paths Type: null or (positive integer, meaning >0) Default: null Declared by: <nixpkgs/nixos/modules/services/system/cachix-watch-store.nix>

## services.cachix-watch-store.signingKeyFile

Optional file containing a self-managed signing key to sign uploaded store paths. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/system/cachix-watch-store.nix>

## services.cachix-watch-store.verbose

Enable verbose output Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/system/cachix-watch-store.nix>
