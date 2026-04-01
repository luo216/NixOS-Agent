---
module: services.ncps.cache
option_count: 9
source: options.html
---

# services.ncps.cache

## services.ncps.cache.allowDeleteVerb

Whether to enable Whether to allow the DELETE verb to delete narinfo and nar files from the cache. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.cache.allowPutVerb

Whether to enable Whether to allow the PUT verb to push narinfo and nar files directly to the cache. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.cache.dataPath

The local directory for storing configuration and cached store paths Type: string Default: "/var/lib/ncps" Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.cache.databaseURL

The URL of the database (currently only SQLite is supported) Type: string Default: "sqlite:/var/lib/ncps/db/db.sqlite" Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.cache.hostName

The hostname of the cache server. This is used to generate the private key used for signing store paths (.narinfo) Type: string Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.cache.maxSize

The maximum size of the store. It can be given with units such as 5K, 10G etc. Supported units: B, K, M, G, T. Type: null or string Default: null Example: "100G" Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.cache.secretKeyPath

The path to load the secretKey for signing narinfos. Leave this empty to automatically generate a private/public key. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.cache.signNarinfo

Whether to sign narInfo files or passthru as-is from upstream Type: boolean Default: true Example: "false" Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.cache.tempPath

The path to the temporary directory that is used by the cache to download NAR files Type: string Default: "/tmp" Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>
