---
module: services.prometheus.scrapeConfigs.*.triton_sd_configs.*
option_count: 9
source: options.html
---

# services.prometheus.scrapeConfigs.*.triton_sd_configs.*

## services.prometheus.scrapeConfigs.*.triton_sd_configs.*.account

The account to use for discovering new targets. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.triton_sd_configs.*.dns_suffix

The DNS suffix which should be applied to target. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.triton_sd_configs.*.endpoint

The Triton discovery endpoint (e.g. cmon.us-east-3b.triton.zone). This is often the same value as dns_suffix. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.triton_sd_configs.*.groups

A list of groups for which targets are retrieved, only supported when targeting the container role. If omitted all containers owned by the requesting account are scraped. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.triton_sd_configs.*.port

The port to use for discovery and metric scraping. Defaults to 9163 in prometheus when set to null. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.triton_sd_configs.*.refresh_interval

The interval which should be used for refreshing targets. Defaults to 60s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.triton_sd_configs.*.role

The type of targets to discover, can be set to: “container” to discover virtual machines (SmartOS zones, lx/KVM/bhyve branded zones) running on Triton “cn” to discover compute nodes (servers/global zones) making up the Triton infrastructure Defaults to container in prometheus when set to null. Type: null or one of “container”, “cn” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.triton_sd_configs.*.tls_config

TLS configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.triton_sd_configs.*.version

The Triton discovery API version. Defaults to 1 in prometheus when set to null. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
