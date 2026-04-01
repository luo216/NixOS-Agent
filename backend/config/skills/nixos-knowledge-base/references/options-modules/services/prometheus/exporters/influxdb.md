---
module: services.prometheus.exporters.influxdb
option_count: 11
source: options.html
---

# services.prometheus.exporters.influxdb

## services.prometheus.exporters.influxdb.enable

Whether to enable the prometheus influxdb exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.influxdb.extraFlags

Extra commandline options to pass to the influxdb exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.influxdb.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.influxdb.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9122" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.influxdb.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.influxdb.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9122 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.influxdb.group

Group under which the influxdb exporter shall be run. Type: string Default: "influxdb-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.influxdb.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.influxdb.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.influxdb.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9122 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.influxdb.sampleExpiry

How long a sample is valid for Type: string Default: "5m" Example: "10m" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.influxdb.udpBindAddress

Address on which to listen for udp packets Type: string Default: ":9122" Example: "192.0.2.1:9122" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.influxdb.user

User name under which the influxdb exporter shall be run. Type: string Default: "influxdb-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
