---
module: services.prometheus.exporters.collectd
option_count: 11
source: options.html
---

# services.prometheus.exporters.collectd

## services.prometheus.exporters.collectd.enable

Whether to enable the prometheus collectd exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.extraFlags

Extra commandline options to pass to the collectd exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.collectd.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9103" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.collectd.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9103 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.group

Group under which the collectd exporter shall be run. Type: string Default: "collectd-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.logFormat

Set the log format. Type: one of “logfmt”, “json” Default: "logfmt" Example: "json" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.logLevel

Only log messages with the given severity or above. Type: one of “debug”, “info”, “warn”, “error”, “fatal” Default: "info" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9103 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.collectd.user

User name under which the collectd exporter shall be run. Type: string Default: "collectd-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
