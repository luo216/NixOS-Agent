---
module: services.prometheus.exporters.unbound.unbound
option_count: 4
source: options.html
---

# services.prometheus.exporters.unbound.unbound

## services.prometheus.exporters.unbound.unbound.ca

Path to the Unbound server certificate authority Type: null or absolute path Default: "/var/lib/unbound/unbound_server.pem" Example: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.unbound.unbound.certificate

Path to the Unbound control socket certificate Type: null or absolute path Default: "/var/lib/unbound/unbound_control.pem" Example: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.unbound.unbound.host

Path to the unbound control socket. Supports unix domain sockets, as well as the TCP interface. Type: string Default: "tcp://127.0.0.1:8953" Example: "unix:///run/unbound/unbound.socket" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.unbound.unbound.key

Path to the Unbound control socket key. Type: null or absolute path Default: "/var/lib/unbound/unbound_control.key" Example: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
