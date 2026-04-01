---
module: virtualisation.interfaces.<name>
option_count: 2
source: options.html
---

# virtualisation.interfaces.<name>

## virtualisation.interfaces.<name>.assignIP

Automatically assign an IP address to the network interface using the same scheme as virtualisation.vlans. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.interfaces.<name>.vlan

VLAN to which the network interface is connected. Type: unsigned integer, meaning >=0 Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
