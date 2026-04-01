---
module: services.grafana.provision.alerting.templates.settings
option_count: 3
source: options.html
---

# services.grafana.provision.alerting.templates.settings

## services.grafana.provision.alerting.templates.settings.apiVersion

Config file version. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.alerting.templates.settings.deleteTemplates

List of alert rule UIDs that should be deleted. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.alerting.templates.settings.templates

List of templates to import or update. Type: list of (open submodule of (YAML 1.1 value)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
