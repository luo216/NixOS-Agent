---
module: services.prometheus.exporters.pgbouncer
option_count: 18
source: options.html
---

# services.prometheus.exporters.pgbouncer

## services.prometheus.exporters.pgbouncer.enable

Whether to enable the prometheus pgbouncer exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.package

The prometheus-pgbouncer-exporter package to use. Type: package Default: pkgs.prometheus-pgbouncer-exporter Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.connectionEnvFile

File that must contain the environment variable PGBOUNCER_EXPORTER_CONNECTION_STRING which is set to the connection string used by pgbouncer. I.e. the format is supposed to look like this: PGBOUNCER_EXPORTER_CONNECTION_STRING="postgres://admin@localhost:6432/pgbouncer?sslmode=require" NOTE: You MUST keep pgbouncer as database name (special internal db)! NOTE: services.pgbouncer.settings.pgbouncer.ignore_startup_parameters MUST contain “extra_float_digits”. Mutually exclusive with services.prometheus.exporters.pgbouncer.connectionString. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.connectionString

Connection string for accessing pgBouncer. NOTE: You MUST keep pgbouncer as database name (special internal db)!!! NOTE: ignore_startup_parameters MUST contain “extra_float_digits”. NOTE: Admin user (with password or passwordless) MUST exist in the auth_file if auth_type other than “any” is used. WARNING: this secret is stored in the world-readable Nix store! Use services.prometheus.exporters.pgbouncer.connectionEnvFile if the URL contains a secret. Type: null or string Default: null Example: "postgres://admin:@localhost:6432/pgbouncer?sslmode=require" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.extraFlags

Extra commandline options when launching Prometheus. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.pgbouncer.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9127" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.pgbouncer.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9127 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.group

Group under which the pgbouncer exporter shall be run. Type: string Default: "pgbouncer-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.logFormat

Output format of log messages. One of: [logfmt, json] Type: one of “logfmt”, “json” Default: "logfmt" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.logLevel

Only log messages with the given severity or above. Type: one of “debug”, “info”, “warn”, “error” Default: "info" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.pidFile

Path to PgBouncer pid file. If provided, the standard process metrics get exported for the PgBouncer process, prefixed with ‘pgbouncer_process_…’. The pgbouncer_process exporter needs to have read access to files owned by the PgBouncer process. Depends on the availability of /proc. https://prometheus.io/docs/instrumenting/writing_clientlibs/#process-metrics. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9127 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.telemetryPath

Path under which to expose metrics. Type: string Default: "/metrics" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.user

User name under which the pgbouncer exporter shall be run. Type: string Default: "pgbouncer-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.webConfigFile

Path to configuration file that can enable TLS or authentication. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.pgbouncer.webSystemdSocket

Use systemd socket activation listeners instead of port listeners (Linux only). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
