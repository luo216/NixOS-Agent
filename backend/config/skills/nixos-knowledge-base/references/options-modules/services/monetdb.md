---
module: services.monetdb
option_count: 7
source: options.html
---

# services.monetdb

## services.monetdb.enable

Whether to enable the MonetDB database server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/monetdb.nix>

## services.monetdb.package

The monetdb package to use. Type: package Default: pkgs.monetdb Declared by: <nixpkgs/nixos/modules/services/databases/monetdb.nix>

## services.monetdb.dataDir

Data directory for the dbfarm. Type: absolute path Default: "/var/lib/monetdb" Declared by: <nixpkgs/nixos/modules/services/databases/monetdb.nix>

## services.monetdb.group

Group under which MonetDB runs. Type: string Default: "monetdb" Declared by: <nixpkgs/nixos/modules/services/databases/monetdb.nix>

## services.monetdb.listenAddress

Address to listen on. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/databases/monetdb.nix>

## services.monetdb.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 50000 Declared by: <nixpkgs/nixos/modules/services/databases/monetdb.nix>

## services.monetdb.user

User account under which MonetDB runs. Type: string Default: "monetdb" Declared by: <nixpkgs/nixos/modules/services/databases/monetdb.nix>
