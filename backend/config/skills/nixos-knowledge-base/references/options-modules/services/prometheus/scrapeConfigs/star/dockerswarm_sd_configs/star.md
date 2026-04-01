---
module: services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*
option_count: 11
source: options.html
---

# services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.authorization

Optional Authorization header configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.basic_auth

Optional HTTP basic authentication information. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.filters

Optional filters to limit the discovery process to a subset of available resources. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.follow_redirects

Configure whether HTTP requests follow HTTP 3xx redirects. Defaults to true in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.host

Address of the Docker daemon. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.oauth2

Optional OAuth 2.0 configuration. Cannot be used at the same time as basic_auth or authorization. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.port

The port to scrape metrics from, when role is nodes, and for discovered tasks and services that don’t have published ports. Defaults to 80 in prometheus when set to null. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.proxy_url

Optional proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.refresh_interval

The time after which the containers are refreshed. Defaults to 60s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.role

Role of the targets to retrieve. Must be services, tasks, or nodes. Type: one of “services”, “tasks”, “nodes” Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.tls_config

TLS configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
