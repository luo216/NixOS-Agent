---
module: services.prometheus.pushgateway.web
option_count: 4
source: options.html
---

# services.prometheus.pushgateway.web

## services.prometheus.pushgateway.web.external-url

The URL under which Pushgateway is externally reachable. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>

## services.prometheus.pushgateway.web.listen-address

Address to listen on for the web interface, API and telemetry. null will default to :9091. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>

## services.prometheus.pushgateway.web.route-prefix

Prefix for the internal routes of web endpoints. Defaults to the path of services.prometheus.pushgateway.web.external-url. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>

## services.prometheus.pushgateway.web.telemetry-path

Path under which to expose metrics. null will default to /metrics. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/pushgateway.nix>
