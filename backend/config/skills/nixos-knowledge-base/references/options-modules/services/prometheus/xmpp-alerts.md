---
module: services.prometheus.xmpp-alerts
option_count: 2
source: options.html
---

# services.prometheus.xmpp-alerts

## services.prometheus.xmpp-alerts.enable

Whether to enable XMPP Web hook service for Alertmanager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/xmpp-alerts.nix>

## services.prometheus.xmpp-alerts.settings

Configuration for prometheus xmpp-alerts, see https://github.com/jelmer/prometheus-xmpp-alerts/blob/master/xmpp-alerts.yml.example for supported values. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/xmpp-alerts.nix>
