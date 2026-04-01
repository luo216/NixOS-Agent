---
module: services.grafana.settings.database
option_count: 21
source: options.html
---

# services.grafana.settings.database

## services.grafana.settings.database.ca_cert_path

The path to the CA certificate to use. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.cache_mode

For sqlite3 only. Shared cache setting used for connecting to the database. Type: one of “private”, “shared” Default: "private" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.client_cert_path

The path to the client cert. Only if server requires client authentication. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.client_key_path

The path to the client key. Only if server requires client authentication. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.conn_max_lifetime

Sets the maximum amount of time a connection may be reused. The default is 14400 (which means 14400 seconds or 4 hours). For MySQL, this setting should be shorter than the wait_timeout variable. Type: signed integer Default: 14400 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.host

Only applicable to MySQL or Postgres. Includes IP or hostname and port or in case of Unix sockets the path to it. For example, for MySQL running on the same host as Grafana: host = "127.0.0.1:3306" or with Unix sockets: host = "/var/run/mysqld/mysqld.sock" Type: string Default: "127.0.0.1:3306" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.isolation_level

Only the MySQL driver supports isolation levels in Grafana. In case the value is empty, the driver’s default isolation level is applied. Type: null or one of “READ-UNCOMMITTED”, “READ-COMMITTED”, “REPEATABLE-READ”, “SERIALIZABLE” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.locking_attempt_timeout_sec

For mysql, if the migrationLocking feature toggle is set, specify the time (in seconds) to wait before failing to lock the database for the migrations. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.log_queries

Set to true to log the sql calls and execution times Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.max_idle_conn

The maximum number of connections in the idle connection pool. Type: signed integer Default: 2 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.max_open_conn

The maximum number of open connections to the database. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.name

The name of the Grafana database. Type: string Default: "grafana" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.password

The database user’s password (not applicable for sqlite3). Please note that the contents of this option will end up in a world-readable Nix store. Use the file provider pointing at a reasonably secured file in the local filesystem to work around that. Look at the documentation for details: https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#file-provider Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.path

Only applicable to sqlite3 database. The file path where the database will be stored. Type: absolute path Default: "${config.services.grafana.dataDir}/data/grafana.db" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.query_retries

This setting applies to sqlite3 only and controls the number of times the system retries a query when the database is locked. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.server_cert_name

The common name field of the certificate used by the mysql or postgres server. Not necessary if ssl_mode is set to skip-verify. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.ssl_mode

For Postgres, use either disable, require or verify-full. For MySQL, use either true, false, or skip-verify. Type: one of “disable”, “require”, “verify-full”, “true”, “false”, “skip-verify” Default: "disable" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.transaction_retries

This setting applies to sqlite3 only and controls the number of times the system retries a transaction when the database is locked. Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.type

Database type. Type: one of “mysql”, “sqlite3”, “postgres” Default: "sqlite3" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.user

The database user (not applicable for sqlite3). Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.database.wal

For sqlite3 only. Setting to enable/disable Write-Ahead Logging. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
