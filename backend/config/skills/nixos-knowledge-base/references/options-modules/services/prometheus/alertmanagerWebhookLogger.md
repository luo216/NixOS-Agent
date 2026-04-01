---
module: services.prometheus.alertmanagerWebhookLogger
option_count: 3
source: options.html
---

# services.prometheus.alertmanagerWebhookLogger

## services.prometheus.alertmanagerWebhookLogger.enable

Whether to enable Alertmanager Webhook Logger. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-webhook-logger.nix>

## services.prometheus.alertmanagerWebhookLogger.package

The alertmanager-webhook-logger package to use. Type: package Default: pkgs.alertmanager-webhook-logger Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-webhook-logger.nix>

## services.prometheus.alertmanagerWebhookLogger.extraFlags

Extra command line options to pass to alertmanager-webhook-logger. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-webhook-logger.nix>
