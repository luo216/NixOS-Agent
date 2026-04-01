---
module: services.moosefs.chunkserver
option_count: 4
source: options.html
---

# services.moosefs.chunkserver

## services.moosefs.chunkserver.enable

Whether to enable MooseFS chunkserver daemon that stores file data. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.chunkserver.hdds

Mount points used by chunkserver for data storage (see mfshdd.cfg). Type: list of string Default: null Example: [ "/mnt/hdd1" "/mnt/hdd2" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.chunkserver.openFirewall

Whether to automatically open required firewall ports for chunkserver service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.chunkserver.settings

Chunkserver configuration options (mfschunkserver.cfg). Type: open submodule of attribute set of (Flat key-value file) Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>
