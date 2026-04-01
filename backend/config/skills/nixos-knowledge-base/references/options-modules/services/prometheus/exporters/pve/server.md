---
module: services.prometheus.exporters.pve.server
option_count: 2
source: options.html
---

# services.prometheus.exporters.pve.server

## services.prometheus.exporters.pve.server.certFile

Path to a SSL certificate file for the server Type: null or absolute path Default: null Example: "/var/lib/prometheus-pve-exporter/full-chain.pem" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.server.keyFile

Path to a SSL private key file for the server Type: null or absolute path Default: null Example: "/var/lib/prometheus-pve-exporter/privkey.key" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
