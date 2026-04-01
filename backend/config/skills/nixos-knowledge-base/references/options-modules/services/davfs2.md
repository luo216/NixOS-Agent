---
module: services.davfs2
option_count: 4
source: options.html
---

# services.davfs2

## services.davfs2.enable

Whether to enable davfs2. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/davfs2.nix>

## services.davfs2.davGroup

The group of the running mount.davfs daemon. Ordinary users must be member of this group in order to mount a davfs2 file system. Value must be given as name, not as numerical id. Type: string Default: "davfs2" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/davfs2.nix>

## services.davfs2.davUser

When invoked by root the mount.davfs daemon will run as this user. Value must be given as name, not as numerical id. Type: string Default: "davfs2" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/davfs2.nix>

## services.davfs2.settings

Extra settings appended to the configuration of davfs2. See davfs2.conf(5) for available settings. Type: open submodule of attribute set of attribute set of (boolean or signed integer or string or attribute set of (boolean or signed integer or string)) Default: { } Example: { globalSection = { proxy = "foo.bar:8080"; use_locks = false; }; sections = { "/media/dav" = { use_locks = true; }; "/home/otto/mywebspace" = { gui_optimize = true; }; }; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/davfs2.nix>
