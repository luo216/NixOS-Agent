---
module: services.prometheus.exporters.jitsi
option_count: 11
source: options.html
---

# services.prometheus.exporters.jitsi

## services.prometheus.exporters.jitsi.enable

Whether to enable the prometheus jitsi exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.jitsi.extraFlags

Extra commandline options to pass to the jitsi exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.jitsi.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.jitsi.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9700" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.jitsi.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.jitsi.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9700 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.jitsi.group

Group under which the jitsi exporter shall be run. Type: string Default: "jitsi-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.jitsi.interval

How often to scrape new data Type: string Default: "30s" Example: "1min" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.jitsi.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.jitsi.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.jitsi.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9700 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.jitsi.url

Jitsi Videobridge metrics URL to monitor. This is usually /colibri/stats on port 8080 of the jitsi videobridge host. Type: string Default: "http://localhost:8080/colibri/stats" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.jitsi.user

User name under which the jitsi exporter shall be run. Type: string Default: "jitsi-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
