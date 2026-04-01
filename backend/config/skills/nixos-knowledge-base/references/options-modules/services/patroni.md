---
module: services.patroni
option_count: 16
source: options.html
---

# services.patroni

## services.patroni.enable

Whether to enable Patroni. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.dataDir

Folder where Patroni data will be written, this is where the pgpass password file will be written. Type: absolute path Default: "/var/lib/patroni" Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.environmentFiles

Environment variables made available to Patroni as files content, useful for providing secrets from files. Type: attribute set of (null or string or absolute path or package) Default: { } Example: { PATRONI_REPLICATION_PASSWORD = "/secret/file"; PATRONI_SUPERUSER_PASSWORD = "/secret/file"; } Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.group

The group for the service. If left as the default value this group will automatically be created, otherwise the sysadmin is responsible for ensuring the group exists. Type: string Default: "patroni" Example: "postgres" Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.name

The name of the host. Must be unique for the cluster. Type: string Example: "node1" Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.namespace

Path within the configuration store where Patroni will keep information about the cluster. Type: string Default: "/service" Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.nodeIp

IP address of this node. Type: string Example: "192.168.1.1" Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.otherNodesIps

IP addresses of the other nodes. Type: list of string Example: [ "192.168.1.2" "192.168.1.3" ] Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.postgresqlDataDir

The data directory for PostgreSQL. If left as the default value this directory will automatically be created before the PostgreSQL server starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "/var/lib/postgresql/${config.services.patroni.postgresqlPackage.psqlSchema}" Example: "/var/lib/postgresql/14" Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.postgresqlPackage

PostgreSQL package to use. Plugins can be enabled like this pkgs.postgresql_14.withPackages (p: [ p.pg_safeupdate p.postgis ]). Type: package Example: pkgs.postgresql_14 Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.postgresqlPort

The port on which PostgreSQL listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5432 Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.restApiPort

The port on Patroni’s REST api listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8008 Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.scope

Cluster name. Type: string Example: "cluster1" Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.settings

The primary patroni configuration. See the documentation for possible values. Secrets should be passed in by using the environmentFiles option. Type: YAML 1.1 value Default: { } Example: { bootstrap = { initdb = [ "encoding=UTF-8" "data-checksums" ]; }; postgresql = { parameters = { unix_socket_directories = "/tmp"; }; }; } Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.softwareWatchdog

This will configure Patroni to use the software watchdog built into the Linux kernel as described in the documentation. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>

## services.patroni.user

The user for the service. If left as the default value this user will automatically be created, otherwise the sysadmin is responsible for ensuring the user exists. Type: string Default: "patroni" Example: "postgres" Declared by: <nixpkgs/nixos/modules/services/cluster/patroni/default.nix>
