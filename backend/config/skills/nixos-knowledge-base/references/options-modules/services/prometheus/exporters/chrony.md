---
module: services.prometheus.exporters.chrony
option_count: 12
source: options.html
---

# services.prometheus.exporters.chrony

## services.prometheus.exporters.chrony.enable

Whether to enable the prometheus chrony exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.chrony.enabledCollectors

Collectors to enable. Currently all collectors are enabled by default. Type: list of string Default: [ "tracking" "sources" "sources.with-ntpdata" "serverstats" "dns-lookups" ] Example: [ "dns-lookups" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.chrony.chronyServerAddress

ChronyServerAddress of the chrony server side command port. (Not enabled by default.) Defaults to the local unix socket. Type: string Default: "unix:///run/chrony/chronyd.sock" Example: [ "192.82.0.1:323" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.chrony.disabledCollectors

Collectors to disable which are enabled by default. Disable sources.with-ntpdata for network scraper. Option requires unix socket. Type: list of string Default: [ ] Example: [ "sources.with-ntpdata" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.chrony.extraFlags

Extra commandline options to pass to the chrony exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.chrony.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.chrony.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9123" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.chrony.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.chrony.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9123 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.chrony.group

Group under which the chrony exporter shall be run. This allows the exporter to talk to chrony using a unix socket, which is owned by chrony group. The service startup with the default group chrony will fail without local chrony instance. Type: string Default: "chrony" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.chrony.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.chrony.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.chrony.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9123 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.chrony.user

User name under which the chrony exporter shall be run. This allows the exporter to talk to chrony using a unix socket, which is owned by chrony. The exporter startup with the default user chrony will fail without local chrony instance. Type: string Default: "chrony" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
