---
module: services.grafana.provision
option_count: 3
source: options.html
---

# services.grafana.provision

## services.grafana.provision.enable

Whether to enable provision. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.dashboards

Declaratively provision Grafana’s dashboards. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources

Declaratively provision Grafana’s datasources. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
