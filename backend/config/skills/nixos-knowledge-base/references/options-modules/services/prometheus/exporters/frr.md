---
module: services.prometheus.exporters.frr
option_count: 11
source: options.html
---

# services.prometheus.exporters.frr

## services.prometheus.exporters.frr.enable

Whether to enable the prometheus frr exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.frr.enabledCollectors

Collectors to enable. The collectors listed here are enabled in addition to the default ones. Type: list of string Default: [ ] Example: [ "vrrp" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.frr.disabledCollectors

Collectors to disable which are enabled by default. Type: list of string Default: [ ] Example: [ "bfd" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.frr.extraFlags

Extra commandline options to pass to the frr exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.frr.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.frr.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9342" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.frr.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.frr.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9342 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.frr.group

Group under which the frr exporter shall be run. The exporter talks to frr using a unix socket, which is owned by frrtty group. Type: string Default: "frrtty" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.frr.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.frr.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.frr.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9342 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.frr.user

User name under which the frr exporter shall be run. The exporter talks to frr using a unix socket, which is owned by frr. Type: string Default: "frr" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
