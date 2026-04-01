---
module: services.redmine.database
option_count: 8
source: options.html
---

# services.redmine.database

## services.redmine.database.createLocally

Create the database and database user locally. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.database.host

Database host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.database.name

Database name. Type: string Default: "redmine" Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/redmine-dbpassword" Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.database.socket

Path to the unix socket file to use for authentication. Type: null or absolute path Default: /run/mysqld/mysqld.sock Example: "/run/mysqld/mysqld.sock" Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.database.type

Database engine to use. Type: one of “mysql2”, “postgresql”, “sqlite3” Default: "mysql2" Example: "postgresql" Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.database.user

Database user. Type: string Default: "redmine" Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>
