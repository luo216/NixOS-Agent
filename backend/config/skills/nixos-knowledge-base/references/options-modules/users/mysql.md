---
module: users.mysql
option_count: 7
source: options.html
---

# users.mysql

## users.mysql.enable

Whether to enable authentication against a MySQL/MariaDB database. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.database

The name of the database containing the users Type: string Example: "auth" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.host

The hostname of the MySQL/MariaDB server Type: string Example: "localhost" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.nss

Settings for libnss-mysql. All examples are from the minimal example of libnss-mysql, but they are modified with NixOS paths for bash. Type: submodule Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam

Settings for pam_mysql Type: submodule Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.passwordFile

The path to the file containing the password for the user Type: absolute path Example: "/run/secrets/mysql-auth-db-passwd" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.user

The username to use when connecting to the database Type: string Example: "nss-user" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>
