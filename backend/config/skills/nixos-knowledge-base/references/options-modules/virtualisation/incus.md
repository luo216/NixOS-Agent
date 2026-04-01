---
module: virtualisation.incus
option_count: 8
source: options.html
---

# virtualisation.incus

## virtualisation.incus.enable

Whether to enable incusd, a daemon that manages containers and virtual machines. Users in the “incus-admin” group can interact with the daemon (e.g. to start or stop containers) using the incus command line tool, among others. Users in the “incus” group can also interact with the daemon, but with lower permissions (i.e. administrative operations are forbidden). . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/incus.nix>

## virtualisation.incus.package

The incus-lts package to use. Type: package Default: pkgs.incus-lts Declared by: <nixpkgs/nixos/modules/virtualisation/incus.nix>

## virtualisation.incus.clientPackage

The incus client package to use. This package is added to PATH. Type: package Default: config.virtualisation.incus.package.client Declared by: <nixpkgs/nixos/modules/virtualisation/incus.nix>

## virtualisation.incus.lxcPackage

The lxc package to use. Type: package Default: config.virtualisation.lxc.package Declared by: <nixpkgs/nixos/modules/virtualisation/incus.nix>

## virtualisation.incus.preseed

Configuration for Incus preseed, see https://linuxcontainers.org/incus/docs/main/howto/initialize/#non-interactive-configuration for supported values. Changes to this will be re-applied to Incus which will overwrite existing entities or create missing ones, but entities will not be removed by preseed. Type: null or (open submodule of (YAML 1.1 value)) Default: null Example: { networks = [ { config = { "ipv4.address" = "10.0.100.1/24"; "ipv4.nat" = "true"; }; name = "incusbr0"; type = "bridge"; } ]; profiles = [ { devices = { eth0 = { name = "eth0"; network = "incusbr0"; type = "nic"; }; root = { path = "/"; pool = "default"; size = "35GiB"; type = "disk"; }; }; name = "default"; } ]; storage_pools = [ { config = { source = "/var/lib/incus/storage-pools/default"; }; driver = "dir"; name = "default"; } ]; } Declared by: <nixpkgs/nixos/modules/virtualisation/incus.nix>

## virtualisation.incus.socketActivation

Whether to enable socket-activation for starting incus.service. Enabling this option will stop incus.service from starting automatically on boot. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/incus.nix>

## virtualisation.incus.softDaemonRestart

Allow for incus.service to be stopped without affecting running instances. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/incus.nix>

## virtualisation.incus.startTimeout

Time to wait (in seconds) for incusd to become ready to process requests. If incusd does not reply within the configured time, incus.service will be considered failed and systemd will attempt to restart it. Type: unsigned integer, meaning >=0 Default: 600 Declared by: <nixpkgs/nixos/modules/virtualisation/incus.nix>
