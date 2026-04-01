---
module: services.misskey.meilisearch
option_count: 2
source: options.html
---

# services.misskey.meilisearch

## services.misskey.meilisearch.createLocally

Create and use a local Meilisearch instance. Sets services.misskey.settings.meilisearch.{host,port,ssl}. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.meilisearch.keyFile

The path to a file containing the Meilisearch API key. Sets services.misskey.settings.meilisearch.apiKey. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>
