---
module: services.influxdb2.provision.organizations.<name>.buckets.<name>
option_count: 3
source: options.html
---

# services.influxdb2.provision.organizations.<name>.buckets.<name>

## services.influxdb2.provision.organizations.<name>.buckets.<name>.description

Optional description for the bucket. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.buckets.<name>.present

Whether to ensure that this bucket is present or absent. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.buckets.<name>.retention

The duration in seconds for which the bucket will retain data (0 is infinite). Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>
