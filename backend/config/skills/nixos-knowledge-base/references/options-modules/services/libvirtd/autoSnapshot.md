---
module: services.libvirtd.autoSnapshot
option_count: 6
source: options.html
---

# services.libvirtd.autoSnapshot

## services.libvirtd.autoSnapshot.enable

Whether to enable LibVirt VM snapshots. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/libvirtd-autosnapshot.nix>

## services.libvirtd.autoSnapshot.calendar

When to create snapshots (systemd calendar format). Default is 4:15 AM. Type: string Default: "04:15:00" Declared by: <nixpkgs/nixos/modules/services/backup/libvirtd-autosnapshot.nix>

## services.libvirtd.autoSnapshot.keep

Default number of snapshots to keep for VMs that don’t specify a keep value. Type: signed integer Default: 2 Declared by: <nixpkgs/nixos/modules/services/backup/libvirtd-autosnapshot.nix>

## services.libvirtd.autoSnapshot.prefix

Prefix for automatic snapshot names. This is used to identify and manage automatic snapshots separately from manual ones. Type: string Default: "autosnap" Declared by: <nixpkgs/nixos/modules/services/backup/libvirtd-autosnapshot.nix>

## services.libvirtd.autoSnapshot.snapshotType

Type of snapshot to create (internal or external). Type: one of “internal”, “external” Default: "internal" Declared by: <nixpkgs/nixos/modules/services/backup/libvirtd-autosnapshot.nix>

## services.libvirtd.autoSnapshot.vms

If specified only the list of VMs will be snapshotted else all existing one. Each entry can be either: A string (VM name, uses default settings) An attribute set with VM configuration Type: null or (list of (string or (submodule))) Default: null Example: [ "myvm1" # Uses defaults { name = "myvm2"; keep = 30; # Override retention } ] Declared by: <nixpkgs/nixos/modules/services/backup/libvirtd-autosnapshot.nix>
