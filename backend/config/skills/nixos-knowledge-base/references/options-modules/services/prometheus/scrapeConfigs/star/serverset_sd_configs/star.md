---
module: services.prometheus.scrapeConfigs.*.serverset_sd_configs.*
option_count: 3
source: options.html
---

# services.prometheus.scrapeConfigs.*.serverset_sd_configs.*

## services.prometheus.scrapeConfigs.*.serverset_sd_configs.*.paths

Paths can point to a single service, or the root of a tree of services. Type: list of string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.serverset_sd_configs.*.servers

The Zookeeper servers. Type: list of string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.serverset_sd_configs.*.timeout

Timeout value. Defaults to 10s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
