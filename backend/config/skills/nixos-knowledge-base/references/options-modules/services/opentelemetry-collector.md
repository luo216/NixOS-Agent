---
module: services.opentelemetry-collector
option_count: 5
source: options.html
---

# services.opentelemetry-collector

## services.opentelemetry-collector.enable

Whether to enable Opentelemetry Collector. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/opentelemetry-collector.nix>

## services.opentelemetry-collector.package

The opentelemetry-collector package to use. Type: package Default: pkgs.opentelemetry-collector Declared by: <nixpkgs/nixos/modules/services/monitoring/opentelemetry-collector.nix>

## services.opentelemetry-collector.configFile

Specify a path to a configuration file that Opentelemetry Collector should use. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/opentelemetry-collector.nix>

## services.opentelemetry-collector.settings

Specify the configuration for Opentelemetry Collector in Nix. See https://opentelemetry.io/docs/collector/configuration/ for available options. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/opentelemetry-collector.nix>

## services.opentelemetry-collector.validateConfigFile

Whether to enable Validate configuration file. Type: boolean Default: true if configFile is a store path Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/opentelemetry-collector.nix>
