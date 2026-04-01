---
module: services.prometheus.scrapeConfigs.*.linode_sd_configs.*.oauth2
option_count: 6
source: options.html
---

# services.prometheus.scrapeConfigs.*.linode_sd_configs.*.oauth2

## services.prometheus.scrapeConfigs.*.linode_sd_configs.*.oauth2.client_id

OAuth client ID. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.linode_sd_configs.*.oauth2.client_secret

OAuth client secret. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.linode_sd_configs.*.oauth2.client_secret_file

Read the client secret from a file. It is mutually exclusive with client_secret. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.linode_sd_configs.*.oauth2.endpoint_params

Optional parameters to append to the token URL. Type: null or (attribute set of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.linode_sd_configs.*.oauth2.scopes

Scopes for the token request. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.linode_sd_configs.*.oauth2.token_url

The URL to fetch the token from. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
