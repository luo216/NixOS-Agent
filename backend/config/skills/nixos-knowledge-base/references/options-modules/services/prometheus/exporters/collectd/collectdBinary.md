---
module: services.prometheus.exporters.collectd.collectdBinary
option_count: 5
source: options.html
---

# services.prometheus.exporters.collectd.collectdBinary

## services.prometheus.exporters.collectd.collectdBinary.enable

Whether to enable collectd binary protocol receiver. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.collectdBinary.authFile

File mapping user names to pre-shared keys (passwords). Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.collectdBinary.listenAddress

Address to listen on for binary network packets. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.collectdBinary.port

Network address on which to accept collectd binary network packets. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25826 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.collectdBinary.securityLevel

Minimum required security level for accepted packets. Type: one of “None”, “Sign”, “Encrypt” Default: "None" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
