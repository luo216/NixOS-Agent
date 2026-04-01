---
module: services.etebase-server.settings.database
option_count: 2
source: options.html
---

# services.etebase-server.settings.database

## services.etebase-server.settings.database.engine

The database engine to use. Type: one of “django.db.backends.sqlite3”, “django.db.backends.postgresql” Default: "django.db.backends.sqlite3" Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>

## services.etebase-server.settings.database.name

The database name. Type: string Default: "${config.services.etebase-server.dataDir}/db.sqlite3" Declared by: <nixpkgs/nixos/modules/services/misc/etebase-server.nix>
