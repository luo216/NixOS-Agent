---
module: services.prometheus.exporters.graphite
option_count: 11
source: options.html
---

# services.prometheus.exporters.graphite

## services.prometheus.exporters.graphite.enable

Whether to enable the prometheus graphite exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.graphite.extraFlags

Extra commandline options to pass to the graphite exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.graphite.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.graphite.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9108" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.graphite.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.graphite.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9108 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.graphite.graphitePort

Port to use for the graphite server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9109 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.graphite.group

Group under which the graphite exporter shall be run. Type: string Default: "graphite-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.graphite.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.graphite.mappingSettings

Mapping configuration for the exporter, see https://github.com/prometheus/graphite_exporter#yaml-config for available options. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.graphite.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.graphite.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9108 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.graphite.user

User name under which the graphite exporter shall be run. Type: string Default: "graphite-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
