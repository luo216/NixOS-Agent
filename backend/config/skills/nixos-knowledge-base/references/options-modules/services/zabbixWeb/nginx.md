---
module: services.zabbixWeb.nginx
option_count: 1
source: options.html
---

# services.zabbixWeb.nginx

## services.zabbixWeb.nginx.virtualHost

Nginx configuration can be done by adapting services.nginx.virtualHosts.<name>. See services.nginx.virtualHosts for further information. Type: submodule Default: { } Example: { forceSSL = true; sslCertificateKey = "/etc/ssl/zabbix.key"; sslCertificate = "/etc/ssl/zabbix.crt"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>
