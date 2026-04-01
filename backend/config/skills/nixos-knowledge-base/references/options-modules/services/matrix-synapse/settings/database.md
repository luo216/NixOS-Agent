---
module: services.matrix-synapse.settings.database
option_count: 1
source: options.html
---

# services.matrix-synapse.settings.database

## services.matrix-synapse.settings.database.name

The database engine name. Can be sqlite3 or psycopg2. Type: one of “sqlite3”, “psycopg2” Default: if versionAtLeast config.system.stateVersion "18.03" then "psycopg2" else "sqlite3" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>
