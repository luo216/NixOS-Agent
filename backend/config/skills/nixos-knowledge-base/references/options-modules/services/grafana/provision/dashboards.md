---
module: services.grafana.provision.dashboards
option_count: 2
source: options.html
---

# services.grafana.provision.dashboards

## services.grafana.provision.dashboards.path

Path to YAML dashboard configuration. Can’t be used with services.grafana.provision.dashboards.settings simultaneously. Can be either a directory or a single YAML file. Will end up in the store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.dashboards.settings

Grafana dashboard configuration in Nix. Can’t be used with services.grafana.provision.dashboards.path simultaneously. See https://grafana.com/docs/grafana/latest/administration/provisioning/#dashboards for supported options. Type: null or (submodule) Default: null Example: { apiVersion = 1; providers = [{ name = "default"; options.path = "/var/lib/grafana/dashboards"; }]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
