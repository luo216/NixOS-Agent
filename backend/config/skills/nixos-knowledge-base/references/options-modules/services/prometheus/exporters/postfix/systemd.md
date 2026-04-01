---
module: services.prometheus.exporters.postfix.systemd
option_count: 4
source: options.html
---

# services.prometheus.exporters.postfix.systemd

## services.prometheus.exporters.postfix.systemd.enable

Whether to enable reading metrics from the systemd journal instead of from a logfile Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.systemd.journalPath

Path to the systemd journal. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.systemd.slice

Name of the postfix systemd slice. This overrides the systemd.unit. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.systemd.unit

Name of the postfix systemd unit. Type: string Default: "postfix.service" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
