---
module: services.zabbixServer.database
option_count: 8
source: options.html
---

# services.zabbixServer.database

## services.zabbixServer.database.createLocally

Whether to create a local database automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.database.host

Database host address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.database.name

Database name. Type: string Default: "zabbix" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/zabbix-dbpassword" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if config.services.zabbixServer.database.type == "mysql" then config.services.mysql.port else config.services.postgresql.settings.port Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.database.socket

Path to the unix socket file to use for authentication. Type: null or absolute path Default: null Example: "/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.database.type

Database engine to use. Type: one of “mysql”, “pgsql” Default: "pgsql" Example: "mysql" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.database.user

Database user. Type: string Default: "zabbix" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>
