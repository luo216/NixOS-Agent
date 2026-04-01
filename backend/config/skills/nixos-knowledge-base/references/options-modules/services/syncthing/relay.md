---
module: services.syncthing.relay
option_count: 10
source: options.html
---

# services.syncthing.relay

## services.syncthing.relay.enable

Whether to enable Syncthing relay service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/syncthing-relay.nix>

## services.syncthing.relay.extraOptions

Extra command line arguments to pass to strelaysrv. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/syncthing-relay.nix>

## services.syncthing.relay.globalRateBps

Global bandwidth rate limit in bytes per second. Type: null or (positive integer, meaning >0) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing-relay.nix>

## services.syncthing.relay.listenAddress

Address to listen on for relay traffic. Type: string Default: "" Example: "1.2.3.4" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing-relay.nix>

## services.syncthing.relay.perSessionRateBps

Per session bandwidth rate limit in bytes per second. Type: null or (positive integer, meaning >0) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing-relay.nix>

## services.syncthing.relay.pools

Relay pools to join. If null, uses the default global pool. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing-relay.nix>

## services.syncthing.relay.port

Port to listen on for relay traffic. This port should be added to networking.firewall.allowedTCPPorts. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 22067 Declared by: <nixpkgs/nixos/modules/services/networking/syncthing-relay.nix>

## services.syncthing.relay.providedBy

Human-readable description of the provider of the relay (you). Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing-relay.nix>

## services.syncthing.relay.statusListenAddress

Address to listen on for serving the relay status API. Type: string Default: "" Example: "1.2.3.4" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing-relay.nix>

## services.syncthing.relay.statusPort

Port to listen on for serving the relay status API. This port should be added to networking.firewall.allowedTCPPorts. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 22070 Declared by: <nixpkgs/nixos/modules/services/networking/syncthing-relay.nix>
