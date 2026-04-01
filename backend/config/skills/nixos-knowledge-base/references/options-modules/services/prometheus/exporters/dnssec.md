---
module: services.prometheus.exporters.dnssec
option_count: 12
source: options.html
---

# services.prometheus.exporters.dnssec

## services.prometheus.exporters.dnssec.enable

Whether to enable the prometheus dnssec exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnssec.configuration

dnssec exporter configuration as nix attribute set. See https://github.com/chrj/prometheus-dnssec-exporter/blob/master/README.md for the description of the configuration file format. Type: null or (attribute set) Default: null Example: { records = [ { zone = "ietf.org"; record = "@"; type = "SOA"; } { zone = "verisigninc.com"; record = "@"; type = "SOA"; } ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnssec.extraFlags

Extra commandline options when launching Prometheus. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnssec.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.dnssec.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9204" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnssec.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.dnssec.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9204 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnssec.group

Group under which the dnssec exporter shall be run. Type: string Default: "dnssec-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnssec.listenAddress

Listen address as host IP and port definition. Type: null or string Default: null Example: ":9204" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnssec.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnssec.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9204 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnssec.resolvers

DNSSEC capable resolver to be used for the check. Type: list of string Default: [ ] Example: [ "0.0.0.0:53" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnssec.timeout

DNS request timeout duration. Type: null or string Default: null Example: "10s" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dnssec.user

User name under which the dnssec exporter shall be run. Type: string Default: "dnssec-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
