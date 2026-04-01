---
module: services.librenms.database
option_count: 7
source: options.html
---

# services.librenms.database

## services.librenms.database.createLocally

Whether to create a local database automatically. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.database.database

Name of the database on the MySQL/MariaDB server. Type: string Default: "librenms" Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.database.host

Hostname or IP of the MySQL/MariaDB server. Ignored if ‘socket’ is defined. Type: unspecified value Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.database.passwordFile

A file containing the password for the user of the MySQL/MariaDB server. Must be readable for the LibreNMS user. Ignored if ‘socket’ is defined, mandatory otherwise. Type: null or absolute path Default: null Example: "/run/secrets/mysql.pass" Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.database.port

Port of the MySQL/MariaDB server. Ignored if ‘socket’ is defined. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.database.socket

A unix socket to mysql, accessible by the librenms user. Useful when mysql is on the localhost. Type: null or string Default: null Example: "/run/mysqld/mysqld.sock" Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.database.username

Name of the user on the MySQL/MariaDB server. Ignored if ‘socket’ is defined. Type: string Default: "librenms" Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>
