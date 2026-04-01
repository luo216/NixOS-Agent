---
module: services.snmpd
option_count: 7
source: options.html
---

# services.snmpd

## services.snmpd.enable

Whether to enable snmpd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/snmpd.nix>

## services.snmpd.package

The net-snmp package to use. Type: package Default: pkgs.net-snmp Declared by: <nixpkgs/nixos/modules/services/monitoring/snmpd.nix>

## services.snmpd.configFile

Path to the snmpd.conf file. By default, if configText is set, a config file will be automatically generated. Type: absolute path Default: The value of configText. Declared by: <nixpkgs/nixos/modules/services/monitoring/snmpd.nix>

## services.snmpd.configText

The contents of the snmpd.conf. If the configFile option is set, this value will be ignored. Note that the contents of this option will be added to the Nix store as world-readable plain text, configFile can be used in addition to a secret management tool to protect sensitive data. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/snmpd.nix>

## services.snmpd.listenAddress

The address to listen on for SNMP and AgentX messages. Type: string Default: "0.0.0.0" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/snmpd.nix>

## services.snmpd.openFirewall

Open port in firewall for snmpd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/snmpd.nix>

## services.snmpd.port

The port to listen on for SNMP and AgentX messages. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 161 Declared by: <nixpkgs/nixos/modules/services/monitoring/snmpd.nix>
