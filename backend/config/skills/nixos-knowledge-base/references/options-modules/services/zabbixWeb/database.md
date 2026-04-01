---
module: services.zabbixWeb.database
option_count: 7
source: options.html
---

# services.zabbixWeb.database

## services.zabbixWeb.database.host

Database host address. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.database.name

Database name. Type: string Default: "zabbix" Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.database.passwordFile

A file containing the password corresponding to database.user. Type: null or absolute path Default: null Example: "/run/keys/zabbix-dbpassword" Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.database.port

Database host port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: if config.services.zabbixWeb.database.type == "mysql" then config.services.mysql.port else if config.services.zabbixWeb.database.type == "pgsql" then config.services.postgresql.settings.port else 1521 Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.database.socket

Path to the unix socket file to use for authentication. Type: null or absolute path Default: null Example: "/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.database.type

Database engine to use. Type: one of “mysql”, “pgsql”, “oracle” Default: "pgsql" Example: "mysql" Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.database.user

Database user. Type: string Default: "zabbix" Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>
