---
module: services.movim.database
option_count: 4
source: options.html
---

# services.movim.database

## services.movim.database.createLocally

local database using UNIX socket authentication Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.database.name

Database name. Type: non-empty string Default: "movim" Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.database.type

Database engine to use. Type: one of “mariadb”, “postgresql” Default: "postgresql" Example: "mariadb" Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.database.user

Database username. Type: non-empty string Default: "movim" Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>
