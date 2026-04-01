---
module: services.glusterfs
option_count: 8
source: options.html
---

# services.glusterfs

## services.glusterfs.enable

Whether to enable GlusterFS Daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/glusterfs.nix>

## services.glusterfs.enableGlustereventsd

Whether to enable the GlusterFS Events Daemon Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/glusterfs.nix>

## services.glusterfs.extraFlags

Extra flags passed to the GlusterFS daemon Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/glusterfs.nix>

## services.glusterfs.killMode

The systemd KillMode to use for glusterd. glusterd spawns other daemons like gsyncd. If you want these to stop when glusterd is stopped (e.g. to ensure that NixOS config changes are reflected even for these sub-daemons), set this to ‘control-group’. If however you want running volume processes (glusterfsd) and thus gluster mounts not be interrupted when glusterd is restarted (for example, when you want to restart them manually at a later time), set this to ‘process’. Type: one of “control-group”, “process”, “mixed”, “none” Default: "control-group" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/glusterfs.nix>

## services.glusterfs.logLevel

Log level used by the GlusterFS daemon Type: one of “DEBUG”, “INFO”, “WARNING”, “ERROR”, “CRITICAL”, “TRACE”, “NONE” Default: "INFO" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/glusterfs.nix>

## services.glusterfs.stopKillTimeout

The systemd TimeoutStopSec to use. After this time after having been asked to shut down, glusterd (and depending on the killMode setting also its child processes) are killed by systemd. The default is set low because GlusterFS (as of 3.10) is known to not tell its children (like gsyncd) to terminate at all. Type: string Default: "5s" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/glusterfs.nix>

## services.glusterfs.tlsSettings

Make the server communicate via TLS. This means it will only connect to other gluster servers having certificates signed by the same CA. Enabling this will create a file /var/lib/glusterd/secure-access. Disabling will delete this file again. See also: https://gluster.readthedocs.io/en/latest/Administrator Guide/SSL/ Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/network-filesystems/glusterfs.nix>

## services.glusterfs.useRpcbind

Enable use of rpcbind. This is required for Gluster’s NFS functionality. You may want to turn it off to reduce the attack surface for DDoS reflection attacks. See https://davelozier.com/glusterfs-and-rpcbind-portmap-ddos-reflection-attacks/ and https://bugzilla.redhat.com/show_bug.cgi?id=1426842 for details. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/glusterfs.nix>
