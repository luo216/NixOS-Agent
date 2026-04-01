---
module: services.prometheus.exporters.tailscale
option_count: 11
source: options.html
---

# services.prometheus.exporters.tailscale

## services.prometheus.exporters.tailscale.enable

Whether to enable the prometheus tailscale exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tailscale.package

The prometheus-tailscale-exporter package to use. Type: package Default: pkgs.prometheus-tailscale-exporter Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tailscale.environmentFile

Environment file containg at least the TAILSCALE_TAILNET, TAILSCALE_OAUTH_CLIENT_ID, and TAILSCALE_OAUTH_CLIENT_SECRET environment variables. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tailscale.extraFlags

Extra commandline options to pass to the tailscale exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tailscale.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.tailscale.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9250" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tailscale.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.tailscale.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9250 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tailscale.group

Group under which the tailscale exporter shall be run. Type: string Default: "tailscale-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tailscale.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tailscale.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tailscale.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9250 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.tailscale.user

User name under which the tailscale exporter shall be run. Type: string Default: "tailscale-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
