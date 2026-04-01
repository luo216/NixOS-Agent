---
module: services.zfs.autoReplication
option_count: 9
source: options.html
---

# services.zfs.autoReplication

## services.zfs.autoReplication.enable

Whether to enable ZFS snapshot replication. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/zfs-replication.nix>

## services.zfs.autoReplication.package

The zfs-replicate package to use. Type: package Default: pkgs.zfs-replicate Declared by: <nixpkgs/nixos/modules/services/backup/zfs-replication.nix>

## services.zfs.autoReplication.followDelete

Remove remote snapshots that don’t have a local correspondent. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/zfs-replication.nix>

## services.zfs.autoReplication.host

Remote host where snapshots should be sent. lz4 is expected to be installed on this host. Type: string Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/backup/zfs-replication.nix>

## services.zfs.autoReplication.identityFilePath

Path to SSH key used to login to host. Type: absolute path Example: "/home/username/.ssh/id_rsa" Declared by: <nixpkgs/nixos/modules/services/backup/zfs-replication.nix>

## services.zfs.autoReplication.localFilesystem

Local ZFS filesystem from which snapshots should be sent. Defaults to the attribute name. Type: string Example: "pool/file/path" Declared by: <nixpkgs/nixos/modules/services/backup/zfs-replication.nix>

## services.zfs.autoReplication.recursive

Recursively discover snapshots to send. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/zfs-replication.nix>

## services.zfs.autoReplication.remoteFilesystem

Remote ZFS filesystem where snapshots should be sent. Type: string Example: "pool/file/path" Declared by: <nixpkgs/nixos/modules/services/backup/zfs-replication.nix>

## services.zfs.autoReplication.username

Username used by SSH to login to remote host. Type: string Example: "username" Declared by: <nixpkgs/nixos/modules/services/backup/zfs-replication.nix>
