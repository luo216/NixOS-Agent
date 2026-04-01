---
module: services.unpoller.prometheus
option_count: 3
source: options.html
---

# services.unpoller.prometheus

## services.unpoller.prometheus.disable

Whether to disable the prometheus output plugin. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.prometheus.http_listen

Bind the prometheus exporter to this IP or hostname. Type: string Default: "[::]:9130" Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.prometheus.report_errors

Whether to report errors. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>
