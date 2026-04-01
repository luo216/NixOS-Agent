---
module: services.moosefs.master
option_count: 5
source: options.html
---

# services.moosefs.master

## services.moosefs.master.enable

Enable MooseFS master daemon. The master server coordinates all MooseFS operations and stores metadata. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.master.autoInit

Whether to automatically initialize the master’s metadata directory on first run. Use with caution. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.master.exports

Export definitions for MooseFS (see mfsexports.cfg). Type: list of string Default: null Example: [ "* / rw,alldirs,admin,maproot=0:0" "* . rw" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.master.openFirewall

Whether to automatically open required firewall ports for master service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.master.settings

Master configuration options (mfsmaster.cfg). Type: open submodule of attribute set of (Flat key-value file) Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>
