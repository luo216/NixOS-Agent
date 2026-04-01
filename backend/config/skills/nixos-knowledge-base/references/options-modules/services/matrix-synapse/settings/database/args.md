---
module: services.matrix-synapse.settings.database.args
option_count: 2
source: options.html
---

# services.matrix-synapse.settings.database.args

## services.matrix-synapse.settings.database.args.database

Name of the database when using the psycopg2 backend, path to the database location when using sqlite3. Type: string Default: { sqlite3 = "${services.matrix-synapse.dataDir}/homeserver.db"; psycopg2 = "matrix-synapse"; }.${services.matrix-synapse.settings.database.name}; Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.settings.database.args.user

Username to connect with psycopg2, set to null when using sqlite3. Type: null or string Default: { sqlite3 = null; psycopg2 = "matrix-synapse"; }.${cfg.settings.database.name}; Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>
