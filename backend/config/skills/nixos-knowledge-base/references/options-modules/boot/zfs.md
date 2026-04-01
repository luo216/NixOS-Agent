---
module: boot.zfs
option_count: 12
source: options.html
---

# boot.zfs

## boot.zfs.enabled

True if ZFS filesystem support is enabled Type: boolean (read only) Default: true if ZFS filesystem support is enabled Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## boot.zfs.package

Configured ZFS userland tools package. Type: package Default: pkgs.zfs Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## boot.zfs.allowHibernation

Allow hibernation support, this may be a unsafe option depending on your setup. Make sure to NOT use Swap on ZFS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## boot.zfs.devNodes

Name of directory from which to import ZFS device, this is passed to zpool import as the value of the -d option. For guidance on choosing this value, see the ZFS documentation. Type: absolute path Default: "/dev/disk/by-id" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## boot.zfs.extraPools

Name or GUID of extra ZFS pools that you wish to import during boot. Usually this is not necessary. Instead, you should set the mountpoint property of ZFS filesystems to legacy and add the ZFS filesystems to NixOS’s fileSystems option, which makes NixOS automatically import the associated pool. However, in some cases (e.g. if you have many filesystems) it may be preferable to exclusively use ZFS commands to manage filesystems. If so, since NixOS/systemd will not be managing those filesystems, you will need to specify the ZFS pool here so that NixOS automatically imports it on every boot. Type: list of string Default: [ ] Example: [ "tank" "data" ] Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## boot.zfs.forceImportAll

Forcibly import all ZFS pool(s). If you set this option to false and NixOS subsequently fails to import your non-root ZFS pool(s), you should manually import each pool with “zpool import -f <pool-name>”, and then reboot. You should only need to do this once. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## boot.zfs.forceImportRoot

Forcibly import the ZFS root pool(s) during early boot. This is enabled by default for backwards compatibility purposes, but it is highly recommended to disable this option, as it bypasses some of the safeguards ZFS uses to protect your ZFS pools. If you set this option to false and NixOS subsequently fails to boot because it cannot import the root pool, you should boot with the zfs_force=1 option as a kernel parameter (e.g. by manually editing the kernel params in grub during boot). You should only need to do this once. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## boot.zfs.passwordTimeout

Timeout in seconds to wait for password entry for decrypt at boot. Defaults to 0, which waits forever. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## boot.zfs.pools

Configuration for individual pools to override global defaults. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## boot.zfs.removeLinuxDRM

Patch the kernel to change symbols needed by ZFS from EXPORT_SYMBOL_GPL to EXPORT_SYMBOL. Currently has no effect, but may again in future if a kernel update breaks ZFS due to symbols being newly changed to GPL. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## boot.zfs.requestEncryptionCredentials

If true on import encryption keys or passwords for all encrypted datasets are requested. To only decrypt selected datasets supply a list of dataset names instead. For root pools the encryption key can be supplied via both an interactive prompt (keylocation=prompt) and from a file (keylocation=file://). Type: boolean or list of string Default: true Example: [ "tank" "data" ] Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>

## boot.zfs.useKeyringForCredentials

Whether to enable Uses the kernel keyring for encryption credentials with keyname=zfs-<poolname>. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/tasks/filesystems/zfs.nix>
