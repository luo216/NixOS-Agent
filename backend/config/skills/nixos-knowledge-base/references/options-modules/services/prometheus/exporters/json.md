---
module: services.prometheus.exporters.json
option_count: 10
source: options.html
---

# services.prometheus.exporters.json

## services.prometheus.exporters.json.enable

Whether to enable the prometheus json exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.json.configFile

Path to configuration file. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.json.extraFlags

Extra commandline options to pass to the json exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.json.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.json.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 7979" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.json.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.json.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 7979 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.json.group

Group under which the json exporter shall be run. Type: string Default: "json-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.json.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.json.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.json.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7979 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.json.user

User name under which the json exporter shall be run. Type: string Default: "json-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
