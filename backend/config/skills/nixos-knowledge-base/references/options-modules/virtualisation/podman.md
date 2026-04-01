---
module: virtualisation.podman
option_count: 6
source: options.html
---

# virtualisation.podman

## virtualisation.podman.enable

This option enables Podman, a daemonless container engine for developing, managing, and running OCI Containers on your Linux System. It is a drop-in replacement for the docker command. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/podman/default.nix>

## virtualisation.podman.enableNvidia

Deprecated, please use hardware.nvidia-container-toolkit.enable instead. Enable use of Nvidia GPUs from within podman containers. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/podman/default.nix>

## virtualisation.podman.package

The podman package to use. This package will automatically include extra packages and runtimes. Type: package Default: pkgs.podman Declared by: <nixpkgs/nixos/modules/virtualisation/podman/default.nix>

## virtualisation.podman.dockerCompat

Create an alias mapping docker to podman. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/podman/default.nix>

## virtualisation.podman.extraPackages

Extra dependencies for podman to be placed on $PATH in the wrapper. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/virtualisation/podman/default.nix>

## virtualisation.podman.extraRuntimes

Extra runtime packages to be installed in the Podman wrapper. Those are then placed in libexec/podman, i.e. are seen as podman internal commands. Type: list of package Default: lib.optionals pkgs.stdenv.hostPlatform.isLinux [ pkgs.runc ] Example: [ pkgs.gvisor ] Declared by: <nixpkgs/nixos/modules/virtualisation/podman/default.nix>
