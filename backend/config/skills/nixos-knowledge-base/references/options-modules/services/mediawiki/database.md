---
module: services.mediawiki.database
option_count: 9
source: options.html
---

# services.mediawiki.database

## services.mediawiki.database.createLocally

Create the database and database user locally. This currently only applies if database type “mysql” or “postgres” is selected. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.database.host

Database host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.database.name

Database name. Type: string Default: "mediawiki" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/mediawiki-dbpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.database.socket

Path to the unix socket file to use for authentication. Type: null or absolute path Default: /run/mysqld/mysqld.sock Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.database.tablePrefix

If you only have access to a single database and wish to install more than one version of MediaWiki, or have other applications that also use the database, you can give the table names a unique prefix to stop any naming conflicts or confusion. See https://www.mediawiki.org/wiki/Manual:$wgDBprefix. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.database.type

Database engine to use. MySQL/MariaDB is the database of choice by MediaWiki developers. Type: one of “mysql”, “postgres”, “mssql”, “oracle” Default: "mysql" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.database.user

Database user. Type: string Default: "mediawiki" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>
