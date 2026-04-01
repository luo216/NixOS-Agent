---
module: fileSystems.<name>.overlay
option_count: 4
source: options.html
---

# fileSystems.<name>.overlay

## fileSystems.<name>.overlay.lowerdir

The list of path(s) to the lowerdir(s). To create a writable overlay, you MUST provide an upperdir and a workdir. You can create a read-only overlay when you provide multiple (at least 2!) lowerdirs and neither an upperdir nor a workdir. Type: null or (non-empty (list of (string or path in the Nix store))) Default: null Declared by: <nixpkgs/nixos/modules/tasks/filesystems/overlayfs.nix>

## fileSystems.<name>.overlay.upperdir

The path to the upperdir. If this is null, a read-only overlay is created using the lowerdir. If the filesystem is neededForBoot, this will be prefixed with /sysroot, unless useStage1BaseDirectories is set to true. If you set this to some value you MUST also set workdir. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/tasks/filesystems/overlayfs.nix>

## fileSystems.<name>.overlay.useStage1BaseDirectories

If enabled, lowerdir, upperdir and workdir will be prefixed with /sysroot. Disabling this can be useful to create an overlay over directories which aren’t on the real root. Disabling this does not work with the scripted (i.e. non-systemd) initrd. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/tasks/filesystems/overlayfs.nix>

## fileSystems.<name>.overlay.workdir

The path to the workdir. If the filesystem is neededForBoot, this will be prefixed with /sysroot, unless useStage1BaseDirectories is set to true. This MUST be set if you set upperdir. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/tasks/filesystems/overlayfs.nix>
