---
module: services.headscale.settings.database.postgres
option_count: 5
source: options.html
---

# services.headscale.settings.database.postgres

## services.headscale.settings.database.postgres.host

Database host address. Type: null or string Default: null Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.database.postgres.name

Database name. Type: null or string Default: null Example: "headscale" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.database.postgres.password_file

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/headscale-dbpassword" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.database.postgres.port

Database host port. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 3306 Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.database.postgres.user

Database user. Type: null or string Default: null Example: "headscale" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>
