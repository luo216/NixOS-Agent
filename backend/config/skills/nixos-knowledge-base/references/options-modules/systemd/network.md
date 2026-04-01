---
module: systemd.network
option_count: 5
source: options.html
---

# systemd.network

## systemd.network.enable

Whether to enable networkd or not. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.config

Definition of global systemd network config. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.links

Definition of systemd network links. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs

Definition of systemd network devices. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks

Definition of systemd networks. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>
