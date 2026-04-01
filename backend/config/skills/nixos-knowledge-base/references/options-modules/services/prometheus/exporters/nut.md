---
module: services.prometheus.exporters.nut
option_count: 13
source: options.html
---

# services.prometheus.exporters.nut

## services.prometheus.exporters.nut.enable

Whether to enable the prometheus nut exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.extraFlags

Extra commandline options to pass to the nut exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.nut.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9199" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.nut.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9199 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.group

Group under which the nut exporter shall be run. Type: string Default: "nut-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.nutServer

Hostname or address of the NUT server Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.nutUser

The user to log in into NUT server. If set, passwordPath should also be set. Default NUT configs usually permit reading variables without authentication. Type: string Default: "" Example: "nut" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.nutVariables

List of NUT variable names to monitor. If no variables are set, all numeric variables will be exported automatically. See the upstream docs for more information. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.passwordPath

A run-time path to the nutUser password file, which should be provisioned outside of Nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9199 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nut.user

User name under which the nut exporter shall be run. Type: string Default: "nut-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
