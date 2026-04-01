---
module: services.zabbixProxy
option_count: 7
source: options.html
---

# services.zabbixProxy

## services.zabbixProxy.enable

Whether to enable the Zabbix Proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.package

The Zabbix package to use. Type: package Default: pkgs.zabbix.proxy-pgsql Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.extraPackages

Packages to be added to the Zabbix PATH. Typically used to add executables for scripts, but can be anything. Type: list of package Default: [ net-tools nmap traceroute ] Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.modules

A set of modules to load. Type: attribute set of package Default: { } Example: { "dummy.so" = pkgs.stdenv.mkDerivation { name = "zabbix-dummy-module-${cfg.package.version}"; src = cfg.package.src; buildInputs = [ cfg.package ]; sourceRoot = "zabbix-${cfg.package.version}/src/modules/dummy"; installPhase = '' mkdir -p $out/lib cp dummy.so $out/lib/ ''; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.openFirewall

Open ports in the firewall for the Zabbix Proxy. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.server

The IP address or hostname of the Zabbix server to connect to. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>

## services.zabbixProxy.settings

Zabbix Proxy configuration. Refer to https://www.zabbix.com/documentation/current/manual/appendix/config/zabbix_proxy for details on supported values. Type: attribute set of (signed integer or string or list of string) Default: { } Example: { CacheSize = "1G"; SSHKeyLocation = "/var/lib/zabbix/.ssh"; StartPingers = 32; } Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-proxy.nix>
