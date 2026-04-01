---
module: virtualisation.podman.networkSocket
option_count: 5
source: options.html
---

# virtualisation.podman.networkSocket

## virtualisation.podman.networkSocket.enable

Make the Podman and Docker compatibility API available over the network with TLS client certificate authentication. This allows Docker clients to connect with the equivalents of the Docker CLI -H and --tls* family of options. For certificate setup, see https://docs.docker.com/engine/security/protect-access/ This option is independent of virtualisation.podman.dockerSocket.enable. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/podman/network-socket.nix>

## virtualisation.podman.networkSocket.listenAddress

Interface address for receiving TLS connections. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/virtualisation/podman/network-socket.nix>

## virtualisation.podman.networkSocket.openFirewall

Whether to open the port in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/podman/network-socket.nix>

## virtualisation.podman.networkSocket.port

TCP port number for receiving TLS connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2376 Declared by: <nixpkgs/nixos/modules/virtualisation/podman/network-socket.nix>

## virtualisation.podman.networkSocket.server

Choice of TLS proxy server. Type: value “ghostunnel” (singular enum) Example: "ghostunnel" Declared by: <nixpkgs/nixos/modules/virtualisation/podman/network-socket-ghostunnel.nix> <nixpkgs/nixos/modules/virtualisation/podman/network-socket.nix>
