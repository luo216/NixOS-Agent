---
module: services.kimai.sites.<name>.database
option_count: 9
source: options.html
---

# services.kimai.sites.<name>.database

## services.kimai.sites.<name>.database.charset

Database charset. Type: string Default: "utf8mb4" Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.sites.<name>.database.createLocally

Create the database and database user locally. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.sites.<name>.database.host

Database host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.sites.<name>.database.name

Database name. Type: string Default: "kimai" Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.sites.<name>.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/kimai-dbpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.sites.<name>.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.sites.<name>.database.serverVersion

MySQL exact version string. Not used if createdLocally is set, but must be set otherwise. See https://www.kimai.org/documentation/installation.html#column-table_name-in-where-clause-is-ambiguous for how to set this value, especially if you’re using MariaDB. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.sites.<name>.database.socket

Path to the unix socket file to use for authentication. Type: null or absolute path Default: /run/mysqld/mysqld.sock Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.sites.<name>.database.user

Database user. Type: string Default: "kimai" Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>
