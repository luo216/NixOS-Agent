---
module: services.prometheus.scrapeConfigs.*.http_sd_configs.*
option_count: 6
source: options.html
---

# services.prometheus.scrapeConfigs.*.http_sd_configs.*

## services.prometheus.scrapeConfigs.*.http_sd_configs.*.basic_auth

Authentication information used to authenticate to the API server. password and password_file are mutually exclusive. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.http_sd_configs.*.follow_redirects

Configure whether HTTP requests follow HTTP 3xx redirects. Defaults to true in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.http_sd_configs.*.proxy_url

Optional proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.http_sd_configs.*.refresh_interval

Refresh interval to re-query the endpoint. Defaults to 60s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.http_sd_configs.*.tls_config

Configures the scrape request’s TLS settings. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.http_sd_configs.*.url

URL from which the targets are fetched. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
