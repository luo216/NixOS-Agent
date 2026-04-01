---
module: services.prometheus.exporters.v2ray
option_count: 10
source: options.html
---

# services.prometheus.exporters.v2ray

## services.prometheus.exporters.v2ray.enable

Whether to enable the prometheus v2ray exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.v2ray.extraFlags

Extra commandline options to pass to the v2ray exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.v2ray.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.v2ray.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9299" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.v2ray.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.v2ray.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9299 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.v2ray.group

Group under which the v2ray exporter shall be run. Type: string Default: "v2ray-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.v2ray.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.v2ray.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.v2ray.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9299 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.v2ray.user

User name under which the v2ray exporter shall be run. Type: string Default: "v2ray-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.v2ray.v2rayEndpoint

v2ray grpc api endpoint Type: string Default: "127.0.0.1:54321" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
