---
module: services.keepalived.snmp
option_count: 8
source: options.html
---

# services.keepalived.snmp

## services.keepalived.snmp.enable

Whether to enable the builtin AgentX subagent. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.snmp.enableChecker

Enable SNMP handling of checker element of KEEPALIVED MIB. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.snmp.enableKeepalived

Enable SNMP handling of vrrp element of KEEPALIVED MIB. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.snmp.enableRfc

Enable SNMP handling of RFC2787 and RFC6527 VRRP MIBs. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.snmp.enableRfcV2

Enable SNMP handling of RFC2787 VRRP MIB. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.snmp.enableRfcV3

Enable SNMP handling of RFC6527 VRRP MIB. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.snmp.enableTraps

Enable SNMP traps. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.snmp.socket

Socket to use for connecting to SNMP master agent. If this value is set to null, keepalived’s default will be used, which is unix:/var/agentx/master, unless using a network namespace, when the default is udp:localhost:705. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>
