---
module: services.castopod.database
option_count: 5
source: options.html
---

# services.castopod.database

## services.castopod.database.createLocally

Create the database and database user locally. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.database.hostname

Database hostname. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.database.name

Database name. Type: string Default: "castopod" Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.database.passwordFile

A file containing the password corresponding to services.castopod.database.user. This file is loaded using systemd LoadCredentials. Type: null or absolute path Default: null Example: "/run/keys/castopod-dbpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.database.user

Database user. Type: string Default: "castopod" Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>
