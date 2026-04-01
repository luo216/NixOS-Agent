---
module: services.parsedmarc.provision.grafana
option_count: 2
source: options.html
---

# services.parsedmarc.provision.grafana

## services.parsedmarc.provision.grafana.dashboard

Whether the official parsedmarc grafana dashboard should be provisioned to the local grafana instance. Type: boolean Default: config.services.grafana.enable Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.provision.grafana.datasource

Whether the automatically provisioned Elasticsearch instance should be added as a grafana datasource. Has no effect unless services.parsedmarc.provision.elasticsearch is also enabled. Type: boolean Default: config.services.parsedmarc.provision.elasticsearch && config.services.grafana.enable Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>
