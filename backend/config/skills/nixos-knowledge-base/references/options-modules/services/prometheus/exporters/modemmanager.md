---
module: services.prometheus.exporters.modemmanager
option_count: 10
source: options.html
---

# services.prometheus.exporters.modemmanager

## services.prometheus.exporters.modemmanager.enable

Whether to enable the prometheus modemmanager exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.modemmanager.extraFlags

Extra commandline options to pass to the modemmanager exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.modemmanager.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.modemmanager.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9539" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.modemmanager.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.modemmanager.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9539 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.modemmanager.group

Group under which the modemmanager exporter shall be run. Type: string Default: "modemmanager-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.modemmanager.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.modemmanager.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.modemmanager.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9539 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.modemmanager.refreshRate

How frequently ModemManager will refresh the extended signal quality information for each modem. The duration should be specified in seconds (“5s”), minutes (“1m”), or hours (“1h”). Type: string Default: "5s" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.modemmanager.user

User name under which the modemmanager exporter shall be run. Type: string Default: "modemmanager-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
