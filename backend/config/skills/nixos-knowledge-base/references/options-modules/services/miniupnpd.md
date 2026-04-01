---
module: services.miniupnpd
option_count: 6
source: options.html
---

# services.miniupnpd

## services.miniupnpd.enable

Whether to enable MiniUPnP daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/miniupnpd.nix>

## services.miniupnpd.appendConfig

Configuration lines appended to the MiniUPnP config. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/miniupnpd.nix>

## services.miniupnpd.externalInterface

Name of the external interface. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/miniupnpd.nix>

## services.miniupnpd.internalIPs

The IP address ranges to listen on. Type: list of string Example: [ "192.168.1.1/24" "enp1s0" ] Declared by: <nixpkgs/nixos/modules/services/networking/miniupnpd.nix>

## services.miniupnpd.natpmp

Whether to enable NAT-PMP support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/miniupnpd.nix>

## services.miniupnpd.upnp

Whether to enable UPNP support. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/miniupnpd.nix>
