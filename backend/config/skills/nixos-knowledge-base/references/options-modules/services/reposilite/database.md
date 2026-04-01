---
module: services.reposilite.database
option_count: 7
source: options.html
---

# services.reposilite.database

## services.reposilite.database.dbname

Database name. Type: string Default: "reposilite" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.database.host

Database host address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.database.passwordFile

Path to the file containing the password for the database connection. This file must be readable by services.reposilite.user. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.database.path

Path to the embedded database file. Set to --temporary to use an in-memory database. Type: string Default: "reposilite.db" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.database.port

Database TCP port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if type == "postgresql" then 5432 else 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.database.type

Database engine to use. Type: one of “h2”, “mariadb”, “mysql”, “postgresql”, “sqlite” Default: "sqlite" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.database.user

Database user. Type: string Default: "reposilite" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>
