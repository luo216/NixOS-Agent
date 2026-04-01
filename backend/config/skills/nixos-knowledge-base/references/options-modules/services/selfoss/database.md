---
module: services.selfoss.database
option_count: 6
source: options.html
---

# services.selfoss.database

## services.selfoss.database.host

Host of the database (has no effect if type is “sqlite”). Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/selfoss.nix>

## services.selfoss.database.name

Name of the existing database (has no effect if type is “sqlite”). Type: string Default: "tt_rss" Declared by: <nixpkgs/nixos/modules/services/web-apps/selfoss.nix>

## services.selfoss.database.password

The database user’s password (has no effect if type is “sqlite”). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/selfoss.nix>

## services.selfoss.database.port

The database’s port. If not set, the default ports will be provided (5432 and 3306 for pgsql and mysql respectively) (has no effect if type is “sqlite”). Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/selfoss.nix>

## services.selfoss.database.type

Database to store feeds. Supported are sqlite, pgsql and mysql. Type: one of “pgsql”, “mysql”, “sqlite” Default: "sqlite" Declared by: <nixpkgs/nixos/modules/services/web-apps/selfoss.nix>

## services.selfoss.database.user

The database user. The user must exist and has access to the specified database (has no effect if type is “sqlite”). Type: string Default: "tt_rss" Declared by: <nixpkgs/nixos/modules/services/web-apps/selfoss.nix>
