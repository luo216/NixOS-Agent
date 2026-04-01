---
module: networking.interfaces.<name>.ipv4
option_count: 2
source: options.html
---

# networking.interfaces.<name>.ipv4

## networking.interfaces.<name>.ipv4.addresses

List of IPv4 addresses that will be statically assigned to the interface. Type: list of (submodule) Default: [ ] Example: [ { address = "10.0.0.1"; prefixLength = 16; } { address = "192.168.1.1"; prefixLength = 24; } ] Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.ipv4.routes

List of extra IPv4 static routes that will be assigned to the interface. Warning If the route type is the default unicast, then the scope is set differently depending on the value of networking.useNetworkd: the script-based backend sets it to link, while networkd sets it to global. If you want consistency between the two implementations, set the scope of the route manually with networking.interfaces.eth0.ipv4.routes = [{ options.scope = "global"; }] for example. Type: list of (submodule) Default: [ ] Example: [ { address = "10.0.0.0"; prefixLength = 16; } { address = "192.168.2.0"; prefixLength = 24; via = "192.168.1.1"; } ] Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
