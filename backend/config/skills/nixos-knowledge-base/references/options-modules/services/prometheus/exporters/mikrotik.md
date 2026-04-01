---
module: services.prometheus.exporters.mikrotik
option_count: 11
source: options.html
---

# services.prometheus.exporters.mikrotik

## services.prometheus.exporters.mikrotik.enable

Whether to enable the prometheus mikrotik exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mikrotik.configFile

Path to a mikrotik exporter configuration file. Mutually exclusive with configuration option. Type: null or absolute path Default: null Example: ./mikrotik.yml Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mikrotik.configuration

Mikrotik exporter configuration as nix attribute set. Mutually exclusive with configFile option. See https://github.com/nshttpd/mikrotik-exporter/blob/master/README.md for the description of the configuration file format. Type: null or (attribute set) Default: null Example: { devices = [ { name = "my_router"; address = "10.10.0.1"; user = "prometheus"; password = "changeme"; } ]; features = { bgp = true; dhcp = true; routes = true; optics = true; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mikrotik.extraFlags

Extra commandline options to pass to the mikrotik exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mikrotik.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.mikrotik.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9436" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mikrotik.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.mikrotik.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9436 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mikrotik.group

Group under which the mikrotik exporter shall be run. Type: string Default: "mikrotik-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mikrotik.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mikrotik.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mikrotik.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9436 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mikrotik.user

User name under which the mikrotik exporter shall be run. Type: string Default: "mikrotik-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
