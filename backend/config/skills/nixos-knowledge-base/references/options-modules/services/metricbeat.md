---
module: services.metricbeat
option_count: 4
source: options.html
---

# services.metricbeat

## services.metricbeat.enable

Whether to enable metricbeat. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/metricbeat.nix>

## services.metricbeat.package

The metricbeat package to use. Type: package Default: pkgs.metricbeat Example: metricbeat7 Declared by: <nixpkgs/nixos/modules/services/monitoring/metricbeat.nix>

## services.metricbeat.modules

Metricbeat modules are responsible for reading metrics from the various sources. This is like services.metricbeat.settings.metricbeat.modules, but structured as an attribute set. This has the benefit that multiple NixOS modules can contribute settings to a single metricbeat module. A module can be specified multiple times by choosing a different <name> for each, but setting services.metricbeat.modules.<name>.module to the same value. See https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-modules.html. Type: attribute set of (open submodule of (YAML 1.1 value)) Default: { } Example: { system = { core = { metrics = [ "percentages" ]; }; cpu = { metrics = [ "percentages" "normalized_percentages" ]; }; enabled = true; metricsets = [ "cpu" "load" "memory" "network" "process" "process_summary" "uptime" "socket_summary" ]; period = "10s"; processes = [ ".*" ]; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/metricbeat.nix>

## services.metricbeat.settings

Configuration for metricbeat. See https://www.elastic.co/guide/en/beats/metricbeat/current/configuring-howto-metricbeat.html for supported values. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/metricbeat.nix>
