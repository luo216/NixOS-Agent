---
module: services.grafana.provision.alerting.policies.settings
option_count: 3
source: options.html
---

# services.grafana.provision.alerting.policies.settings

## services.grafana.provision.alerting.policies.settings.apiVersion

Config file version. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.alerting.policies.settings.policies

List of contact points to import or update. Type: list of (open submodule of (YAML 1.1 value)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.alerting.policies.settings.resetPolicies

List of orgIds that should be reset to the default policy. Type: list of signed integer Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
