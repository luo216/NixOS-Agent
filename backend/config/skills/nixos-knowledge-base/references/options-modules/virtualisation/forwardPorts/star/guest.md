---
module: virtualisation.forwardPorts.*.guest
option_count: 2
source: options.html
---

# virtualisation.forwardPorts.*.guest

## virtualisation.forwardPorts.*.guest.address

The IPv4 address on the guest VLAN. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.forwardPorts.*.guest.port

The guest port to be mapped. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
