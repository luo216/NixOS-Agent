---
module: services.prometheus.alertmanagerGotify.gotifyEndpoint
option_count: 3
source: options.html
---

# services.prometheus.alertmanagerGotify.gotifyEndpoint

## services.prometheus.alertmanagerGotify.gotifyEndpoint.host

The hostname or ip your gotify endpoint is running. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.gotifyEndpoint.port

The port your gotify endpoint is running. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 443 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.gotifyEndpoint.tls

If your gotify endpoint uses https, leave this option set to default Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>
