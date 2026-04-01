---
module: services.prometheus.exporters.dnsmasq
option_count: 11
source: options.html
---

# services.prometheus.exporters.dnsmasq

## services.prometheus.exporters.dnsmasq.enable

Whether to enable the prometheus dnsmasq exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnsmasq.dnsmasqListenAddress

Address on which dnsmasq listens. Type: string Default: "localhost:53" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnsmasq.extraFlags

Extra commandline options to pass to the dnsmasq exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnsmasq.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.dnsmasq.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9153" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnsmasq.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.dnsmasq.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9153 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnsmasq.group

Group under which the dnsmasq exporter shall be run. Type: string Default: "dnsmasq-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnsmasq.leasesPath

Path to the dnsmasq.leases file. Type: absolute path Default: "/var/lib/dnsmasq/dnsmasq.leases" Example: "/var/lib/misc/dnsmasq.leases" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnsmasq.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnsmasq.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnsmasq.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9153 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnsmasq.user

User name under which the dnsmasq exporter shall be run. Type: string Default: "dnsmasq-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
