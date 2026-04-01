---
module: services.influxdb2
option_count: 3
source: options.html
---

# services.influxdb2

## services.influxdb2.enable

Whether to enable the influxdb2 server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.package

The influxdb2 package to use. Type: package Default: pkgs.influxdb2 Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.settings

configuration options for influxdb2, see https://docs.influxdata.com/influxdb/v2.0/reference/config-options for details. Type: JSON value Default: { } Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>
