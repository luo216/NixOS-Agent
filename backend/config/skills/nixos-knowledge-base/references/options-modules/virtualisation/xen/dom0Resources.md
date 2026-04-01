---
module: virtualisation.xen.dom0Resources
option_count: 3
source: options.html
---

# virtualisation.xen.dom0Resources

## virtualisation.xen.dom0Resources.maxMemory

Maximum amount of memory (in MiB) that Domain 0 can dynamically allocate to itself. Does nothing if set to the same amount as virtualisation.xen.memory, or if that option is set to 0. Type: unsigned integer, meaning >=0 Default: config.virtualisation.xen.dom0Resources.memory Example: 1024 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.dom0Resources.maxVCPUs

Amount of virtual CPU cores allocated to Domain 0 on boot. If set to 0, all cores are assigned to Domain 0, and unprivileged domains will compete with Domain 0 for CPU time. Type: unsigned integer, meaning >=0 Default: 0 Example: 4 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.dom0Resources.memory

Amount of memory (in MiB) allocated to Domain 0 on boot. If set to 0, all memory is assigned to Domain 0, and unprivileged domains will compete with Domain 0 for free RAM. Type: unsigned integer, meaning >=0 Default: 0 Example: 512 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
