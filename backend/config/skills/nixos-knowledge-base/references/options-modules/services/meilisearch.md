---
module: services.meilisearch
option_count: 6
source: options.html
---

# services.meilisearch

## services.meilisearch.enable

Whether to enable Meilisearch - a RESTful search API. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/search/meilisearch.nix>

## services.meilisearch.package

The meilisearch package to use. Use this if you require specific features to be enabled. The default package has no features. Type: package Default: pkgs.meilisearch Declared by: <nixpkgs/nixos/modules/services/search/meilisearch.nix>

## services.meilisearch.listenAddress

The IP address that Meilisearch will listen on. It can also be a hostname like “localhost”. If it resolves to an IPv4 and IPv6 address, Meilisearch will listen on both. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/search/meilisearch.nix>

## services.meilisearch.listenPort

The port that Meilisearch will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7700 Declared by: <nixpkgs/nixos/modules/services/search/meilisearch.nix>

## services.meilisearch.masterKeyFile

Path to file which contains the master key. By doing so, all routes will be protected and will require a key to be accessed. If no master key is provided, all routes can be accessed without requiring any key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/search/meilisearch.nix>

## services.meilisearch.settings

Configuration settings for Meilisearch. Look at the documentation for available options: https://github.com/meilisearch/meilisearch/blob/main/config.toml https://www.meilisearch.com/docs/learn/self_hosted/configure_meilisearch_at_launch#all-instance-options Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/search/meilisearch.nix>
