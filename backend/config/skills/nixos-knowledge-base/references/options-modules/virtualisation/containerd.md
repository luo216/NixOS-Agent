---
module: virtualisation.containerd
option_count: 4
source: options.html
---

# virtualisation.containerd

## virtualisation.containerd.enable

Whether to enable containerd container runtime. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/containerd.nix>

## virtualisation.containerd.args

extra args to append to the containerd cmdline Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/containerd.nix>

## virtualisation.containerd.configFile

Path to containerd config file. Setting this option will override any configuration applied by the settings option. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/virtualisation/containerd.nix>

## virtualisation.containerd.settings

Verbatim lines to add to containerd.toml Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/containerd.nix>
