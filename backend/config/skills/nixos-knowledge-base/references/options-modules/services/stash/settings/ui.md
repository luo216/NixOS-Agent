---
module: services.stash.settings.ui
option_count: 1
source: options.html
---

# services.stash.settings.ui

## services.stash.settings.ui.frontPageContent

Search filters to display on the front page. Type: (list of (attribute set)) or function that evaluates to a(n) list of (attribute set) Default: <function> Example: presets: [ # To get the savedFilterId, you can query `{ findSavedFilters(mode: <FilterMode>) { id name } }` on localhost:9999/graphql { __typename = "SavedFilter"; savedFilterId = 1; } # basic custom filter { __typename = "CustomFilter"; title = "Random Scenes"; mode = "SCENES"; sortBy = "random"; direction = "DESC"; } presets.recentlyAddedImages ] Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>
