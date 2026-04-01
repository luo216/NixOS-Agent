---
module: virtualisation.oci-containers.containers.<name>.podman
option_count: 2
source: options.html
---

# virtualisation.oci-containers.containers.<name>.podman

## virtualisation.oci-containers.containers.<name>.podman.sdnotify

Determines how podman should notify systemd that the unit is ready. There are three options: conmon: marks the unit as ready when the container has started. healthy: marks the unit as ready when the container’s healthcheck passes. container: NOTIFY_SOCKET is passed into the container and the process inside the container needs to indicate on its own that it’s ready. Type: one of “conmon”, “healthy”, “container” Default: "conmon" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.podman.user

The user under which the container should run. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>
