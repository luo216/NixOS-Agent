---
module: services.prometheus.scrapeConfigs.*.marathon_sd_configs.*
option_count: 10
source: options.html
---

# services.prometheus.scrapeConfigs.*.marathon_sd_configs.*

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.auth_token

Optional authentication information for token-based authentication: https://docs.mesosphere.com/1.11/security/ent/iam-api/#passing-an-authentication-token It is mutually exclusive with auth_token_file and other authentication mechanisms. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.auth_token_file

Optional authentication information for token-based authentication: https://docs.mesosphere.com/1.11/security/ent/iam-api/#passing-an-authentication-token It is mutually exclusive with auth_token and other authentication mechanisms. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.authorization

Optional Authorization header configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.basic_auth

Optional HTTP basic authentication information. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.follow_redirects

Configure whether HTTP requests follow HTTP 3xx redirects. Defaults to true in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.oauth2

Optional OAuth 2.0 configuration. Cannot be used at the same time as basic_auth or authorization. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.proxy_url

Optional proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.refresh_interval

Polling interval. Defaults to 30s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.servers

List of URLs to be used to contact Marathon servers. You need to provide at least one server URL. Type: list of string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.tls_config

TLS configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
