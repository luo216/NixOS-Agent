---
module: services.prometheus.exporters.snmp
option_count: 15
source: options.html
---

# services.prometheus.exporters.snmp

## services.prometheus.exporters.snmp.enable

Whether to enable the prometheus snmp exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.enableConfigCheck

Whether to run a correctness check for the configuration file. This depends on the configuration file residing in the nix-store. Paths passed as string will be copied to the store. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.configuration

Snmp exporter configuration as nix attribute set. Mutually exclusive with ‘configurationPath’ option. Type: null or (attribute set) Default: null Example: { auths = { public_v2 = { community = "public"; version = 2; }; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.configurationPath

Path to a snmp exporter configuration file. Mutually exclusive with ‘configuration’ option. Type: null or absolute path Default: null Example: ./snmp.yml Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.environmentFile

EnvironmentFile as defined in systemd.exec(5). Secrets may be passed to the service without adding them to the world-readable Nix store, by specifying placeholder variables as the option value in Nix and setting these variables accordingly in the environment file. Environment variables from this file will be interpolated into the config file using envsubst with this syntax: $ENVIRONMENT ${VARIABLE} For variables to use see Prometheus Configuration. If the file path is set to this option, the parameter --config.expand-environment-variables is implicitly added to ExecStart. Note that this file needs to be available on the host on which this exporter is running. Type: null or absolute path Default: null Example: "/root/prometheus-snmp-exporter.env" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.extraFlags

Extra commandline options to pass to the snmp exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.snmp.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9116" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.snmp.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9116 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.group

Group under which the snmp exporter shall be run. Type: string Default: "snmp-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.logFormat

Output format of log messages. Type: one of “logfmt”, “json” Default: "logfmt" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.logLevel

Only log messages with the given severity or above. Type: one of “debug”, “info”, “warn”, “error” Default: "info" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9116 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.snmp.user

User name under which the snmp exporter shall be run. Type: string Default: "snmp-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
