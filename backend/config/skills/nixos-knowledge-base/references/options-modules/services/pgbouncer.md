---
module: services.pgbouncer
option_count: 8
source: options.html
---

# services.pgbouncer

## services.pgbouncer.enable

Whether to enable PostgreSQL connection pooler. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.package

The pgbouncer package to use. Type: package Default: pkgs.pgbouncer Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.group

The group pgbouncer is run as. Type: string Default: "pgbouncer" Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.homeDir

Specifies the home directory. Type: absolute path Default: "/var/lib/pgbouncer" Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.openFilesLimit

Maximum number of open files. Type: signed integer Default: 65536 Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.openFirewall

Whether to automatically open the specified TCP port in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.settings

Configuration for PgBouncer, see https://www.pgbouncer.org/config.html for supported values. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>

## services.pgbouncer.user

The user pgbouncer is run as. Type: string Default: "pgbouncer" Declared by: <nixpkgs/nixos/modules/services/databases/pgbouncer.nix>
