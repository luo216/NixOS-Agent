---
module: services.zabbixServer.listen
option_count: 2
source: options.html
---

# services.zabbixServer.listen

## services.zabbixServer.listen.ip

List of comma delimited IP addresses that the trapper should listen on. Trapper will listen on all network interfaces if this parameter is missing. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.listen.port

Listen port for trapper. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10051 Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>
