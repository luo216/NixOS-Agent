---
module: boot.initrd.systemd.network
option_count: 5
source: options.html
---

# boot.initrd.systemd.network

## boot.initrd.systemd.network.enable

Whether to enable networkd or not. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## boot.initrd.systemd.network.config

Definition of global systemd network config. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## boot.initrd.systemd.network.links

Definition of systemd network links. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## boot.initrd.systemd.network.netdevs

Definition of systemd network devices. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## boot.initrd.systemd.network.networks

Definition of systemd networks. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix> <nixpkgs/nixos/modules/system/boot/networkd.nix>
