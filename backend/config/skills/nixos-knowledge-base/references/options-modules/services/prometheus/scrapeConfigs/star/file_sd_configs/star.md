---
module: services.prometheus.scrapeConfigs.*.file_sd_configs.*
option_count: 2
source: options.html
---

# services.prometheus.scrapeConfigs.*.file_sd_configs.*

## services.prometheus.scrapeConfigs.*.file_sd_configs.*.files

Patterns for files from which target groups are extracted. Refer to the Prometheus documentation for permitted filename patterns and formats. Type: list of string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.file_sd_configs.*.refresh_interval

Refresh interval to re-read the files. Defaults to 5m in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
