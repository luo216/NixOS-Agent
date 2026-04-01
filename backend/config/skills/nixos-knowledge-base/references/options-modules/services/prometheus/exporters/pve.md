---
module: services.prometheus.exporters.pve
option_count: 12
source: options.html
---

# services.prometheus.exporters.pve

## services.prometheus.exporters.pve.enable

Whether to enable the prometheus pve exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.package

The prometheus-pve-exporter package to use. Type: package Default: pkgs.prometheus-pve-exporter Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.configFile

Path to the service’s config file. This path can either be a computed path in /nix/store or a path in the local filesystem. The config file should NOT be stored in /nix/store as it will contain passwords and/or keys in plain text. If both configFile and environmentFile are provided, the configFile option will be ignored. Configuration reference: https://github.com/prometheus-pve/prometheus-pve-exporter/#authentication Type: null or absolute path Default: null Example: "/etc/prometheus-pve-exporter/pve.yml" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.environmentFile

Path to the service’s environment file. This path can either be a computed path in /nix/store or a path in the local filesystem. The environment file should NOT be stored in /nix/store as it contains passwords and/or keys in plain text. Environment reference: https://github.com/prometheus-pve/prometheus-pve-exporter#authentication Type: null or absolute path Default: null Example: "/etc/prometheus-pve-exporter/pve.env" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.extraFlags

Extra commandline options to pass to the pve exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.pve.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9221" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.pve.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9221 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.group

Group under which the pve exporter shall be run. Type: string Default: "pve-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9221 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pve.user

User name under which the pve exporter shall be run. Type: string Default: "pve-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
