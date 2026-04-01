---
module: networking.macvlans.<name>
option_count: 2
source: options.html
---

# networking.macvlans.<name>

## networking.macvlans.<name>.interface

The interface the macvlan will transmit packets through. Type: string Example: "enp4s0" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.macvlans.<name>.mode

The mode of the macvlan device. Type: null or string Default: null Example: "vepa" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
