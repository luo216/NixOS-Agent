---
module: services.wakapi.database
option_count: 4
source: options.html
---

# services.wakapi.database

## services.wakapi.database.createLocally

Whether to enable automatic database configuration. Note Only PostgreSQL is supported for the time being. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>

## services.wakapi.database.dialect

The database type to use for Wakapi. Type: null or one of “postgres”, “sqlite3”, “mysql”, “cockroach”, “mssql” Default: '' Database dialect from settings if {option}`services.wakatime.settings.db.dialect` is set, or `null` otherwise. '' Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>

## services.wakapi.database.name

The name of the database to use for Wakapi. Type: string Default: '' Database name from settings if {option}`services.wakatime.settings.db.name` is set, or "wakapi" otherwise. '' Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>

## services.wakapi.database.user

The name of the user to use for Wakapi. Type: string Default: '' User from settings if {option}`services.wakatime.settings.db.user` is set, or "wakapi" otherwise. '' Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>
