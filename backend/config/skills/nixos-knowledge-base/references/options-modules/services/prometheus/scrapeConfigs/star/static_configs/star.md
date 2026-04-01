---
module: services.prometheus.scrapeConfigs.*.static_configs.*
option_count: 2
source: options.html
---

# services.prometheus.scrapeConfigs.*.static_configs.*

## services.prometheus.scrapeConfigs.*.static_configs.*.labels

Labels assigned to all metrics scraped from the targets. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.static_configs.*.targets

The targets specified by the target group. Type: list of string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
