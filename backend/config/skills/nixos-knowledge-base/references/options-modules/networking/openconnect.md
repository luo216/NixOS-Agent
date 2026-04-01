---
module: networking.openconnect
option_count: 2
source: options.html
---

# networking.openconnect

## networking.openconnect.package

The openconnect package to use. Type: package Default: pkgs.openconnect Declared by: <nixpkgs/nixos/modules/services/networking/openconnect.nix>

## networking.openconnect.interfaces

OpenConnect interfaces. Type: attribute set of (submodule) Default: { } Example: { openconnect0 = { gateway = "gateway.example.com"; passwordFile = "/var/lib/secrets/openconnect-passwd"; protocol = "anyconnect"; user = "example-user"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/openconnect.nix>
