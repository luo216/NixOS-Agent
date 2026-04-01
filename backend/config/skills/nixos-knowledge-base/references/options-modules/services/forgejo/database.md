---
module: services.forgejo.database
option_count: 9
source: options.html
---

# services.forgejo.database

## services.forgejo.database.createDatabase

Whether to create a local database automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.database.host

Database host address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.database.name

Database name. Type: string Default: "forgejo" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.database.passwordFile

A file containing the password corresponding to services.forgejo.database.user. Type: null or absolute path Default: null Example: "/run/keys/forgejo-dbpassword" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.database.path

Path to the sqlite3 database file. Type: string Default: "${config.services.forgejo.stateDir}/data/forgejo.db" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if config.services.forgejo.database.type != "postgresql" then 3306 else 5432 Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.database.socket

Path to the unix socket file to use for authentication. Type: null or absolute path Default: null Example: "/run/mysqld/mysqld.sock" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.database.type

Database engine to use. Type: one of “sqlite3”, “mysql”, “postgres” Default: "sqlite3" Example: "mysql" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>

## services.forgejo.database.user

Database user. Type: string Default: "forgejo" Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>
