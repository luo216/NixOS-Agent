---
module: services.prometheus.scrapeConfigs.*.kuma_sd_configs.*.tls_config
option_count: 5
source: options.html
---

# services.prometheus.scrapeConfigs.*.kuma_sd_configs.*.tls_config

## services.prometheus.scrapeConfigs.*.kuma_sd_configs.*.tls_config.ca_file

CA certificate to validate API server certificate with. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kuma_sd_configs.*.tls_config.cert_file

Certificate file for client cert authentication to the server. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kuma_sd_configs.*.tls_config.insecure_skip_verify

Disable validation of the server certificate. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kuma_sd_configs.*.tls_config.key_file

Key file for client cert authentication to the server. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kuma_sd_configs.*.tls_config.server_name

ServerName extension to indicate the name of the server. http://tools.ietf.org/html/rfc4366#section-3.1 Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
