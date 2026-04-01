---
module: services.prometheus.exporters.node-cert
option_count: 13
source: options.html
---

# services.prometheus.exporters.node-cert

## services.prometheus.exporters.node-cert.enable

Whether to enable the prometheus node-cert exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.excludeGlobs

List files matching a pattern to include. Uses Go blob pattern. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.excludePaths

List of paths to exclute from searching for SSL certificates. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.extraFlags

Extra commandline options to pass to the node-cert exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.node-cert.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9141" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.node-cert.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9141 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.group

Group under which the node-cert exporter shall be run. Type: string Default: "node-cert-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.includeGlobs

List files matching a pattern to include. Uses Go blob pattern. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.paths

List of paths to search for SSL certificates. Type: list of string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9141 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.node-cert.user

User owning the certs. Type: string Default: "acme" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
