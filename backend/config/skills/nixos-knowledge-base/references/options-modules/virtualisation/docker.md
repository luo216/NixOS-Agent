---
module: virtualisation.docker
option_count: 10
source: options.html
---

# virtualisation.docker

## virtualisation.docker.enable

This option enables docker, a daemon that manages linux containers. Users in the “docker” group can interact with the daemon (e.g. to start or stop containers) using the docker command line tool. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.enableNvidia

Deprecated, please use hardware.nvidia-container-toolkit.enable instead. Enable Nvidia GPU support inside docker containers. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.enableOnBoot

When enabled dockerd is started on boot. This is required for containers which are created with the --restart=always flag to work. If this option is disabled, docker might be started on demand by socket activation. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.package

The docker package to use. Type: package Default: pkgs.docker Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.extraOptions

The extra command-line options to pass to docker daemon. Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.extraPackages

Extra packages to add to PATH for the docker daemon process. Type: list of package Default: [ ] Example: with pkgs; [ criu ] Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.listenOptions

A list of unix and tcp docker should listen to. The format follows ListenStream as described in systemd.socket(5). Type: list of string Default: [ "/run/docker.sock" ] Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.liveRestore

Alias of virtualisation.docker.daemon.settings.live-restore. Type: submodule Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.logDriver

This option determines which Docker log driver to use. Type: one of “none”, “json-file”, “syslog”, “journald”, “gelf”, “fluentd”, “awslogs”, “splunk”, “etwlogs”, “gcplogs”, “local” Default: "journald" Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>

## virtualisation.docker.storageDriver

This option determines which Docker storage driver to use. By default it lets docker automatically choose the preferred storage driver. However, it is recommended to specify a storage driver explicitly, as docker’s default varies over versions. Warning Changing the storage driver will cause any existing containers and images to become inaccessible. Type: null or one of “aufs”, “btrfs”, “devicemapper”, “overlay”, “overlay2”, “zfs” Default: null Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>
