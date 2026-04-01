---
module: services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*
option_count: 12
source: options.html
---

# services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.authorization

Optional Authorization header configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.basic_auth

Optional HTTP basic authentication information. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.entitlement

The entitlement string to filter eligible systems. Defaults to monitoring_entitled in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.follow_redirects

Configure whether HTTP requests follow HTTP 3xx redirects. Defaults to true in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.oauth2

Optional OAuth 2.0 configuration. Cannot be used at the same time as basic_auth or authorization. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.password

Credentials are used to authenticate the requests to Uyuni API. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.proxy_url

Optional proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.refresh_interval

Refresh interval to re-read the managed targets list. Defaults to 60s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.separator

The string by which Uyuni group names are joined into the groups label Defaults to , in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.server

The URL to connect to the Uyuni server. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.tls_config

TLS configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs.*.username

Credentials are used to authenticate the requests to Uyuni API. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
