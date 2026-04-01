---
module: services.dolibarr.database
option_count: 7
source: options.html
---

# services.dolibarr.database

## services.dolibarr.database.createLocally

Create the database and database user locally. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.database.host

Database host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.database.name

Database name. Type: string Default: "dolibarr" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.database.passwordFile

Database password file. Type: null or absolute path Default: null Example: "/run/keys/dolibarr-dbpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.database.type

Database engine to use. Type: one of “mysql”, “postgresql” Default: "mysql" Example: "postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.database.user

Database username. Type: string Default: "dolibarr" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>
