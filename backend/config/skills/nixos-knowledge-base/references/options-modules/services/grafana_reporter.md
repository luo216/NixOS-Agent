---
module: services.grafana_reporter
option_count: 4
source: options.html
---

# services.grafana_reporter

## services.grafana_reporter.enable

Whether to enable grafana_reporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-reporter.nix>

## services.grafana_reporter.addr

Listening address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-reporter.nix>

## services.grafana_reporter.port

Listening port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8686 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-reporter.nix>

## services.grafana_reporter.templateDir

Optional template directory to use custom tex templates Type: string or absolute path Default: pkgs.grafana_reporter Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-reporter.nix>
