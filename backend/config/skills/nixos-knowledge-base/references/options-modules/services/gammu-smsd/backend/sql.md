---
module: services.gammu-smsd.backend.sql
option_count: 6
source: options.html
---

# services.gammu-smsd.backend.sql

## services.gammu-smsd.backend.sql.database

Database name to store sms data Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.backend.sql.driver

DB driver to use Type: one of “native_mysql”, “native_pgsql”, “odbc”, “dbi” Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.backend.sql.host

Database server address Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.backend.sql.password

User password used for connection to the database Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.backend.sql.sqlDialect

SQL dialect to use (odbc driver only) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.backend.sql.user

User name used for connection to the database Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>
