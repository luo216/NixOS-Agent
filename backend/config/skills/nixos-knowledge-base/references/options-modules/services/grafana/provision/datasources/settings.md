---
module: services.grafana.provision.datasources.settings
option_count: 4
source: options.html
---

# services.grafana.provision.datasources.settings

## services.grafana.provision.datasources.settings.apiVersion

Config file version. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources.settings.datasources

List of datasources to insert/update. Type: list of (open submodule of (YAML 1.1 value)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources.settings.deleteDatasources

List of datasources that should be deleted from the database. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources.settings.prune

When true, provisioned datasources from this file will be deleted automatically when removed from services.grafana.provision.datasources.settings.datasources. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
