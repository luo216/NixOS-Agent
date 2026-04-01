---
module: services.limesurvey.database
option_count: 9
source: options.html
---

# services.limesurvey.database

## services.limesurvey.database.createLocally

Create the database and database user locally. This currently only applies if database type “mysql” is selected. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.database.dbEngine

Database storage engine to use. Type: one of “MyISAM”, “InnoDB” Default: "InnoDB" Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.database.host

Database host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.database.name

Database name. Type: string Default: "limesurvey" Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/limesurvey-dbpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.database.socket

Path to the unix socket file to use for authentication. Type: null or absolute path Default: /run/mysqld/mysqld.sock Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.database.type

Database engine to use. Type: one of “mysql”, “pgsql”, “odbc”, “mssql” Default: "mysql" Example: "pgsql" Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.database.user

Database user. Type: string Default: "limesurvey" Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>
