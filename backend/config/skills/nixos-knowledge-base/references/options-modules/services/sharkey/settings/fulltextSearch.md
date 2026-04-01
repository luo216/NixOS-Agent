---
module: services.sharkey.settings.fulltextSearch
option_count: 1
source: options.html
---

# services.sharkey.settings.fulltextSearch

## services.sharkey.settings.fulltextSearch.provider

Which provider to use for full text search. All options other than sqlLike require extra setup - see the comments in https://activitypub.software/TransFem-org/Sharkey/-/blob/develop/.config/example.yml for details. If sqlPgroonga is set, and services.sharkey.setupPostgres is true, the pgroonga extension will automatically be setup. You still need to create an index manually. If using Meilisearch, consider setting services.sharkey.setupMeilisearch instead, which will configure Meilisearch for you. Type: one of “sqlLike”, “sqlPgroonga”, “sqlTsvector”, “meilisearch” Default: "sqlLike" Example: "sqlPgroonga" Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>
