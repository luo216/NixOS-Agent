---
module: services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*
option_count: 11
source: options.html
---

# services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*.authorization

Optional Authorization header configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*.basic_auth

Optional HTTP basic authentication information. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*.follow_redirects

Configure whether HTTP requests follow HTTP 3xx redirects. Defaults to true in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*.include_parameters

Whether to include the parameters as meta labels. Due to the differences between parameter types and Prometheus labels, some parameters might not be rendered. The format of the parameters might also change in future releases. Note: Enabling this exposes parameters in the Prometheus UI and API. Make sure that you don’t have secrets exposed as parameters if you enable this. Defaults to false in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*.oauth2

Optional OAuth 2.0 configuration. Cannot be used at the same time as basic_auth or authorization. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*.port

The port to scrape metrics from. Defaults to 80 in prometheus when set to null. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*.proxy_url

Optional proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*.query

Puppet Query Language (PQL) query. Only resources are supported. https://puppet.com/docs/puppetdb/latest/api/query/v4/pql.html Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*.refresh_interval

Refresh interval to re-read the resources list. Defaults to 60s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*.tls_config

TLS configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs.*.url

The URL of the PuppetDB root query endpoint. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
