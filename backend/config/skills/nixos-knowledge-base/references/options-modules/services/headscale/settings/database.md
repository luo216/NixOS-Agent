---
module: services.headscale.settings.database
option_count: 1
source: options.html
---

# services.headscale.settings.database

## services.headscale.settings.database.type

Database engine to use. Please note that using Postgres is highly discouraged as it is only supported for legacy reasons. All new development, testing and optimisations are done with SQLite in mind. Type: one of “sqlite”, “sqlite3”, “postgres” Default: "sqlite" Example: "postgres" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>
