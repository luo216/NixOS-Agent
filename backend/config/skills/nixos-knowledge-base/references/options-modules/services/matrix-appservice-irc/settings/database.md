---
module: services.matrix-appservice-irc.settings.database
option_count: 2
source: options.html
---

# services.matrix-appservice-irc.settings.database

## services.matrix-appservice-irc.settings.database.connectionString

The database connection string Type: string Default: "nedb://var/lib/matrix-appservice-irc/data" Example: "postgres://username:password@host:port/databasename" Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>

## services.matrix-appservice-irc.settings.database.engine

Which database engine to use Type: string Default: "nedb" Example: "postgres" Declared by: <nixpkgs/nixos/modules/services/matrix/appservice-irc.nix>
