---
module: virtualisation.xen
option_count: 4
source: options.html
---

# virtualisation.xen

## virtualisation.xen.enable

Whether to enable the Xen Project Hypervisor, a virtualisation technology defined as a type-1 hypervisor, which allows multiple virtual machines, known as domains, to run concurrently on the physical machine. NixOS runs as the privileged Domain 0. This option requires a reboot into a Xen kernel to take effect. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.package

The Xen Hypervisor package to use. Type: package Default: pkgs.xen Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.debug

Whether to enable Xen debug features for Domain 0. This option enables some hidden debugging tests and features, and should not be used in production. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.trace

Whether to enable Xen debug tracing and logging for Domain 0. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
