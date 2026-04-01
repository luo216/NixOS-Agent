---
module: networking.vswitches.<name>
option_count: 6
source: options.html
---

# networking.vswitches.<name>

## networking.vswitches.<name>.controllers

Specify the controller targets. For the allowed options see man 8 ovs-vsctl. Type: list of string Default: [ ] Example: [ "ptcp:6653:[::1]" ] Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.vswitches.<name>.extraOvsctlCmds

Commands to manipulate the Open vSwitch database. Every line executed with ovs-vsctl. All commands are bundled together with the operations for adding the interfaces into one atomic operation. Type: strings concatenated with “\n” Default: "" Example: '' set-fail-mode <switch_name> secure set Bridge <switch_name> stp_enable=true '' Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.vswitches.<name>.interfaces

The physical network interfaces connected by the vSwitch. Type: attribute set of (submodule) Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.vswitches.<name>.openFlowRules

OpenFlow rules to insert into the Open vSwitch. All openFlowRules are loaded with ovs-ofctl within one atomic operation. Type: strings concatenated with “\n” Default: "" Example: '' actions=normal '' Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.vswitches.<name>.openFlowVersion

Version of OpenFlow protocol to use when communicating with the switch internally (e.g. with openFlowRules). Type: string Default: "OpenFlow13" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.vswitches.<name>.supportedOpenFlowVersions

Supported versions to enable on this switch. Type: list of string Default: [ "OpenFlow13" ] Example: [ "OpenFlow10" "OpenFlow13" "OpenFlow14" ] Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
