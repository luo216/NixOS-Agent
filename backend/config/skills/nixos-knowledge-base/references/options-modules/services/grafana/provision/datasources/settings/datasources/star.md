---
module: services.grafana.provision.datasources.settings.datasources.*
option_count: 8
source: options.html
---

# services.grafana.provision.datasources.settings.datasources.*

## services.grafana.provision.datasources.settings.datasources.*.access

Access mode. proxy or direct (Server or Browser in the UI). Required. Type: one of “proxy”, “direct” Default: "proxy" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources.settings.datasources.*.editable

Allow users to edit datasources from the UI. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources.settings.datasources.*.jsonData

Extra data for datasource plugins. Type: null or (attribute set) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources.settings.datasources.*.name

Name of the datasource. Required. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources.settings.datasources.*.secureJsonData

Datasource specific secure configuration. Please note that the contents of this option will end up in a world-readable Nix store. Use the file provider pointing at a reasonably secured file in the local filesystem to work around that. Look at the documentation for details: https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#file-provider Type: null or (attribute set) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources.settings.datasources.*.type

Datasource type. Required. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources.settings.datasources.*.uid

Custom UID which can be used to reference this datasource in other parts of the configuration, if not specified will be generated automatically. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.datasources.settings.datasources.*.url

Url of the datasource. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
