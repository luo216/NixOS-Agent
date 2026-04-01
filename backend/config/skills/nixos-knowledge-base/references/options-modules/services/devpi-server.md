---
module: services.devpi-server
option_count: 8
source: options.html
---

# services.devpi-server

## services.devpi-server.enable

Whether to enable Devpi Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/devpi-server.nix>

## services.devpi-server.package

The devpi-server package to use. Type: package Default: pkgs.devpi-server Declared by: <nixpkgs/nixos/modules/services/misc/devpi-server.nix>

## services.devpi-server.host

domain/ip address to listen on Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/devpi-server.nix>

## services.devpi-server.openFirewall

Whether to enable opening the default ports in the firewall for Devpi Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/devpi-server.nix>

## services.devpi-server.port

The port on which Devpi Server will listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3141 Declared by: <nixpkgs/nixos/modules/services/misc/devpi-server.nix>

## services.devpi-server.primaryUrl

Url for the primary node. Required option for replica nodes. Type: string Declared by: <nixpkgs/nixos/modules/services/misc/devpi-server.nix>

## services.devpi-server.replica

Run node as a replica. Requires the secretFile option and the primaryUrl to be enabled. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/devpi-server.nix>

## services.devpi-server.secretFile

Path to a shared secret file used for synchronization, Required for all nodes in a replica/primary setup. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/devpi-server.nix>
