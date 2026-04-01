---
module: services.prometheus.scrapeConfigs.*.dns_sd_configs.*
option_count: 4
source: options.html
---

# services.prometheus.scrapeConfigs.*.dns_sd_configs.*

## services.prometheus.scrapeConfigs.*.dns_sd_configs.*.names

A list of DNS SRV record names to be queried. Type: list of string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dns_sd_configs.*.port

The port number used if the query type is not SRV. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dns_sd_configs.*.refresh_interval

The time after which the provided names are refreshed. Defaults to 30s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dns_sd_configs.*.type

The type of DNS query to perform. Defaults to SRV in prometheus when set to null. Type: null or one of “SRV”, “A”, “AAAA”, “MX”, “NS” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
