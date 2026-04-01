---
module: services.nbd.server
option_count: 5
source: options.html
---

# services.nbd.server

## services.nbd.server.enable

Whether to enable the Network Block Device (nbd) server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nbd.nix>

## services.nbd.server.exports

Files or block devices to make available over the network. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/nbd.nix>

## services.nbd.server.extraOptions

Extra options for the server. See nbd-server(5). Type: attribute set of (boolean or signed integer or floating point number or string) Default: { allowlist = false; } Declared by: <nixpkgs/nixos/modules/services/networking/nbd.nix>

## services.nbd.server.listenAddress

Address to listen on. If not specified, the server will listen on all interfaces. Type: null or string Default: null Example: "10.10.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/nbd.nix>

## services.nbd.server.listenPort

Port to listen on. The port is NOT automatically opened in the firewall. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10809 Declared by: <nixpkgs/nixos/modules/services/networking/nbd.nix>
