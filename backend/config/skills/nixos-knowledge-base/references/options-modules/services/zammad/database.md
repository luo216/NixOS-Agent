---
module: services.zammad.database
option_count: 7
source: options.html
---

# services.zammad.database

## services.zammad.database.createLocally

Whether to create a local database automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.database.host

Database host address. Type: string Default: "/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.database.name

Database name. Type: string Default: "zammad" Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.database.passwordFile

A file containing the password for services.zammad.database.user. Type: null or absolute path Default: null Example: "/run/keys/zammad-dbpassword" Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.database.port

Database port. Use null for default port. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.database.settings

The database.yml configuration file as key value set. See <TODO> for list of configuration parameters. Type: YAML 1.1 value Default: { } Example: { } Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>

## services.zammad.database.user

Database user. Type: null or string Default: "zammad" Declared by: <nixpkgs/nixos/modules/services/development/zammad.nix>
