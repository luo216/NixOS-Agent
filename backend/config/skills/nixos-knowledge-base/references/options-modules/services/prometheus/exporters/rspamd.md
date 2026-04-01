---
module: services.prometheus.exporters.rspamd
option_count: 10
source: options.html
---

# services.prometheus.exporters.rspamd

## services.prometheus.exporters.rspamd.enable

Whether to enable the prometheus rspamd exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rspamd.extraFlags

Extra commandline options to pass to the rspamd exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rspamd.extraLabels

Set of labels added to each metric. Type: attribute set of string Default: { host = config.networking.hostName; } Example: { host = config.networking.hostName; custom_label = "some_value"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rspamd.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.rspamd.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 7980" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rspamd.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.rspamd.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 7980 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rspamd.group

Group under which the rspamd exporter shall be run. Type: string Default: "rspamd-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rspamd.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rspamd.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rspamd.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7980 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rspamd.user

User name under which the rspamd exporter shall be run. Type: string Default: "rspamd-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
