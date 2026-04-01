---
module: services.prometheus.exporters.ebpf
option_count: 10
source: options.html
---

# services.prometheus.exporters.ebpf

## services.prometheus.exporters.ebpf.enable

Whether to enable the prometheus ebpf exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ebpf.extraFlags

Extra commandline options to pass to the ebpf exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ebpf.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.ebpf.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9435" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ebpf.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.ebpf.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9435 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ebpf.group

Group under which the ebpf exporter shall be run. Type: string Default: "ebpf-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ebpf.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ebpf.names

List of eBPF programs to load Type: list of string Default: [ ] Example: [ "timers" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ebpf.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ebpf.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9435 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ebpf.user

User name under which the ebpf exporter shall be run. Type: string Default: "ebpf-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
