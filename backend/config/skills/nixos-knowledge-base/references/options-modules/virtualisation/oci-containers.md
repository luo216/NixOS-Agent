---
module: virtualisation.oci-containers
option_count: 2
source: options.html
---

# virtualisation.oci-containers

## virtualisation.oci-containers.backend

The underlying Docker implementation to use. Type: one of “podman”, “docker” Default: "podman" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers

OCI (Docker) containers to run as systemd services. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>
