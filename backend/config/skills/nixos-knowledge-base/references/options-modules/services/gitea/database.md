---
module: services.gitea.database
option_count: 10
source: options.html
---

# services.gitea.database

## services.gitea.database.createDatabase

Whether to create a local database automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.database.host

Database host address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.database.name

Database name. Type: string Default: "gitea" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.database.password

The password corresponding to database.user. Warning: this is stored in cleartext in the Nix store! Use database.passwordFile instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/gitea-dbpassword" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.database.path

Path to the sqlite3 database file. Type: string Default: "${config.services.gitea.stateDir}/data/gitea.db" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if config.services.gitea.database.type != "postgresql" then 3306 else 5432 Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.database.socket

Path to the unix socket file to use for authentication. Type: null or absolute path Default: null Example: "/run/mysqld/mysqld.sock" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.database.type

Database engine to use. Type: one of “sqlite3”, “mysql”, “postgres” Default: "sqlite3" Example: "mysql" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.database.user

Database user. Type: string Default: "gitea" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>
