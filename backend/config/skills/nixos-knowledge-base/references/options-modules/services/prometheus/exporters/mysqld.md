---
module: services.prometheus.exporters.mysqld
option_count: 12
source: options.html
---

# services.prometheus.exporters.mysqld

## services.prometheus.exporters.mysqld.enable

Whether to enable the prometheus mysqld exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mysqld.configFile

Path to the services config file. See https://github.com/prometheus/mysqld_exporter#running for more information about the available options. ::: {.warn} Please do not store this file in the nix store if you choose to include any credentials here, as it would be world-readable. ::: Type: absolute path Example: "/var/lib/prometheus-mysqld-exporter.cnf" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mysqld.extraFlags

Extra commandline options to pass to the mysqld exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mysqld.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.mysqld.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9104" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mysqld.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.mysqld.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9104 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mysqld.group

Group under which the mysqld exporter shall be run. Type: string Default: "mysqld-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mysqld.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mysqld.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mysqld.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9104 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mysqld.runAsLocalSuperUser

Whether to run the exporter as services.mysql.user. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mysqld.telemetryPath

Path under which to expose metrics. Type: string Default: "/metrics" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mysqld.user

User name under which the mysqld exporter shall be run. Type: string Default: "mysqld-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
