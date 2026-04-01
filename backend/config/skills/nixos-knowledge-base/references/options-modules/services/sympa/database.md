---
module: services.sympa.database
option_count: 7
source: options.html
---

# services.sympa.database

## services.sympa.database.createLocally

Whether to create a local database automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.database.host

Database host address. For MySQL, use localhost to connect using Unix domain socket. For PostgreSQL, use path to directory (e.g. /run/postgresql) to connect using Unix domain socket located in this directory. Use null to fall back on Sympa default, or when using services.sympa.database.createLocally. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.database.name

Database name. When using SQLite this must be an absolute path to the database file. Type: string Default: if database.type == "SQLite" then "/var/lib/sympa/sympa.sqlite" else "sympa" Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.database.passwordFile

A file containing the password for services.sympa.database.name. Type: null or absolute path Default: null Example: "/run/keys/sympa-dbpassword" Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.database.port

Database port. Use null for default port. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.database.type

Database engine to use. Type: one of “SQLite”, “PostgreSQL”, “MySQL” Default: "SQLite" Example: "MySQL" Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.database.user

Database user. The system user name is used as a default. Type: null or string Default: "sympa" Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>
