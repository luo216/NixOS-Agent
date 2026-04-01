---
module: services.zabbixWeb.httpd.virtualHost.listen.*
option_count: 3
source: options.html
---

# services.zabbixWeb.httpd.virtualHost.listen.*

## services.zabbixWeb.httpd.virtualHost.listen.*.ip

IP to listen on. 0.0.0.0 for IPv4 only, * for all. Type: string Default: "*" Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.httpd.virtualHost.listen.*.port

Port to listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.httpd.virtualHost.listen.*.ssl

Whether to enable SSL (https) support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>
