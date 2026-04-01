---
module: programs.fuse
option_count: 3
source: options.html
---

# programs.fuse

## programs.fuse.enable

Whether to enable fuse. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/fuse.nix>

## programs.fuse.mountMax

Set the maximum number of FUSE mounts allowed to non-root users. Type: integer between 0 and 32767 (both inclusive) Default: 1000 Declared by: <nixpkgs/nixos/modules/programs/fuse.nix>

## programs.fuse.userAllowOther

Allow non-root users to specify the allow_other or allow_root mount options, see mount.fuse3(8). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/fuse.nix>
