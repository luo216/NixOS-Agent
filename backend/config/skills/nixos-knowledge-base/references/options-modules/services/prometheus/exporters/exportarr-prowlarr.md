---
module: services.prometheus.exporters.exportarr-prowlarr
option_count: 13
source: options.html
---

# services.prometheus.exporters.exportarr-prowlarr

## services.prometheus.exporters.exportarr-prowlarr.enable

Whether to enable the prometheus exportarr-prowlarr exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.package

The exportarr package to use. Type: package Default: pkgs.exportarr Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.apiKeyFile

File containing the api-key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.environment

See the configuration guide for available options. Type: attribute set of string Default: { } Example: { PROWLARR__BACKFILL = true; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.extraFlags

Extra commandline options to pass to the exportarr-prowlarr exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.exportarr-prowlarr.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9708" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.exportarr-prowlarr.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9708 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.group

Group under which the exportarr-prowlarr exporter shall be run. Type: string Default: "exportarr-prowlarr-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9708 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.url

The full URL to Sonarr, Radarr, or Lidarr. Type: string Default: "http://127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-prowlarr.user

User name under which the exportarr-prowlarr exporter shall be run. Type: string Default: "exportarr-prowlarr-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
