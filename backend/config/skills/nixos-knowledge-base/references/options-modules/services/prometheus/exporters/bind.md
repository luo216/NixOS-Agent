---
module: services.prometheus.exporters.bind
option_count: 13
source: options.html
---

# services.prometheus.exporters.bind

## services.prometheus.exporters.bind.enable

Whether to enable the prometheus bind exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.bindGroups

List of statistics to collect. Available: [server, view, tasks] Type: list of (one of “server”, “view”, “tasks”) Default: [ "server" "view" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.bindTimeout

Timeout for trying to get stats from Bind. Type: string Default: "10s" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.bindURI

HTTP XML API address of an Bind server. Type: string Default: "http://localhost:8053/" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.bindVersion

BIND statistics version. Can be detected automatically. Type: one of “xml.v2”, “xml.v3”, “auto” Default: "auto" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.extraFlags

Extra commandline options to pass to the bind exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.bind.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9119" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.bind.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9119 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.group

Group under which the bind exporter shall be run. Type: string Default: "bind-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9119 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bind.user

User name under which the bind exporter shall be run. Type: string Default: "bind-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
