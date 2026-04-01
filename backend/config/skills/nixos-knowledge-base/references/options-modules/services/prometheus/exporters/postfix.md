---
module: services.prometheus.exporters.postfix
option_count: 13
source: options.html
---

# services.prometheus.exporters.postfix

## services.prometheus.exporters.postfix.enable

Whether to enable the prometheus postfix exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.package

The prometheus-postfix-exporter package to use. Type: package Default: pkgs.prometheus-postfix-exporter Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.extraFlags

Extra commandline options to pass to the postfix exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.postfix.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9154" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.postfix.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9154 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.group

Group under which the postfix exporter shall be run. It should match the group that is allowed to access the showq socket in the queue/public/ directory. Defaults to services.postfix.setgidGroup when postfix is enabled. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.logfilePath

Path where Postfix writes log entries. This file will be truncated by this exporter! Type: absolute path Default: "/var/log/postfix_exporter_input.log" Example: "/var/log/mail.log" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9154 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.showqPath

Path where Postfix places its showq socket. Type: absolute path Default: "/var/lib/postfix/queue/public/showq" Example: "/var/spool/postfix/public/showq" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.telemetryPath

Path under which to expose metrics. Type: string Default: "/metrics" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postfix.user

User name under which the postfix exporter shall be run. Type: string Default: "postfix-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
