---
module: services.zabbixWeb.server
option_count: 2
source: options.html
---

# services.zabbixWeb.server

## services.zabbixWeb.server.address

The IP address or hostname of the Zabbix server to connect to. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.server.port

The port of the Zabbix server to connect to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10051 Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>
