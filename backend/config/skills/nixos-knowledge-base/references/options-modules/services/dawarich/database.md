---
module: services.dawarich.database
option_count: 6
source: options.html
---

# services.dawarich.database

## services.dawarich.database.createLocally

Whether to configure a local PostgreSQL server and database for Dawarich. The connection is performed via Unix sockets. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.database.host

Hostname or address of the postgresql server. If an absolute path is given here, it will be interpreted as a unix socket path. Type: string Default: "/run/postgresql" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.database.name

The name of the dawarich database. Type: string Default: "dawarich" Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.database.passwordFile

A file containing the password corresponding to services.dawarich.database.user. Type: null or absolute path Default: null Example: "/run/keys/dawarich-db-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.database.port

Port of the postgresql server. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5432 Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.database.user

The database user for dawarich. Type: string Default: "dawarich" Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>
