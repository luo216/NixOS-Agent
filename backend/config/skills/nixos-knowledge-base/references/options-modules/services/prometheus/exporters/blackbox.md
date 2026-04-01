---
module: services.prometheus.exporters.blackbox
option_count: 11
source: options.html
---

# services.prometheus.exporters.blackbox

## services.prometheus.exporters.blackbox.enable

Whether to enable the prometheus blackbox exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.blackbox.enableConfigCheck

Whether to run a correctness check for the configuration file. This depends on the configuration file residing in the nix-store. Paths passed as string will be copied to the store. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.blackbox.configFile

Path to configuration file. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.blackbox.extraFlags

Extra commandline options to pass to the blackbox exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.blackbox.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.blackbox.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9115" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.blackbox.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.blackbox.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9115 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.blackbox.group

Group under which the blackbox exporter shall be run. Type: string Default: "blackbox-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.blackbox.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.blackbox.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.blackbox.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9115 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.blackbox.user

User name under which the blackbox exporter shall be run. Type: string Default: "blackbox-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
