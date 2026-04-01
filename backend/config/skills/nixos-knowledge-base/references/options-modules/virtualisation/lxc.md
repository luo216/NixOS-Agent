---
module: virtualisation.lxc
option_count: 7
source: options.html
---

# virtualisation.lxc

## virtualisation.lxc.enable

This enables Linux Containers (LXC), which provides tools for creating and managing system or application containers on Linux. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/lxc.nix>

## virtualisation.lxc.package

The lxc package to use. Type: package Default: pkgs.lxc Declared by: <nixpkgs/nixos/modules/virtualisation/lxc.nix>

## virtualisation.lxc.bridgeConfig

This is the config file for override lxc-net bridge default settings. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/virtualisation/lxc.nix>

## virtualisation.lxc.defaultConfig

Default config (default.conf) for new containers, i.e. for network config. See lxc.container.conf(5). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/virtualisation/lxc.nix>

## virtualisation.lxc.systemConfig

This is the system-wide LXC config. See lxc.system.conf(5). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/virtualisation/lxc.nix>

## virtualisation.lxc.unprivilegedContainers

Whether to enable support for unprivileged users to launch containers. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/lxc.nix>

## virtualisation.lxc.usernetConfig

This is the config file for managing unprivileged user network administration access in LXC. See lxc-usernet(5). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/virtualisation/lxc.nix>
