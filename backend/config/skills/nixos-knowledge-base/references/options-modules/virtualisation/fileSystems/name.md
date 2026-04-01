---
module: virtualisation.fileSystems.<name>
option_count: 11
source: options.html
---

# virtualisation.fileSystems.<name>

## virtualisation.fileSystems.<name>.enable

Whether to enable the filesystem mount. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## virtualisation.fileSystems.<name>.autoFormat

If the device does not currently contain a filesystem (as determined by blkid), then automatically format it with the filesystem type specified in fsType. Use with caution. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## virtualisation.fileSystems.<name>.autoResize

If set, the filesystem is grown to its maximum size before being mounted. (This is typically the size of the containing partition.) This is currently only supported for ext2/3/4 filesystems that are mounted during early boot. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## virtualisation.fileSystems.<name>.depends

List of paths that should be mounted before this one. This filesystem’s device and mountPoint are always checked and do not need to be included explicitly. If a path is added to this list, any other filesystem whose mount point is a parent of the path will be mounted before this filesystem. The paths do not need to actually be the mountPoint of some other filesystem. This is useful for mounts which require keys and/or configuration files residing on another filesystem. Type: list of string (with check: non-empty without trailing slash) Default: [ ] Example: [ "/persist" ] Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## virtualisation.fileSystems.<name>.device

The device as passed to mount. This can be any of: a filename of a block special device such as /dev/sdc3 a tag such as UUID=fdd68895-c307-4549-8c9c-90e44c71f5b7 (for bind mounts only) the source path something else depending on the fsType. For example, nfs device may look like knuth.cwi.nl:/dir This is called device in mount(8) and fs_spec in fstab(5). Type: null or string (with check: non-empty) Default: null Example: "/dev/sda" Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## virtualisation.fileSystems.<name>.fsType

Type of the file system. This is the fstype passed to -t in the mount(8) command, and is called fs_vfstype in fstab(5). Type: string (with check: non-empty) Default: "auto" Example: "ext3" Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## virtualisation.fileSystems.<name>.label

Label of the device. This simply sets device to /dev/disk/by-label/${label}. Note that devices will not have a label unless they contain a filesystem which supports labels, such as ext4 or fat32. Type: null or string (with check: non-empty) Default: null Example: "root-partition" Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## virtualisation.fileSystems.<name>.mountPoint

Location where the file system will be mounted. This is called mountpoint in mount(8) and fs_file in fstab(5) Type: string (with check: non-empty without trailing slash) Default: "‹name›" Example: "/mnt/usb" Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## virtualisation.fileSystems.<name>.neededForBoot

If set, this file system will be mounted in the initial ramdisk. Note that the file system will always be mounted in the initial ramdisk if its mount point is one of the following: /, /nix, /nix/store, /var, /var/log, /var/lib, /var/lib/nixos, /etc, /usr. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## virtualisation.fileSystems.<name>.noCheck

Disable running fsck on this filesystem. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## virtualisation.fileSystems.<name>.options

Options used to mount the file system. This is called options in mount(8) and fs_mntops in fstab(5) Some options that can be used for all mounts are documented in mount(8) under FILESYSTEM-INDEPENDENT MOUNT OPTIONS. Options that systemd understands are documented in systemd.mount(5) under FSTAB. Each filesystem supports additional options, see the docs for that filesystem. Type: non-empty (list of string (with check: non-empty)) Default: [ "defaults" ] Example: [ "data=journal" ] Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>
