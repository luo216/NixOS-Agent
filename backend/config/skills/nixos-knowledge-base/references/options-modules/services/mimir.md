---
module: services.mimir
option_count: 5
source: options.html
---

# services.mimir

## services.mimir.enable

Whether to enable mimir. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/mimir.nix>

## services.mimir.package

The mimir package to use. Type: package Default: pkgs.mimir Declared by: <nixpkgs/nixos/modules/services/monitoring/mimir.nix>

## services.mimir.configFile

Specify a configuration file that Mimir should use. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/mimir.nix>

## services.mimir.configuration

Specify the configuration for Mimir in Nix. Type: JSON value Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/mimir.nix>

## services.mimir.extraFlags

Specify a list of additional command line flags, which get escaped and are then passed to Mimir. Type: list of string Default: [ ] Example: [ "--config.expand-env=true" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/mimir.nix>
