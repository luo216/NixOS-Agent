---
module: services.scrutiny.collector
option_count: 4
source: options.html
---

# services.scrutiny.collector

## services.scrutiny.collector.enable

Whether to enable the Scrutiny metrics collector. Type: boolean Default: config.services.scrutiny.enable Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.collector.package

The scrutiny-collector package to use. Type: package Default: pkgs.scrutiny-collector Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.collector.schedule

How often to run the collector in systemd calendar format. Type: string Default: "daily" Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.collector.settings

Collector settings to be rendered into the collector configuration file. See https://github.com/AnalogJ/scrutiny/blob/master/example.collector.yaml. Options containing secret data should be set to an attribute set containing the attribute _secret. This attribute should be a string or structured JSON with quote = false;, pointing to a file that contains the value the option should be set to. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>
