---
module: services.prometheus.exporters.fritzbox
option_count: 11
source: options.html
---

# services.prometheus.exporters.fritzbox

## services.prometheus.exporters.fritzbox.enable

Whether to enable the prometheus fritzbox exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritzbox.extraFlags

Extra commandline options to pass to the fritzbox exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritzbox.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.fritzbox.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9133" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritzbox.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.fritzbox.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9133 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritzbox.gatewayAddress

The hostname or IP of the FRITZ!Box. Type: string Default: "fritz.box" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritzbox.gatewayPort

The port of the FRITZ!Box UPnP service. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 49000 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritzbox.group

Group under which the fritzbox exporter shall be run. Type: string Default: "fritzbox-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritzbox.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritzbox.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritzbox.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9133 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritzbox.user

User name under which the fritzbox exporter shall be run. Type: string Default: "fritzbox-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
