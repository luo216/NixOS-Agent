---
module: services.prometheus.exporters.junos-czerwonk
option_count: 13
source: options.html
---

# services.prometheus.exporters.junos-czerwonk

## services.prometheus.exporters.junos-czerwonk.enable

Whether to enable the prometheus junos-czerwonk exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.configuration

JunOS exporter configuration as nix attribute set. Mutually exclusive with the configurationFile option. Type: null or (attribute set) Default: null Example: { devices = [ { host = "router1"; key_file = "/path/to/key"; } ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.configurationFile

Specify the JunOS exporter configuration file to use. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.environmentFile

File containing env-vars to be substituted into the exporter’s config. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.extraFlags

Extra commandline options to pass to the junos-czerwonk exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.junos-czerwonk.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9326" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.junos-czerwonk.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9326 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.group

Group under which the junos-czerwonk exporter shall be run. Type: string Default: "junos-czerwonk-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9326 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.telemetryPath

Path under which to expose metrics. Type: string Default: "/metrics" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.junos-czerwonk.user

User name under which the junos-czerwonk exporter shall be run. Type: string Default: "junos-czerwonk-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
