---
module: services.monica.database
option_count: 6
source: options.html
---

# services.monica.database

## services.monica.database.createLocally

Create the database and database user locally. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.database.host

Database host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.database.name

Database name. Type: string Default: "monica" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.database.passwordFile

A file containing the password corresponding to <option>database.user</option>. Type: null or absolute path Default: null Example: "/run/keys/monica-dbpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.database.user

Database username. Type: string Default: user Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>
