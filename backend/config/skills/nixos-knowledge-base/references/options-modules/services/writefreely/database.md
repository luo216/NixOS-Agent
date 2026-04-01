---
module: services.writefreely.database
option_count: 9
source: options.html
---

# services.writefreely.database

## services.writefreely.database.createLocally

When services.writefreely.database.type is set to "mysql", this option will enable the MySQL service locally. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.database.host

The database host to connect to. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.database.migrate

Whether or not to automatically run migrations on startup. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.database.name

The name of the database to store data in. Type: string Default: "writefreely" Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.database.passwordFile

The file to load the database password from. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.database.port

The port used when connecting to the database host. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.database.tls

Whether or not TLS should be used for the database connection. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.database.type

The database provider to use. Type: one of “sqlite3”, “mysql” Default: "sqlite3" Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.database.user

The database user to connect as. Type: null or string Default: "writefreely" Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>
