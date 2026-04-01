---
module: virtualisation.docker.rootless
option_count: 4
source: options.html
---

# virtualisation.docker.rootless

## virtualisation.docker.rootless.enable

This option enables docker in a rootless mode, a daemon that manages linux containers. To interact with the daemon, one needs to set DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/docker-rootless.nix>

## virtualisation.docker.rootless.package

The docker package to use. Type: package Default: pkgs.docker Declared by: <nixpkgs/nixos/modules/virtualisation/docker-rootless.nix>

## virtualisation.docker.rootless.extraPackages

Extra packages to add to PATH for the docker daemon process. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/virtualisation/docker-rootless.nix>

## virtualisation.docker.rootless.setSocketVariable

Point DOCKER_HOST to rootless Docker instance for normal users by default. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/docker-rootless.nix>
