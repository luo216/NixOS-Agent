---
module: services.prometheus.exporters.fastly
option_count: 11
source: options.html
---

# services.prometheus.exporters.fastly

## services.prometheus.exporters.fastly.enable

Whether to enable the prometheus fastly exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fastly.configFile

Path to a fastly-exporter configuration file. Example one can be generated with fastly-exporter --config-file-example. Type: null or absolute path Default: null Example: "./fastly-exporter-config.txt" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fastly.environmentFile

An environment file containg at least the FASTLY_API_TOKEN= environment variable. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fastly.extraFlags

Extra commandline options to pass to the fastly exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fastly.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.fastly.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9118" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fastly.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.fastly.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9118 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fastly.group

Group under which the fastly exporter shall be run. Type: string Default: "fastly-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fastly.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fastly.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fastly.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9118 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fastly.user

User name under which the fastly exporter shall be run. Type: string Default: "fastly-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
