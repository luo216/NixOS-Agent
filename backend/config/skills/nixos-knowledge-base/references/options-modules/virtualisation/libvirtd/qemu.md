---
module: virtualisation.libvirtd.qemu
option_count: 5
source: options.html
---

# virtualisation.libvirtd.qemu

## virtualisation.libvirtd.qemu.package

The qemu package to use. pkgs.qemu can emulate alien architectures (e.g. aarch64 on x86) pkgs.qemu_kvm saves disk space allowing to emulate only host architectures. Type: package Default: pkgs.qemu Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.qemu.runAsRoot

If true, libvirtd runs qemu as root. If false, libvirtd runs qemu as unprivileged user qemu-libvirtd. Changing this option to false may cause file permission issues for existing guests. To fix these, manually change ownership of affected files in /var/lib/libvirt/qemu to qemu-libvirtd. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.qemu.swtpm

QEMU’s swtpm options. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.qemu.verbatimConfig

Contents written to the qemu configuration file, qemu.conf. Make sure to include a proper namespace configuration when supplying custom configuration. Type: strings concatenated with “\n” Default: '' namespaces = [] '' Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.qemu.vhostUserPackages

Packages containing out-of-tree vhost-user drivers. Type: list of package Default: [ ] Example: [ pkgs.virtiofsd ] Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>
