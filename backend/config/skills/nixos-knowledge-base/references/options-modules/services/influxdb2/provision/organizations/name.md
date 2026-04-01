---
module: services.influxdb2.provision.organizations.<name>
option_count: 4
source: options.html
---

# services.influxdb2.provision.organizations.<name>

## services.influxdb2.provision.organizations.<name>.auths

API tokens to provision for the user in this organization. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.buckets

Buckets to provision in this organization. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.description

Optional description for the organization. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.present

Whether to ensure that this organization is present or absent. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>
