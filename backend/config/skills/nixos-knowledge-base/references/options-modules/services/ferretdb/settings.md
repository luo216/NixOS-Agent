---
module: services.ferretdb.settings
option_count: 4
source: options.html
---

# services.ferretdb.settings

## services.ferretdb.settings.FERRETDB_HANDLER

Backend handler Type: one of “sqlite”, “pg” Default: "sqlite" Declared by: <nixpkgs/nixos/modules/services/databases/ferretdb.nix>

## services.ferretdb.settings.FERRETDB_POSTGRESQL_URL

PostgreSQL URL for ‘pg’ handler Type: string Default: "postgres://ferretdb@localhost/ferretdb?host=/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/databases/ferretdb.nix>

## services.ferretdb.settings.FERRETDB_SQLITE_URL

SQLite URI (directory) for ‘sqlite’ handler Type: string Default: "file:/var/lib/ferretdb/" Declared by: <nixpkgs/nixos/modules/services/databases/ferretdb.nix>

## services.ferretdb.settings.FERRETDB_TELEMETRY

Enable or disable basic telemetry. See https://docs.ferretdb.io/telemetry/ for more information. Type: one of “enable”, “disable” Default: "disable" Declared by: <nixpkgs/nixos/modules/services/databases/ferretdb.nix>
