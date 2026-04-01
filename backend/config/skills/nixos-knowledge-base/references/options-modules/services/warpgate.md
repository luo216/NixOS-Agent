---
module: services.warpgate
option_count: 4
source: options.html
---

# services.warpgate

## services.warpgate.enable

Whether to enable Warpgate. This module will initialize Warpgate base on your config automatically. Please run warpgate recover-access to gain access. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.package

The warpgate package to use. Type: package Default: pkgs.warpgate Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.databaseUrlFile

Path to file containing database connection string with credentials. Should be a one line file with: database_url: <protocol>://<username>:<password>@<host>/<database>. See SeaORM documentation. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings

Warpgate configuration. Type: open submodule of (YAML 1.1 value) Default: { } Example: { http = { listen = "[::]:8011"; }; ssh = { enable = true; listen = "[::]:2211"; }; } Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>
