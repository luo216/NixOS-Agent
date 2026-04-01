---
module: virtualisation.cri-o
option_count: 8
source: options.html
---

# virtualisation.cri-o

## virtualisation.cri-o.enable

Whether to enable Container Runtime Interface for OCI (CRI-O). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/cri-o.nix>

## virtualisation.cri-o.extraPackages

Extra packages to be installed in the CRI-O wrapper. Type: list of package Default: [ ] Example: [ pkgs.gvisor ] Declared by: <nixpkgs/nixos/modules/virtualisation/cri-o.nix>

## virtualisation.cri-o.logLevel

Log level to be used Type: one of “trace”, “debug”, “info”, “warn”, “error”, “fatal” Default: "info" Declared by: <nixpkgs/nixos/modules/virtualisation/cri-o.nix>

## virtualisation.cri-o.pauseCommand

Override the default pause command Type: null or string Default: null Example: "/pause" Declared by: <nixpkgs/nixos/modules/virtualisation/cri-o.nix>

## virtualisation.cri-o.pauseImage

Override the default pause image for pod sandboxes Type: null or string Default: null Example: "k8s.gcr.io/pause:3.2" Declared by: <nixpkgs/nixos/modules/virtualisation/cri-o.nix>

## virtualisation.cri-o.runtime

Override the default runtime Type: null or string Default: null Example: "crun" Declared by: <nixpkgs/nixos/modules/virtualisation/cri-o.nix>

## virtualisation.cri-o.settings

Configuration for cri-o, see https://github.com/cri-o/cri-o/blob/master/docs/crio.conf.5.md. Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/cri-o.nix>

## virtualisation.cri-o.storageDriver

Storage driver to be used Type: one of “aufs”, “btrfs”, “devmapper”, “overlay”, “vfs”, “zfs” Default: "overlay" Declared by: <nixpkgs/nixos/modules/virtualisation/cri-o.nix>
