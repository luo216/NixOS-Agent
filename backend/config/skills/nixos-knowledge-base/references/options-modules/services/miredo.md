---
module: services.miredo
option_count: 6
source: options.html
---

# services.miredo

## services.miredo.enable

Whether to enable the Miredo IPv6 tunneling service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/miredo.nix>

## services.miredo.package

The miredo package to use. Type: package Default: pkgs.miredo Declared by: <nixpkgs/nixos/modules/services/networking/miredo.nix>

## services.miredo.bindAddress

Depending on the local firewall/NAT rules, you might need to force Miredo to use a fixed UDP port and or IPv4 address. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/miredo.nix>

## services.miredo.bindPort

Depending on the local firewall/NAT rules, you might need to force Miredo to use a fixed UDP port and or IPv4 address. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/miredo.nix>

## services.miredo.interfaceName

Name of the network tunneling interface. Type: string Default: "teredo" Declared by: <nixpkgs/nixos/modules/services/networking/miredo.nix>

## services.miredo.serverAddress

The hostname or primary IPv4 address of the Teredo server. This setting is required if Miredo runs as a Teredo client. “teredo.remlab.net” is an experimental service for testing only. Please use another server for production and/or large scale deployments. Type: string Default: "teredo.remlab.net" Declared by: <nixpkgs/nixos/modules/services/networking/miredo.nix>
