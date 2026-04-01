---
module: services.prometheus.exporters.imap-mailstat
option_count: 12
source: options.html
---

# services.prometheus.exporters.imap-mailstat

## services.prometheus.exporters.imap-mailstat.enable

Whether to enable the prometheus imap-mailstat exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.accounts

Accounts to monitor Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.configurationFile

File containing the configuration Type: absolute path Example: "/path/to/config-file" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.extraFlags

Extra commandline options to pass to the imap-mailstat exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.imap-mailstat.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 8081" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.imap-mailstat.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 8081 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.group

Group under which the imap-mailstat exporter shall be run. Type: string Default: "imap-mailstat-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.oldestUnseenDate

Enable metric with timestamp of oldest unseen mail Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8081 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.imap-mailstat.user

User name under which the imap-mailstat exporter shall be run. Type: string Default: "imap-mailstat-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
