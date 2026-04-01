---
module: services.prometheus.exporters.klipper
option_count: 11
source: options.html
---

# services.prometheus.exporters.klipper

## services.prometheus.exporters.klipper.enable

Whether to enable the prometheus klipper exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.klipper.package

The prometheus-klipper-exporter package to use. Type: package Default: pkgs.prometheus-klipper-exporter Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.klipper.extraFlags

Extra commandline options to pass to the klipper exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.klipper.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.klipper.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9101" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.klipper.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.klipper.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9101 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.klipper.group

Group under which the klipper exporter shall be run. Type: string Default: "klipper-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.klipper.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.klipper.moonrakerApiKey

API Key to authenticate with the Moonraker APIs. Only needed if the host running the exporter is not a trusted client to Moonraker. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.klipper.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.klipper.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9101 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.klipper.user

User name under which the klipper exporter shall be run. Type: string Default: "klipper-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
