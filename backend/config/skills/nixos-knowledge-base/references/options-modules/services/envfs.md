---
module: services.envfs
option_count: 3
source: options.html
---

# services.envfs

## services.envfs.enable

Fuse filesystem that returns symlinks to executables based on the PATH of the requesting process. This is useful to execute shebangs on NixOS that assume hard coded locations in locations like /bin or /usr/bin etc. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/tasks/filesystems/envfs.nix>

## services.envfs.package

Which package to use for the envfs. Type: package Default: pkgs.envfs Declared by: <nixpkgs/nixos/modules/tasks/filesystems/envfs.nix>

## services.envfs.extraFallbackPathCommands

Extra commands to run in the package that contains fallback executables in case not other executable is found Type: strings concatenated with “\n” Default: "" Example: "ln -s $''{pkgs.bash}/bin/bash $out/bash" Declared by: <nixpkgs/nixos/modules/tasks/filesystems/envfs.nix>
