---
module: services.grafana.provision.alerting.muteTimings.settings
option_count: 3
source: options.html
---

# services.grafana.provision.alerting.muteTimings.settings

## services.grafana.provision.alerting.muteTimings.settings.apiVersion

Config file version. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.alerting.muteTimings.settings.deleteMuteTimes

List of mute time intervals that should be deleted. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.alerting.muteTimings.settings.muteTimes

List of mute time intervals to import or update. Type: list of (open submodule of (YAML 1.1 value)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
