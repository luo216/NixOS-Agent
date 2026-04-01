---
module: services.prometheus.scrapeConfigs.*.azure_sd_configs.*
option_count: 11
source: options.html
---

# services.prometheus.scrapeConfigs.*.azure_sd_configs.*

## services.prometheus.scrapeConfigs.*.azure_sd_configs.*.authentication_method

The authentication method, either OAuth or ManagedIdentity. See https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview Defaults to OAuth in prometheus when set to null. Type: null or one of “OAuth”, “ManagedIdentity” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.azure_sd_configs.*.client_id

Optional client ID. Only required with authentication_method OAuth. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.azure_sd_configs.*.client_secret

Optional client secret. Only required with authentication_method OAuth. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.azure_sd_configs.*.environment

The Azure environment. Defaults to AzurePublicCloud in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.azure_sd_configs.*.follow_redirects

Configure whether HTTP requests follow HTTP 3xx redirects. Defaults to true in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.azure_sd_configs.*.port

The port to scrape metrics from. If using the public IP address, this must instead be specified in the relabeling rule. Defaults to 80 in prometheus when set to null. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.azure_sd_configs.*.proxy_url

Optional proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.azure_sd_configs.*.refresh_interval

Refresh interval to re-read the instance list. Defaults to 300s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.azure_sd_configs.*.subscription_id

The subscription ID. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.azure_sd_configs.*.tenant_id

Optional tenant ID. Only required with authentication_method OAuth. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.azure_sd_configs.*.tls_config

TLS configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
