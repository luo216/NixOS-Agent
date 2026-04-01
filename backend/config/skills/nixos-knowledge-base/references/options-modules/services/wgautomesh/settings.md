---
module: services.wgautomesh.settings
option_count: 5
source: options.html
---

# services.wgautomesh.settings

## services.wgautomesh.settings.gossip_port

wgautomesh gossip port, this MUST be the same number on all nodes in the wgautomesh network. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1666 Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.settings.interface

Wireguard interface to manage (it is NOT created by wgautomesh, you should use another NixOS option to create it such as networking.wireguard.interfaces.wg0 = {...};). Type: string Example: "wg0" Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.settings.lan_discovery

Enable discovery of peers on the same LAN using UDP broadcast. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.settings.peers

wgautomesh peer list. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.settings.upnp_forward_external_port

Public port number to try to redirect to this machine’s Wireguard daemon using UPnP IGD. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>
