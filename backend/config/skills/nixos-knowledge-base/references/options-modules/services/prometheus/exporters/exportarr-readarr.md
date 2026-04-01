---
module: services.prometheus.exporters.exportarr-readarr
option_count: 13
source: options.html
---

# services.prometheus.exporters.exportarr-readarr

## services.prometheus.exporters.exportarr-readarr.enable

Whether to enable the prometheus exportarr-readarr exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.package

The exportarr package to use. Type: package Default: pkgs.exportarr Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.apiKeyFile

File containing the api-key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.environment

See the configuration guide for available options. Type: attribute set of string Default: { } Example: { PROWLARR__BACKFILL = true; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.extraFlags

Extra commandline options to pass to the exportarr-readarr exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.exportarr-readarr.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9708" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.exportarr-readarr.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9708 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.group

Group under which the exportarr-readarr exporter shall be run. Type: string Default: "exportarr-readarr-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9708 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.url

The full URL to Sonarr, Radarr, or Lidarr. Type: string Default: "http://127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.exportarr-readarr.user

User name under which the exportarr-readarr exporter shall be run. Type: string Default: "exportarr-readarr-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
