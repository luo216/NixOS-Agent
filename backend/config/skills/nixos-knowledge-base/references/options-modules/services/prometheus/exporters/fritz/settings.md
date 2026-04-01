---
module: services.prometheus.exporters.fritz.settings
option_count: 2
source: options.html
---

# services.prometheus.exporters.fritz.settings

## services.prometheus.exporters.fritz.settings.devices

Fritz!-devices to monitor using the exporter. Type: list of (open submodule of (YAML 1.1 value)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritz.settings.log_level

Log level to use for the exporter. Type: one of “DEBUG”, “INFO”, “WARNING”, “ERROR”, “CRITICAL” Default: "INFO" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
