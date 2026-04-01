---
module: services.prometheus.exporters.py-air-control
option_count: 12
source: options.html
---

# services.prometheus.exporters.py-air-control

## services.prometheus.exporters.py-air-control.enable

Whether to enable the prometheus py-air-control exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.py-air-control.deviceHostname

The hostname of the air purification device from which to scrape the metrics. Type: string Example: "192.168.1.123" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.py-air-control.extraFlags

Extra commandline options to pass to the py-air-control exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.py-air-control.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.py-air-control.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9896" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.py-air-control.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.py-air-control.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9896 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.py-air-control.group

Group under which the py-air-control exporter shall be run. Type: string Default: "py-air-control-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.py-air-control.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.py-air-control.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.py-air-control.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9896 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.py-air-control.protocol

The protocol to use when communicating with the air purification device. Available: [http, coap, plain_coap] Type: string Default: "http" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.py-air-control.stateDir

Directory below /var/lib to store runtime data. This directory will be created automatically using systemd’s StateDirectory mechanism. Type: string Default: "prometheus-py-air-control-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.py-air-control.user

User name under which the py-air-control exporter shall be run. Type: string Default: "py-air-control-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
