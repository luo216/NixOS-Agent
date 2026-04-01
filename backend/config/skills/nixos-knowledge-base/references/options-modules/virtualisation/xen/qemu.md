---
module: virtualisation.xen.qemu
option_count: 2
source: options.html
---

# virtualisation.xen.qemu

## virtualisation.xen.qemu.package

The QEMU (with Xen Hypervisor support) package to use. Type: package Default: pkgs.qemu_xen Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.qemu.pidFile

Path to the QEMU PID file. Type: absolute path Default: "/run/xen/qemu-dom0.pid" Example: "/var/run/xen/qemu-dom0.pid" Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
