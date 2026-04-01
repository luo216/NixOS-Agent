---
module: services.prometheus.alertmanager
option_count: 14
source: options.html
---

# services.prometheus.alertmanager

## services.prometheus.alertmanager.enable

Whether to enable Prometheus Alertmanager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.package

The prometheus-alertmanager package to use. Type: package Default: pkgs.prometheus-alertmanager Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.checkConfig

Check configuration with amtool check-config. The call to amtool is subject to sandboxing by Nix. If you use credentials stored in external files (environmentFile, etc), they will not be visible to amtool and it will report errors, despite a correct configuration. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.clusterPeers

Initial peers for HA cluster. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.configText

Alertmanager configuration as YAML text. If non-null, this option defines the text that is written to alertmanager.yml. If null, the contents of alertmanager.yml is generated from the structured config options. The contents of the resulting config file are processed using envsubst. $ needs to be escaped as $$ to be preserved. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.configuration

Alertmanager configuration as nix attribute set. The contents of the resulting config file are processed using envsubst. $ needs to be escaped as $$ to be preserved. Type: null or (attribute set) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.environmentFile

File to load as environment file. Environment variables from this file will be interpolated into the config file using envsubst with this syntax: $ENVIRONMENT ${VARIABLE} Type: null or absolute path Default: null Example: "/root/alertmanager.env" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.extraFlags

Extra commandline options when launching the Alertmanager. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.listenAddress

Address to listen on for the web interface and API. Empty string will listen on all interfaces. “localhost” will listen on 127.0.0.1 (but not ::1). Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.logFormat

If set use a syslog logger or JSON logging. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.logLevel

Only log messages with the given severity or above. Type: one of “debug”, “info”, “warn”, “error”, “fatal” Default: "warn" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.port

Port to listen on for the web interface and API. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9093 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>

## services.prometheus.alertmanager.webExternalUrl

The URL under which Alertmanager is externally reachable (for example, if Alertmanager is served via a reverse proxy). Used for generating relative and absolute links back to Alertmanager itself. If the URL has a path portion, it will be used to prefix all HTTP endoints served by Alertmanager. If omitted, relevant URL components will be derived automatically. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager.nix>
