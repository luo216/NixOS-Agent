---
module: virtualisation.forwardPorts.*
option_count: 2
source: options.html
---

# virtualisation.forwardPorts.*

## virtualisation.forwardPorts.*.from

Controls the direction in which the ports are mapped: "host" means traffic from the host ports is forwarded to the given guest port. "guest" means traffic from the guest ports is forwarded to the given host port. Type: one of “host”, “guest” Default: "host" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.forwardPorts.*.proto

The protocol to forward. Type: one of “tcp”, “udp” Default: "tcp" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
