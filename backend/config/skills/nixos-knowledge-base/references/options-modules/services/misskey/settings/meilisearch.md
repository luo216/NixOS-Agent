---
module: services.misskey.settings.meilisearch
option_count: 6
source: options.html
---

# services.misskey.settings.meilisearch

## services.misskey.settings.meilisearch.apiKey

The Meilisearch API key. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.meilisearch.host

The Meilisearch host. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.meilisearch.index

Meilisearch index to use. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.meilisearch.port

The Meilisearch port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7700 Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.meilisearch.scope

The search scope. Type: one of “local”, “global” Default: "local" Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.meilisearch.ssl

Whether to connect via SSL. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>
