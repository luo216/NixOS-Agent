---
module: services.zabbixProxy.database
option_count: 8
source: options.html
---

# services.zabbixProxy.database

## services.zabbixProxy.database.createLocally

Whether to create a local database automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.database.host

Database host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.database.name

Database name. Type: string Default: zabbix Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/zabbix-dbpassword" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if config.services.zabbixProxy.database.type == "mysql" then config.services.mysql.port else config.services.postgresql.settings.port Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.database.socket

Path to the unix socket file to use for authentication. Type: null or absolute path Default: null Example: "/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.database.type

Database engine to use. Type: one of “mysql”, “pgsql”, “sqlite” Default: "pgsql" Example: "mysql" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.database.user

Database user. Type: string Default: "zabbix" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>
