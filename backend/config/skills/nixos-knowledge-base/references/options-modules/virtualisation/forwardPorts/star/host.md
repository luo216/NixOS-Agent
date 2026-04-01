---
module: virtualisation.forwardPorts.*.host
option_count: 2
source: options.html
---

# virtualisation.forwardPorts.*.host

## virtualisation.forwardPorts.*.host.address

The IPv4 address of the host. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.forwardPorts.*.host.port

The host port to be mapped. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
