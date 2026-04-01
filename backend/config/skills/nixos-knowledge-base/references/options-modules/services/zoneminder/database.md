---
module: services.zoneminder.database
option_count: 5
source: options.html
---

# services.zoneminder.database

## services.zoneminder.database.createLocally

Create the database and database user locally. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>

## services.zoneminder.database.host

Hostname hosting the database. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>

## services.zoneminder.database.name

Name of database. Type: string Default: "zm" Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>

## services.zoneminder.database.password

Username for accessing the database. Not used if createLocally is set. Type: string Default: "zmpass" Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>

## services.zoneminder.database.username

Username for accessing the database. Type: string Default: "zmuser" Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>
