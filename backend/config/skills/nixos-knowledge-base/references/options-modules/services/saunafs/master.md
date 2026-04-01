---
module: services.saunafs.master
option_count: 4
source: options.html
---

# services.saunafs.master

## services.saunafs.master.enable

Enable Saunafs master daemon. You need to run sfsmaster-init on a freshly installed master server to initialize the DATA_PATH directory. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/saunafs.nix>

## services.saunafs.master.exports

Paths to exports file (see sfsexports.cfg(5)). Type: list of string Default: null Example: [ "* / rw,alldirs,admin,maproot=0:0" ]; Declared by: <nixpkgs/nixos/modules/services/network-filesystems/saunafs.nix>

## services.saunafs.master.openFirewall

Whether to automatically open the necessary ports in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/saunafs.nix>

## services.saunafs.master.settings

Contents of config file (sfsmaster.cfg(5)). Type: open submodule of attribute set of (Flat key-value file) Declared by: <nixpkgs/nixos/modules/services/network-filesystems/saunafs.nix>
