---
module: services.prometheus.exporters.tibber
option_count: 10
source: options.html
---

# services.prometheus.exporters.tibber

## services.prometheus.exporters.tibber.enable

Whether to enable the prometheus tibber exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tibber.apiTokenPath

Add here the path to your personal Tibber API Token (‘Bearer Token’) File. Get your personal Tibber API Token here: https://developer.tibber.com Do not share your personal plaintext Tibber API Token via github. (see: ryantm/agenix, mic92/sops) Type: absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tibber.extraFlags

Extra commandline options to pass to the tibber exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tibber.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.tibber.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9489" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tibber.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.tibber.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9489 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tibber.group

Group under which the tibber exporter shall be run. Type: string Default: "tibber-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tibber.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tibber.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tibber.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9489 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tibber.user

User name under which the tibber exporter shall be run. Type: string Default: "tibber-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
