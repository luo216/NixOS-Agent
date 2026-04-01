---
module: virtualisation.host
option_count: 1
source: options.html
---

# virtualisation.host

## virtualisation.host.pkgs

Package set to use for the host-specific packages of the VM runner. Changing this to e.g. a Darwin package set allows running NixOS VMs on Darwin. Type: An evaluation of Nixpkgs; the top level attribute set of packages Default: pkgs Example: import pkgs.path { system = "x86_64-darwin"; } Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
