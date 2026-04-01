---
module: services.athens.index.postgres
option_count: 5
source: options.html
---

# services.athens.index.postgres

## services.athens.index.postgres.database

Database name for the Postgres database. Type: string Default: "athens" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.index.postgres.host

Host for the Postgres database. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.index.postgres.password

Password for the Postgres database. Warning: this is stored in plain text in the config file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.index.postgres.port

Port for the Postgres database. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5432 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.index.postgres.user

User for the Postgres database. Type: string Default: "postgres" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>
