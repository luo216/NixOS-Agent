---
module: virtualisation.podman.networkSocket.tls
option_count: 3
source: options.html
---

# virtualisation.podman.networkSocket.tls

## virtualisation.podman.networkSocket.tls.cacert

Path to CA certificate to use for client authentication. Type: absolute path Declared by: <nixpkgs/nixos/modules/virtualisation/podman/network-socket.nix>

## virtualisation.podman.networkSocket.tls.cert

Path to certificate describing the server. Type: absolute path Declared by: <nixpkgs/nixos/modules/virtualisation/podman/network-socket.nix>

## virtualisation.podman.networkSocket.tls.key

Path to the private key corresponding to the server certificate. Use a string for this setting. Otherwise it will be copied to the Nix store first, where it is readable by any system process. Type: absolute path Declared by: <nixpkgs/nixos/modules/virtualisation/podman/network-socket.nix>
