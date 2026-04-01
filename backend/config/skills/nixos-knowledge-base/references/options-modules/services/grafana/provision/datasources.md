---
module: services.grafana.provision.datasources
option_count: 2
source: options.html
---

# services.grafana.provision.datasources

## services.grafana.provision.datasources.path

Path to YAML datasource configuration. Can’t be used with services.grafana.provision.datasources.settings simultaneously. Can be either a directory or a single YAML file. Will end up in the store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources.settings

Grafana datasource configuration in Nix. Can’t be used with services.grafana.provision.datasources.path simultaneously. See https://grafana.com/docs/grafana/latest/administration/provisioning/#data-sources for supported options. Type: null or (submodule) Default: null Example: { apiVersion = 1; datasources = [{ name = "Graphite"; type = "graphite"; }]; deleteDatasources = [{ name = "Graphite"; orgId = 1; }]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
