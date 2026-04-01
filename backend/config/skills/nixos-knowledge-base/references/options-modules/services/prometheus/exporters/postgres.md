---
module: services.prometheus.exporters.postgres
option_count: 13
source: options.html
---

# services.prometheus.exporters.postgres

## services.prometheus.exporters.postgres.enable

Whether to enable the prometheus postgres exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.dataSourceName

Accepts PostgreSQL URI form and key=value form arguments. Type: string Default: "user=postgres database=postgres host=/run/postgresql sslmode=disable" Example: "postgresql://username:password@localhost:5432/postgres?sslmode=disable" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.environmentFile

Environment file as defined in systemd.exec(5). Secrets may be passed to the service without adding them to the world-readable Nix store, by specifying placeholder variables as the option value in Nix and setting these variables accordingly in the environment file. Environment variables from this file will be interpolated into the config file using envsubst with this syntax: $ENVIRONMENT ${VARIABLE} The main use is to set the DATA_SOURCE_NAME that contains the postgres password note that contents from this file will override dataSourceName if you have set it from nix. # Content of the environment file DATA_SOURCE_NAME=postgresql://username:password@localhost:5432/postgres?sslmode=disable Note that this file needs to be available on the host on which this exporter is running. Type: null or absolute path Default: null Example: "/root/prometheus-postgres-exporter.env" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.extraFlags

Extra commandline options to pass to the postgres exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.postgres.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9187" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.postgres.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9187 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.group

Group under which the postgres exporter shall be run. Type: string Default: "postgres-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9187 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.runAsLocalSuperUser

Whether to run the exporter as the local ‘postgres’ super user. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.telemetryPath

Path under which to expose metrics. Type: string Default: "/metrics" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.postgres.user

User name under which the postgres exporter shall be run. Type: string Default: "postgres-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
