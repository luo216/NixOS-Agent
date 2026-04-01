---
module: services.nfs.server
option_count: 9
source: options.html
---

# services.nfs.server

## services.nfs.server.enable

Whether to enable the kernel’s NFS server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/nfsd.nix>

## services.nfs.server.createMountPoints

Whether to create the mount points in the exports file at startup time. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/nfsd.nix>

## services.nfs.server.exports

Contents of the /etc/exports file. See exports(5) for the format. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/nfsd.nix>

## services.nfs.server.extraNfsdConfig

Extra configuration options for the [nfsd] section of /etc/nfs.conf. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/nfsd.nix>

## services.nfs.server.hostName

Hostname or address on which NFS requests will be accepted. Default is all. See the -H option in nfsd(8). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/network-filesystems/nfsd.nix>

## services.nfs.server.lockdPort

Use a fixed port for the NFS lock manager kernel module (lockd/nlockmgr). This is useful if the NFS server is behind a firewall. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 4001 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/nfsd.nix>

## services.nfs.server.mountdPort

Use fixed port for rpc.mountd, useful if server is behind firewall. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 4002 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/nfsd.nix>

## services.nfs.server.nproc

Number of NFS server threads. Defaults to the recommended value of 8. Type: signed integer Default: 8 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/nfsd.nix>

## services.nfs.server.statdPort

Use a fixed port for rpc.statd. This is useful if the NFS server is behind a firewall. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 4000 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/nfsd.nix>
