---
module: services.keepalived.vrrpInstances.<name>
option_count: 14
source: options.html
---

# services.keepalived.vrrpInstances.<name>

## services.keepalived.vrrpInstances.<name>.extraConfig

Extra lines to be added verbatim to the vrrp_instance section. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.interface

Interface for inside_network, bound by vrrp. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.noPreempt

VRRP will normally preempt a lower priority machine when a higher priority machine comes online. “nopreempt” allows the lower priority machine to maintain the master role, even when a higher priority machine comes back online. NOTE: For this to work, the initial state of this entry must be BACKUP. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.priority

For electing MASTER, highest priority wins. To be MASTER, make 50 more than other machines. Type: signed integer Default: 100 Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.state

Initial state. As soon as the other machine(s) come up, an election will be held and the machine with the highest “priority” will become MASTER. So the entry here doesn’t matter a whole lot. Type: one of “MASTER”, “BACKUP” Default: "BACKUP" Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.trackInterfaces

List of network interfaces to monitor for health tracking. Type: list of string Default: [ ] Example: [ "eth0" "eth1" ] Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.trackScripts

List of script names to invoke for health tracking. Type: list of string Default: [ ] Example: [ "chk_cmd1" "chk_cmd2" ] Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.unicastPeers

Do not send VRRP adverts over VRRP multicast group. Instead it sends adverts to the following list of ip addresses using unicast design fashion. It can be cool to use VRRP FSM and features in a networking environment where multicast is not supported! IP Addresses specified can IPv4 as well as IPv6. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.unicastSrcIp

Default IP for binding vrrpd is the primary IP on interface. If you want to hide location of vrrpd, use this IP as src_addr for unicast vrrp packets. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.useVmac

Use VRRP Virtual MAC. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.virtualIps

Declarative vhost config Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.virtualRouterId

Arbitrary unique number 1…255. Used to differentiate multiple instances of vrrpd running on the same NIC (and hence same socket). Type: integer between 1 and 255 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.vmacInterface

Name of the vmac interface to use. keepalived will come up with a name if you don’t specify one. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.vmacXmitBase

Send/Recv VRRP messages from base interface instead of VMAC interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>
