---
module: services.sharkey
option_count: 8
source: options.html
---

# services.sharkey

## services.sharkey.enable

Whether to enable Sharkey, a Sharkish microblogging platform. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.package

The sharkey package to use. Type: package Default: pkgs.sharkey Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.environmentFiles

List of paths to files containing environment variables for Sharkey to use at runtime. This is useful for keeping secrets out of the Nix store. See https://docs.joinsharkey.org/docs/install/configuration/ for how to configure Sharkey using environment variables. Type: list of absolute path Default: [ ] Example: [ "/run/secrets/sharkey-env" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.openFirewall

Whether to open ports in the NixOS firewall for Sharkey. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.settings

Configuration options for Sharkey. See https://activitypub.software/TransFem-org/Sharkey/-/blob/develop/.config/example.yml for a list of all available configuration options. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.setupMeilisearch

Whether to automatically set up a local Meilisearch instance and configure Sharkey to use it. You need to ensure services.meilisearch.masterKeyFile is correctly configured for a working Meilisearch setup. You also need to configure Sharkey to use an API key obtained from Meilisearch with the MK_CONFIG_MEILISEARCH_APIKEY environment variable, and set services.sharkey.settings.meilisearch.index to the created index. See https://docs.joinsharkey.org/docs/customisation/search/meilisearch/ for how to create an API key and index. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.setupPostgresql

Whether to automatically set up a local PostgreSQL database and configure Sharkey to use it. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.setupRedis

Whether to automatically set up a local Redis cache and configure Sharkey to use it. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>
