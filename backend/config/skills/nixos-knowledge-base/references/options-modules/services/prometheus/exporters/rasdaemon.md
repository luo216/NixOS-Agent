---
module: services.prometheus.exporters.rasdaemon
option_count: 11
source: options.html
---

# services.prometheus.exporters.rasdaemon

## services.prometheus.exporters.rasdaemon.enable

Whether to enable the prometheus rasdaemon exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rasdaemon.enabledCollectors

List of error types to collect from the event database. Type: list of (one of “aer”, “mce”, “mc”, “extlog”, “devlink”, “disk”) Default: [ "aer" "mce" "mc" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rasdaemon.databasePath

Path to the RAS daemon machine check event database. Type: absolute path Default: "/var/lib/rasdaemon/ras-mc_event.db" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rasdaemon.extraFlags

Extra commandline options to pass to the rasdaemon exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rasdaemon.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.rasdaemon.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 10029" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rasdaemon.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.rasdaemon.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 10029 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rasdaemon.group

Group under which the rasdaemon exporter shall be run. Type: string Default: "rasdaemon-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rasdaemon.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rasdaemon.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rasdaemon.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10029 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.rasdaemon.user

User name under which the rasdaemon exporter shall be run. Type: string Default: "rasdaemon-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
