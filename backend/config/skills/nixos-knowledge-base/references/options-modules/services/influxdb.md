---
module: services.influxdb
option_count: 6
source: options.html
---

# services.influxdb

## services.influxdb.enable

Whether to enable the influxdb server Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/influxdb.nix>

## services.influxdb.package

The influxdb package to use. Type: package Default: pkgs.influxdb Declared by: <nixpkgs/nixos/modules/services/databases/influxdb.nix>

## services.influxdb.dataDir

Data directory for influxd data files. Type: absolute path Default: "/var/db/influxdb" Declared by: <nixpkgs/nixos/modules/services/databases/influxdb.nix>

## services.influxdb.extraConfig

Extra configuration options for influxdb Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/databases/influxdb.nix>

## services.influxdb.group

Group under which influxdb runs Type: string Default: "influxdb" Declared by: <nixpkgs/nixos/modules/services/databases/influxdb.nix>

## services.influxdb.user

User account under which influxdb runs Type: string Default: "influxdb" Declared by: <nixpkgs/nixos/modules/services/databases/influxdb.nix>
