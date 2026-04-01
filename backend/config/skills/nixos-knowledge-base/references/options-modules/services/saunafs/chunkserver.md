---
module: services.saunafs.chunkserver
option_count: 4
source: options.html
---

# services.saunafs.chunkserver

## services.saunafs.chunkserver.enable

Whether to enable Saunafs chunkserver daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/saunafs.nix>

## services.saunafs.chunkserver.hdds

Mount points to be used by chunkserver for storage (see sfshdd.cfg(5)). Note, that these mount points must writeable by the user defined by the saunafs user. Type: list of string Default: null Example: [ "/mnt/hdd1" ]; Declared by: <nixpkgs/nixos/modules/services/network-filesystems/saunafs.nix>

## services.saunafs.chunkserver.openFirewall

Whether to automatically open the necessary ports in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/saunafs.nix>

## services.saunafs.chunkserver.settings

Contents of chunkserver config file (see sfschunkserver.cfg(5)). Type: open submodule of attribute set of (Flat key-value file) Declared by: <nixpkgs/nixos/modules/services/network-filesystems/saunafs.nix>
