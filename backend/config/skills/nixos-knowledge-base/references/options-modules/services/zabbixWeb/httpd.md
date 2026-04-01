---
module: services.zabbixWeb.httpd
option_count: 1
source: options.html
---

# services.zabbixWeb.httpd

## services.zabbixWeb.httpd.virtualHost

Apache configuration can be done by adapting services.httpd.virtualHosts.<name>. See services.httpd.virtualHosts for further information. Type: submodule Default: { } Example: { hostName = "zabbix.example.org"; adminAddr = "webmaster@example.org"; forceSSL = true; enableACME = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>
