---
module: services.prometheus.exporters.deluge
option_count: 15
source: options.html
---

# services.prometheus.exporters.deluge

## services.prometheus.exporters.deluge.enable

Whether to enable the prometheus deluge exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.delugeHost

Hostname where deluge server is running. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.delugePassword

Password to connect to deluge server. This stores the password unencrypted in the nix store and is thus considered unsafe. Prefer using the delugePasswordFile option. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.delugePasswordFile

File containing the password to connect to deluge server. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.delugePort

Port where deluge server is listening. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 58846 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.delugeUser

User to connect to deluge server. Type: string Default: "localclient" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.exportPerTorrentMetrics

Enable per-torrent metrics. This may significantly increase the number of time series depending on the number of torrents in your Deluge instance. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.extraFlags

Extra commandline options to pass to the deluge exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.deluge.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9354" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.deluge.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9354 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.group

Group under which the deluge exporter shall be run. Type: string Default: "deluge-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9354 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.deluge.user

User name under which the deluge exporter shall be run. Type: string Default: "deluge-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
