---
module: services.prometheus.exporters.smartctl
option_count: 11
source: options.html
---

# services.prometheus.exporters.smartctl

## services.prometheus.exporters.smartctl.enable

Whether to enable the prometheus smartctl exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.smartctl.devices

Paths to the disks that will be monitored. Will autodiscover all disks if none given. Type: list of string Default: [ ] Example: [ "/dev/sda", "/dev/nvme0n1" ]; Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.smartctl.extraFlags

Extra commandline options to pass to the smartctl exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.smartctl.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.smartctl.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9633" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.smartctl.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.smartctl.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9633 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.smartctl.group

Group under which the smartctl exporter shall be run. Type: string Default: "smartctl-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.smartctl.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.smartctl.maxInterval

Interval that limits how often a disk can be queried. Type: string Default: "60s" Example: "2m" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.smartctl.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.smartctl.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9633 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.smartctl.user

User name under which the smartctl exporter shall be run. Type: string Default: "smartctl-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
