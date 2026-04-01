---
module: services.dendrite.settings.sync_api.search
option_count: 3
source: options.html
---

# services.dendrite.settings.sync_api.search

## services.dendrite.settings.sync_api.search.enabled

Whether to enable Dendrite’s full-text search engine. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.settings.sync_api.search.index_path

The path the search index will be created in. Type: string Default: "/var/lib/dendrite/searchindex" Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.settings.sync_api.search.language

The language most likely to be used on the server - used when indexing, to ensure the returned results match expectations. A full list of possible languages can be found at https://github.com/blevesearch/bleve/tree/master/analysis/lang Type: string Default: "en" Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>
