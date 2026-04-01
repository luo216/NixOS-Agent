---
module: services.zabbixWeb
option_count: 6
source: options.html
---

# services.zabbixWeb

## services.zabbixWeb.enable

Whether to enable the Zabbix web interface. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.package

The web package to use. Type: package Default: pkgs.zabbix.web Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.extraConfig

Additional configuration to be copied verbatim into zabbix.conf.php. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.frontend

Frontend server to use. Type: one of “nginx”, “httpd” Default: "httpd" Example: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.hostname

Hostname for either nginx or httpd. Type: string Default: "zabbix.local" Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>

## services.zabbixWeb.poolConfig

Options for the Zabbix PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/zabbix.nix>
