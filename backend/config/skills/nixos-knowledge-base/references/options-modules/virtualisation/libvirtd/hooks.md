---
module: virtualisation.libvirtd.hooks
option_count: 5
source: options.html
---

# virtualisation.libvirtd.hooks

## virtualisation.libvirtd.hooks.daemon

Hooks that will be placed under /var/lib/libvirt/hooks/daemon.d/ and called for daemon start/shutdown/SIGHUP events. Please see https://libvirt.org/hooks.html for documentation. Type: attribute set of absolute path Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.hooks.libxl

Hooks that will be placed under /var/lib/libvirt/hooks/libxl.d/ and called for libxl-handled xen domains begin/end events. Please see https://libvirt.org/hooks.html for documentation. Type: attribute set of absolute path Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.hooks.lxc

Hooks that will be placed under /var/lib/libvirt/hooks/lxc.d/ and called for lxc domains begin/end events. Please see https://libvirt.org/hooks.html for documentation. Type: attribute set of absolute path Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.hooks.network

Hooks that will be placed under /var/lib/libvirt/hooks/network.d/ and called for networks begin/end events. Please see https://libvirt.org/hooks.html for documentation. Type: attribute set of absolute path Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.hooks.qemu

Hooks that will be placed under /var/lib/libvirt/hooks/qemu.d/ and called for qemu domains begin/end/migrate events. Please see https://libvirt.org/hooks.html for documentation. Type: attribute set of absolute path Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>
