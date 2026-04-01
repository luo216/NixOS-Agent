---
module: services.snipe-it.database
option_count: 6
source: options.html
---

# services.snipe-it.database

## services.snipe-it.database.createLocally

Create the database and database user locally. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.database.host

Database host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.database.name

Database name. Type: string Default: "snipeit" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/snipe-it/dbpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.database.user

Database username. Type: string Default: user Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>
