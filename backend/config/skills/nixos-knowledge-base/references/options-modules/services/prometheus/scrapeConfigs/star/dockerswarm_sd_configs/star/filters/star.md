---
module: services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.filters.*
option_count: 2
source: options.html
---

# services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.filters.*

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.filters.*.name

Name of the filter. The available filters are listed in the upstream documentation: Services: https://docs.docker.com/engine/api/v1.40/#operation/ServiceList Tasks: https://docs.docker.com/engine/api/v1.40/#operation/TaskList Nodes: https://docs.docker.com/engine/api/v1.40/#operation/NodeList Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs.*.filters.*.values

Value for the filter. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
