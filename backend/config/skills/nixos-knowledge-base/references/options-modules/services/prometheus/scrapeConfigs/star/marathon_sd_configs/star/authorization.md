---
module: services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.authorization
option_count: 3
source: options.html
---

# services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.authorization

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.authorization.credentials

Sets the credentials. It is mutually exclusive with credentials_file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.authorization.credentials_file

Sets the credentials to the credentials read from the configured file. It is mutually exclusive with credentials. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs.*.authorization.type

Sets the authentication type. Defaults to Bearer in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
