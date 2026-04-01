---
module: services.prometheus.exporters.borgmatic
option_count: 10
source: options.html
---

# services.prometheus.exporters.borgmatic

## services.prometheus.exporters.borgmatic.enable

Whether to enable the prometheus borgmatic exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.borgmatic.configFile

The path to the borgmatic config file Type: absolute path Default: "/etc/borgmatic/config.yaml" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.borgmatic.extraFlags

Extra commandline options to pass to the borgmatic exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.borgmatic.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.borgmatic.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9996" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.borgmatic.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.borgmatic.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9996 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.borgmatic.group

Group under which the borgmatic exporter shall be run. Type: string Default: "borgmatic-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.borgmatic.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.borgmatic.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.borgmatic.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9996 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.borgmatic.user

User name under which the borgmatic exporter shall be run. Type: string Default: "borgmatic-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
