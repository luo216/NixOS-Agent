---
module: services.prometheus.scrapeConfigs.*.gce_sd_configs.*
option_count: 6
source: options.html
---

# services.prometheus.scrapeConfigs.*.gce_sd_configs.*

## services.prometheus.scrapeConfigs.*.gce_sd_configs.*.filter

Filter can be used optionally to filter the instance list by other criteria Syntax of this filter string is described here in the filter query parameter section: https://cloud.google.com/compute/docs/reference/latest/instances/list. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.gce_sd_configs.*.port

The port to scrape metrics from. If using the public IP address, this must instead be specified in the relabeling rule. Defaults to 80 in prometheus when set to null. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.gce_sd_configs.*.project

The GCP Project. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.gce_sd_configs.*.refresh_interval

Refresh interval to re-read the cloud instance list. Defaults to 60s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.gce_sd_configs.*.tag_separator

The tag separator used to separate concatenated GCE instance network tags. See the GCP documentation on network tags for more information: https://cloud.google.com/vpc/docs/add-remove-network-tags Defaults to , in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.gce_sd_configs.*.zone

The zone of the scrape targets. If you need multiple zones use multiple gce_sd_configs. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
