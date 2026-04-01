---
module: services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*
option_count: 14
source: options.html
---

# services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.access_key

Access key to use. https://console.scaleway.com/project/credentials Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.api_url

API URL to use when doing the server listing requests. Defaults to https://api.scaleway.com in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.follow_redirects

Configure whether HTTP requests follow HTTP 3xx redirects. Defaults to true in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.name_filter

Specify a name filter (works as a LIKE) to apply on the server listing request. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.port

The port to scrape metrics from. Defaults to 80 in prometheus when set to null. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.project_id

Project ID of the targets. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.proxy_url

Optional proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.refresh_interval

Refresh interval to re-read the managed targets list. Defaults to 60s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.role

Role of the targets to retrieve. Must be instance or baremetal. Type: one of “instance”, “baremetal” Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.secret_key

Secret key to use when listing targets. https://console.scaleway.com/project/credentials It is mutually exclusive with secret_key_file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.secret_key_file

Sets the secret key with the credentials read from the configured file. It is mutually exclusive with secret_key. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.tags_filter

Specify a tag filter (a server needs to have all defined tags to be listed) to apply on the server listing request. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.tls_config

TLS configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs.*.zone

Zone is the availability zone of your targets (e.g. fr-par-1). Defaults to fr-par-1 in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
