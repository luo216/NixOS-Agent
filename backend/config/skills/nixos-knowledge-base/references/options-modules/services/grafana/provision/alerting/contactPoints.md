---
module: services.grafana.provision.alerting.contactPoints
option_count: 2
source: options.html
---

# services.grafana.provision.alerting.contactPoints

## services.grafana.provision.alerting.contactPoints.path

Path to YAML contact points configuration. Can’t be used with services.grafana.provision.alerting.contactPoints.settings simultaneously. Can be either a directory or a single YAML file. Will end up in the store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.alerting.contactPoints.settings

Grafana contact points configuration in Nix. Can’t be used with services.grafana.provision.alerting.contactPoints.path simultaneously. See https://grafana.com/docs/grafana/latest/administration/provisioning/#contact-points for supported options. Type: null or (submodule) Default: null Example: { apiVersion = 1; contactPoints = [{ orgId = 1; name = "cp_1"; receivers = [{ uid = "first_uid"; type = "prometheus-alertmanager"; settings.url = "http://test:9000"; }]; }]; deleteContactPoints = [{ orgId = 1; uid = "first_uid"; }]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
