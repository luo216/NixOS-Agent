---
module: services.prometheus.exporters.knot
option_count: 12
source: options.html
---

# services.prometheus.exporters.knot

## services.prometheus.exporters.knot.enable

Whether to enable the prometheus knot exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.knot.extraFlags

Extra commandline options to pass to the knot exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.knot.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.knot.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9433" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.knot.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.knot.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9433 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.knot.group

Group under which the knot exporter shall be run. Type: string Default: "knot-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.knot.knotLibraryPath

Path to the library of knot-dns. Type: null or string Default: null Example: "${pkgs.knot-dns.out}/lib/libknot.so" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.knot.knotSocketPath

Socket path of knotd(8). Type: string Default: "/run/knot/knot.sock" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.knot.knotSocketTimeout

Timeout in seconds. Type: positive integer, meaning >0 Default: 2000 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.knot.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.knot.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.knot.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9433 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.knot.user

User name under which the knot exporter shall be run. Type: string Default: "knot-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
