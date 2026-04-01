---
module: services.tt-rss.database
option_count: 8
source: options.html
---

# services.tt-rss.database

## services.tt-rss.database.createLocally

Create the database and database user locally. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.database.host

Host of the database. Leave null to use Unix domain socket. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.database.name

Name of the existing database. Type: string Default: "tt_rss" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.database.password

The database user’s password. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.database.passwordFile

The database user’s password. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.database.port

The database’s port. If not set, the default ports will be provided (5432 and 3306 for pgsql and mysql respectively). Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.database.type

Database to store feeds. Supported are pgsql and mysql. Type: one of “pgsql”, “mysql” Default: "pgsql" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.database.user

The database user. The user must exist and has access to the specified database. Type: string Default: "tt_rss" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>
