---
module: services.ghostunnel
option_count: 3
source: options.html
---

# services.ghostunnel

## services.ghostunnel.enable

Whether to enable ghostunnel. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.package

The ghostunnel package to use. Type: package Default: pkgs.ghostunnel Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers

Server mode ghostunnels (TLS listener -> plain TCP/UNIX target) Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>
