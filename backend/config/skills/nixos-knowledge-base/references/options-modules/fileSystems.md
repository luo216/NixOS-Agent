---
module: fileSystems
option_count: 1
source: options.html
---

# fileSystems

## fileSystems

The file systems to be mounted. It must include an entry for the root directory (mountPoint = "/"). Each entry in the list is an attribute set with the following fields: mountPoint, device, fsType (a file system type recognised by mount; defaults to "auto"), and options (the mount options passed to mount using the -o flag; defaults to [ "defaults" ]). Instead of specifying device, you can also specify a volume label (label) for file systems that support it, such as ext2/ext3 (see mke2fs -L). Type: attribute set of (submodule) Default: { } Example: { "/".device = "/dev/hda1"; "/data" = { device = "/dev/hda2"; fsType = "ext3"; options = [ "data=journal" ]; }; "/bigdisk".label = "bigdisk"; } Declared by: <nixpkgs/nixos/modules/tasks/filesystems/overlayfs.nix> <nixpkgs/nixos/modules/tasks/filesystems.nix> <nixpkgs/nixos/modules/tasks/encrypted-devices.nix> <nixpkgs/nixos/modules/system/boot/stage-1.nix>
