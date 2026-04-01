---
module: services.prometheus.exporters.storagebox
option_count: 11
source: options.html
---

# services.prometheus.exporters.storagebox

## services.prometheus.exporters.storagebox.enable

Whether to enable the prometheus storagebox exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.storagebox.package

The prometheus-storagebox-exporter package to use. Type: package Default: pkgs.prometheus-storagebox-exporter Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.storagebox.extraFlags

Extra commandline options to pass to the storagebox exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.storagebox.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.storagebox.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9509" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.storagebox.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.storagebox.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9509 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.storagebox.group

Group under which the storagebox exporter shall be run. Type: string Default: "storagebox-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.storagebox.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.storagebox.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.storagebox.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9509 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.storagebox.tokenFile

File that contains the Hetzner API token to use. Type: absolute path not in the Nix store Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.storagebox.user

User name under which the storagebox exporter shall be run. Type: string Default: "storagebox-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
