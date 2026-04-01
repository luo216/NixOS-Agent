---
module: networking.vswitches.<name>.interfaces.<name>
option_count: 3
source: options.html
---

# networking.vswitches.<name>.interfaces.<name>

## networking.vswitches.<name>.interfaces.<name>.name

Name of the interface Type: string Example: "eth0" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.vswitches.<name>.interfaces.<name>.type

Openvswitch type to assign to interface Type: null or string Default: null Example: "internal" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.vswitches.<name>.interfaces.<name>.vlan

Vlan tag to apply to interface Type: null or signed integer Default: null Example: 10 Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
