---
module: networking.wireguard
option_count: 3
source: options.html
---

# networking.wireguard

## networking.wireguard.enable

Whether to enable WireGuard. Note By default, this module is powered by a script-based backend. You can enable the networkd backend with networking.wireguard.useNetworkd. Type: boolean Default: config.networking.wireguard.interfaces != { } Example: true Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces

WireGuard interfaces. Type: attribute set of (submodule) Default: { } Example: { wg0 = { ips = [ "192.168.20.4/24" ]; peers = [ { allowedIPs = [ "192.168.20.1/32" ]; endpoint = "demo.wireguard.io:12913"; publicKey = "xTIBA5rboUvnH4htodjb6e697QjLERt1NAB4mZqp8Dg="; } ]; privateKey = "yAnz5TF+lXXJte14tji3zlMNq+hd2rYUIgJBgB3fBmk="; }; } Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.useNetworkd

Whether to use networkd as the network configuration backend for Wireguard instead of the legacy script-based system. Warning Some options have slightly different behavior with the networkd and script-based backends. Check the documentation for each Wireguard option you use before enabling this option. Type: boolean Default: config.networking.useNetworkd Declared by: <nixpkgs/nixos/modules/services/networking/wireguard-networkd.nix>
