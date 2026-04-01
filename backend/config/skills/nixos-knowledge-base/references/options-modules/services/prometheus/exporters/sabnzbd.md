---
module: services.prometheus.exporters.sabnzbd
option_count: 10
source: options.html
---

# services.prometheus.exporters.sabnzbd

## services.prometheus.exporters.sabnzbd.enable

Whether to enable the prometheus sabnzbd exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sabnzbd.extraFlags

Extra commandline options to pass to the sabnzbd exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sabnzbd.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.sabnzbd.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9387" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sabnzbd.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.sabnzbd.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9387 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sabnzbd.group

Group under which the sabnzbd exporter shall be run. Type: string Default: "sabnzbd-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sabnzbd.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sabnzbd.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sabnzbd.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9387 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sabnzbd.servers

List of sabnzbd servers to connect to. Type: list of (submodule) Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sabnzbd.user

User name under which the sabnzbd exporter shall be run. Type: string Default: "sabnzbd-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
