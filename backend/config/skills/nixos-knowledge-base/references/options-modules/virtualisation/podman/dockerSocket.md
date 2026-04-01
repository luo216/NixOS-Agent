---
module: virtualisation.podman.dockerSocket
option_count: 1
source: options.html
---

# virtualisation.podman.dockerSocket

## virtualisation.podman.dockerSocket.enable

Make the Podman socket available in place of the Docker socket, so Docker tools can find the Podman socket. Podman implements the Docker API. Users must be in the podman group in order to connect. As with Docker, members of this group can gain root access. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/podman/default.nix>
