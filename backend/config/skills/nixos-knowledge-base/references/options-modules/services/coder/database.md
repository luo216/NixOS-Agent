---
module: services.coder.database
option_count: 6
source: options.html
---

# services.coder.database

## services.coder.database.createLocally

Create the database and database user locally. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.database.database

Name of database. Type: string Default: "coder" Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.database.host

Hostname hosting the database. Type: string Default: "/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.database.password

Password for accessing the database. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.database.sslmode

Password for accessing the database. Type: null or string Default: "disable" Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.database.username

Username for accessing the database. Type: string Default: "coder" Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>
