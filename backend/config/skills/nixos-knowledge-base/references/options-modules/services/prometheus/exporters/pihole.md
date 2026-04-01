---
module: services.prometheus.exporters.pihole
option_count: 15
source: options.html
---

# services.prometheus.exporters.pihole

## services.prometheus.exporters.pihole.enable

Whether to enable the prometheus pihole exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.apiToken

Pi-Hole API token which can be used instead of a password Type: string Default: "" Example: "580a770cb40511eb85290242ac130003580a770cb40511eb85290242ac130003" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.extraFlags

Extra commandline options to pass to the pihole exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.pihole.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9617" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.pihole.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9617 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.group

Group under which the pihole exporter shall be run. Type: string Default: "pihole-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.password

The password to login into Pi-Hole. An api token can be used instead. Type: string Default: "" Example: "password" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.piholeHostname

Hostname or address where to find the Pi-Hole webinterface Type: string Default: "pihole" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.piholePort

The port Pi-Hole webinterface is reachable on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 80 Example: 443 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9617 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.protocol

The protocol which is used to connect to Pi-Hole Type: one of “http”, “https” Default: "http" Example: "https" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.timeout

Controls the timeout to connect to a Pi-Hole instance Type: string Default: "5s" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pihole.user

User name under which the pihole exporter shall be run. Type: string Default: "pihole-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
