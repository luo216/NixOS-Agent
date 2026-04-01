---
module: services.prometheus.scrapeConfigs.*.lightsail_sd_configs.*
option_count: 8
source: options.html
---

# services.prometheus.scrapeConfigs.*.lightsail_sd_configs.*

## services.prometheus.scrapeConfigs.*.lightsail_sd_configs.*.access_key

The AWS API keys. If blank, the environment variable AWS_ACCESS_KEY_ID is used. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.lightsail_sd_configs.*.endpoint

Custom endpoint to be used. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.lightsail_sd_configs.*.port

The port to scrape metrics from. If using the public IP address, this must instead be specified in the relabeling rule. Defaults to 80 in prometheus when set to null. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.lightsail_sd_configs.*.profile

Named AWS profile used to connect to the API. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.lightsail_sd_configs.*.refresh_interval

Refresh interval to re-read the instance list. Defaults to 60s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.lightsail_sd_configs.*.region

The AWS region. If blank, the region from the instance metadata is used. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.lightsail_sd_configs.*.role_arn

AWS Role ARN, an alternative to using AWS API keys. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.lightsail_sd_configs.*.secret_key

The AWS API keys. If blank, the environment variable AWS_SECRET_ACCESS_KEY is used. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
