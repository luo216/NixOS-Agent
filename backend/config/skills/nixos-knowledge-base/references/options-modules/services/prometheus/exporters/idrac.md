---
module: services.prometheus.exporters.idrac
option_count: 11
source: options.html
---

# services.prometheus.exporters.idrac

## services.prometheus.exporters.idrac.enable

Whether to enable the prometheus idrac exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.idrac.configuration

Configuration for iDRAC exporter, as a nix attribute set. Configuration reference: https://github.com/mrlhansen/idrac_exporter/#configuration Mutually exclusive with configurationPath option. Type: null or (attribute set) Default: null Example: { hosts = { default = { password = "password"; username = "username"; }; }; metrics = { memory = true; power = true; sel = true; sensors = true; storage = true; system = true; }; retries = 1; timeout = 10; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.idrac.configurationPath

Path to the service’s config file. This path can either be a computed path in /nix/store or a path in the local filesystem. The config file should NOT be stored in /nix/store as it will contain passwords and/or keys in plain text. Mutually exclusive with configuration option. Configuration reference: https://github.com/mrlhansen/idrac_exporter/#configuration Type: null or absolute path Default: null Example: "/etc/prometheus-idrac-exporter/idrac.yml" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.idrac.extraFlags

Extra commandline options to pass to the idrac exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.idrac.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.idrac.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9348" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.idrac.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.idrac.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9348 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.idrac.group

Group under which the idrac exporter shall be run. Type: string Default: "idrac-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.idrac.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.idrac.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.idrac.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9348 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.idrac.user

User name under which the idrac exporter shall be run. Type: string Default: "idrac-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
