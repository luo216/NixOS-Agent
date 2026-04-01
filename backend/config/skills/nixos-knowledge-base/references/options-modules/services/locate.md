---
module: services.locate
option_count: 9
source: options.html
---

# services.locate

## services.locate.enable

If enabled, NixOS will periodically update the database of files used by the locate command. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/misc/locate.nix>

## services.locate.package

The plocate package to use. Type: package Default: pkgs.plocate Example: mlocate Declared by: <nixpkgs/nixos/modules/misc/locate.nix>

## services.locate.extraFlags

Extra flags to pass to updatedb. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/misc/locate.nix>

## services.locate.interval

Update the locate database at this interval. Updates by default at 2:15 AM every day. The format is described in systemd.time(7). To disable automatic updates, set to "never" and run updatedb manually. Type: string Default: "02:15" Example: "hourly" Declared by: <nixpkgs/nixos/modules/misc/locate.nix>

## services.locate.output

The database file to build. Type: absolute path Default: "/var/cache/locatedb" Declared by: <nixpkgs/nixos/modules/misc/locate.nix>

## services.locate.pruneBindMounts

Whether not to index bind mounts Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/misc/locate.nix>

## services.locate.pruneFS

Which filesystem types to exclude from indexing Type: list of string Default: [ "afs" "anon_inodefs" "auto" "autofs" "bdev" "binfmt" "binfmt_misc" "ceph" "cgroup" "cgroup2" "cifs" "coda" "configfs" "cramfs" "cpuset" "curlftpfs" "debugfs" "devfs" "devpts" "devtmpfs" "ecryptfs" "eventpollfs" "exofs" "futexfs" "ftpfs" "fuse" "fusectl" "fusesmb" "fuse.ceph" "fuse.glusterfs" "fuse.gvfsd-fuse" "fuse.mfs" "fuse.rclone" "fuse.rozofs" "fuse.sshfs" "gfs" "gfs2" "hostfs" "hugetlbfs" "inotifyfs" "iso9660" "jffs2" "lustre" "lustre_lite" "misc" "mfs" "mqueue" "ncpfs" "nfs" "NFS" "nfs4" "nfsd" "nnpfs" "ocfs" "ocfs2" "pipefs" "proc" "ramfs" "rpc_pipefs" "securityfs" "selinuxfs" "sfs" "shfs" "smbfs" "sockfs" "spufs" "sshfs" "subfs" "supermount" "sysfs" "tmpfs" "tracefs" "ubifs" "udev" "udf" "usbfs" "vboxsf" "vperfctrfs" ] Declared by: <nixpkgs/nixos/modules/misc/locate.nix>

## services.locate.pruneNames

Directory components which should exclude paths containing them from indexing Type: list of string Default: [ ".bzr" ".cache" ".git" ".hg" ".svn" ], if supported by the locate implementation (i.e. mlocate or plocate). Declared by: <nixpkgs/nixos/modules/misc/locate.nix>

## services.locate.prunePaths

Which paths to exclude from indexing Type: list of absolute path Default: [ "/tmp" "/var/tmp" "/var/cache" "/var/lock" "/var/run" "/var/spool" "/nix/store" "/nix/var/log/nix" ] Declared by: <nixpkgs/nixos/modules/misc/locate.nix>
