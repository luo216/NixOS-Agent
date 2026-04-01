---
module: services.pixelfed.database
option_count: 4
source: options.html
---

# services.pixelfed.database

## services.pixelfed.database.automaticMigrations

Whether to enable automatic migrations for database schema and data. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.database.createLocally

Whether to enable a local database using UNIX socket authentication. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.database.name

Database name. Type: string Default: "pixelfed" Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.database.type

Database engine to use. Note that PGSQL is not well supported: https://github.com/pixelfed/pixelfed/issues/2727 Type: one of “mysql”, “pgsql” Default: "mysql" Example: "pgsql" Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>
