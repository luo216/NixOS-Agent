---
module: networking.bridges.<name>
option_count: 2
source: options.html
---

# networking.bridges.<name>

## networking.bridges.<name>.interfaces

The physical network interfaces connected by the bridge. Type: list of string Example: [ "eth0" "eth1" ] Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.bridges.<name>.rstp

Whether the bridge interface should enable rstp. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
