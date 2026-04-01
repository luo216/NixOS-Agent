---
module: services.influxdb2.provision.initialSetup
option_count: 6
source: options.html
---

# services.influxdb2.provision.initialSetup

## services.influxdb2.provision.initialSetup.bucket

Primary bucket name Type: string Example: "example" Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.initialSetup.organization

Primary organization name Type: string Example: "main" Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.initialSetup.passwordFile

Password for primary user. Don’t use a file from the nix store! Type: absolute path Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.initialSetup.retention

The duration in seconds for which the bucket will retain data (0 is infinite). Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.initialSetup.tokenFile

API Token to set for the admin user. Don’t use a file from the nix store! Type: absolute path Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.initialSetup.username

Primary username Type: string Default: "admin" Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>
