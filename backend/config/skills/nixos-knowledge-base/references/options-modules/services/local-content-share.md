---
module: services.local-content-share
option_count: 5
source: options.html
---

# services.local-content-share

## services.local-content-share.enable

Whether to enable Local-Content-Share. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/local-content-share.nix>

## services.local-content-share.package

The local-content-share package to use. Type: package Default: pkgs.local-content-share Declared by: <nixpkgs/nixos/modules/services/misc/local-content-share.nix>

## services.local-content-share.listenAddress

Address on which the service will be available. The service will listen on all interfaces if set to an empty string. Type: string Default: "" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/local-content-share.nix>

## services.local-content-share.openFirewall

Whether to automatically open the specified port in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/local-content-share.nix>

## services.local-content-share.port

Port on which the service will be available Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/misc/local-content-share.nix>
