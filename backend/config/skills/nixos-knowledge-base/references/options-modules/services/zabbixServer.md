---
module: services.zabbixServer
option_count: 6
source: options.html
---

# services.zabbixServer

## services.zabbixServer.enable

Whether to enable the Zabbix Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.package

The Zabbix package to use. Type: package Default: pkgs.zabbix.server-pgsql Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.extraPackages

Packages to be added to the Zabbix PATH. Typically used to add executables for scripts, but can be anything. Type: list of package Default: [ net-tools nmap traceroute ] Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.modules

A set of modules to load. Type: attribute set of package Default: { } Example: { "dummy.so" = pkgs.stdenv.mkDerivation { name = "zabbix-dummy-module-${cfg.package.version}"; src = cfg.package.src; buildInputs = [ cfg.package ]; sourceRoot = "zabbix-${cfg.package.version}/src/modules/dummy"; installPhase = '' mkdir -p $out/lib cp dummy.so $out/lib/ ''; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.openFirewall

Open ports in the firewall for the Zabbix Server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>

## services.zabbixServer.settings

Zabbix Server configuration. Refer to https://www.zabbix.com/documentation/current/manual/appendix/config/zabbix_server for details on supported values. Type: attribute set of (signed integer or string or list of string) Default: { } Example: { CacheSize = "1G"; SSHKeyLocation = "/var/lib/zabbix/.ssh"; StartPingers = 32; } Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-server.nix>
