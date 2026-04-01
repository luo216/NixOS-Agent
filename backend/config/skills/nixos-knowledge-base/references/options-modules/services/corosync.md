---
module: services.corosync
option_count: 5
source: options.html
---

# services.corosync

## services.corosync.enable

Whether to enable corosync. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/corosync/default.nix>

## services.corosync.package

The corosync package to use. Type: package Default: pkgs.corosync Declared by: <nixpkgs/nixos/modules/services/cluster/corosync/default.nix>

## services.corosync.clusterName

Name of the corosync cluster. Type: string Default: "nixcluster" Declared by: <nixpkgs/nixos/modules/services/cluster/corosync/default.nix>

## services.corosync.extraOptions

Additional options with which to start corosync. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/corosync/default.nix>

## services.corosync.nodelist

Corosync nodelist: all cluster members. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/corosync/default.nix>
