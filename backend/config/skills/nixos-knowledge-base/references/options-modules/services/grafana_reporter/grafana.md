---
module: services.grafana_reporter.grafana
option_count: 3
source: options.html
---

# services.grafana_reporter.grafana

## services.grafana_reporter.grafana.addr

Grafana address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-reporter.nix>

## services.grafana_reporter.grafana.port

Grafana port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-reporter.nix>

## services.grafana_reporter.grafana.protocol

Grafana protocol. Type: one of “http”, “https” Default: "http" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-reporter.nix>
