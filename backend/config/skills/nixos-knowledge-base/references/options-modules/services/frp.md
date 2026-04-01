---
module: services.frp
option_count: 4
source: options.html
---

# services.frp

## services.frp.enable

Whether to enable frp. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/frp.nix>

## services.frp.package

The frp package to use. Type: package Default: pkgs.frp Declared by: <nixpkgs/nixos/modules/services/networking/frp.nix>

## services.frp.role

The frp consists of client and server. The server is usually deployed on the machine with a public IP address, and the client is usually deployed on the machine where the Intranet service to be penetrated resides. Type: one of “server”, “client” Declared by: <nixpkgs/nixos/modules/services/networking/frp.nix>

## services.frp.settings

Frp configuration, for configuration options see the example of client or server on github. Type: TOML value Default: { } Example: { serverAddr = "x.x.x.x"; serverPort = 7000; } Declared by: <nixpkgs/nixos/modules/services/networking/frp.nix>
