---
module: services.zabbixAgent
option_count: 7
source: options.html
---

# services.zabbixAgent

## services.zabbixAgent.enable

Whether to enable the Zabbix Agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-agent.nix>

## services.zabbixAgent.package

The agent package to use. Type: package Default: pkgs.zabbix.agent Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-agent.nix>

## services.zabbixAgent.extraPackages

Packages to be added to the Zabbix PATH. Typically used to add executables for scripts, but can be anything. Type: list of package Default: with pkgs; [ net-tools ] Example: with pkgs; [ net-tools mysql ] Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-agent.nix>

## services.zabbixAgent.modules

A set of modules to load. Type: attribute set of package Default: { } Example: { "dummy.so" = pkgs.stdenv.mkDerivation { name = "zabbix-dummy-module-${cfg.package.version}"; src = cfg.package.src; buildInputs = [ cfg.package ]; sourceRoot = "zabbix-${cfg.package.version}/src/modules/dummy"; installPhase = '' mkdir -p $out/lib cp dummy.so $out/lib/ ''; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-agent.nix>

## services.zabbixAgent.openFirewall

Open ports in the firewall for the Zabbix Agent. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-agent.nix>

## services.zabbixAgent.server

The IP address or hostname of the Zabbix server to connect to. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-agent.nix>

## services.zabbixAgent.settings

Zabbix Agent configuration. Refer to https://www.zabbix.com/documentation/current/manual/appendix/config/zabbix_agentd for details on supported values. Type: attribute set of (signed integer or string or list of string) Default: { } Example: { DebugLevel = 4; Hostname = "example.org"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-agent.nix>
