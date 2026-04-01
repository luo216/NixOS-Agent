---
module: services.prometheus.exporters.apcupsd
option_count: 11
source: options.html
---

# services.prometheus.exporters.apcupsd

## services.prometheus.exporters.apcupsd.enable

Whether to enable the prometheus apcupsd exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.apcupsd.apcupsdAddress

Address of the apcupsd Network Information Server (NIS). Type: string Default: ":3551" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.apcupsd.apcupsdNetwork

Network of the apcupsd Network Information Server (NIS): one of “tcp”, “tcp4”, or “tcp6”. Type: one of “tcp”, “tcp4”, “tcp6” Default: "tcp" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.apcupsd.extraFlags

Extra commandline options to pass to the apcupsd exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.apcupsd.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.apcupsd.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9162" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.apcupsd.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.apcupsd.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9162 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.apcupsd.group

Group under which the apcupsd exporter shall be run. Type: string Default: "apcupsd-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.apcupsd.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.apcupsd.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.apcupsd.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9162 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.apcupsd.user

User name under which the apcupsd exporter shall be run. Type: string Default: "apcupsd-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
