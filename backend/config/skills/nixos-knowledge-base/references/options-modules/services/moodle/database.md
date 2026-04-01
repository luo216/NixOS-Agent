---
module: services.moodle.database
option_count: 8
source: options.html
---

# services.moodle.database

## services.moodle.database.createLocally

Create the database and database user locally. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.database.host

Database host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.database.name

Database name. Type: string Default: "moodle" Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/moodle-dbpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.database.socket

Path to the unix socket file to use for authentication. Type: null or absolute path Default: /run/mysqld/mysqld.sock Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.database.type

Database engine to use. Type: one of “mysql”, “pgsql” Default: "mysql" Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.database.user

Database user. Type: string Default: "moodle" Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>
