---
module: virtualisation.libvirtd.qemu.swtpm
option_count: 2
source: options.html
---

# virtualisation.libvirtd.qemu.swtpm

## virtualisation.libvirtd.qemu.swtpm.enable

Allows libvirtd to use swtpm to create an emulated TPM. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.qemu.swtpm.package

The swtpm package to use. Type: package Default: pkgs.swtpm Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>
