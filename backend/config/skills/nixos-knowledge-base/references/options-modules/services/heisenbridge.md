---
module: services.heisenbridge
option_count: 10
source: options.html
---

# services.heisenbridge

## services.heisenbridge.enable

Whether to enable the Matrix to IRC bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/heisenbridge.nix>

## services.heisenbridge.package

The heisenbridge package to use. Type: package Default: pkgs.heisenbridge Declared by: <nixpkgs/nixos/modules/services/misc/heisenbridge.nix>

## services.heisenbridge.address

Address to listen on. IPv6 does not seem to be supported. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/heisenbridge.nix>

## services.heisenbridge.debug

More verbose logging. Recommended during initial setup. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/heisenbridge.nix>

## services.heisenbridge.extraArgs

Heisenbridge is configured over the command line. Append extra arguments here Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/heisenbridge.nix>

## services.heisenbridge.homeserver

The URL to the home server for client-server API calls Type: string Example: "http://localhost:8008" Declared by: <nixpkgs/nixos/modules/services/misc/heisenbridge.nix>

## services.heisenbridge.namespaces

Configure the ‘namespaces’ section of the registration.yml for the bridge and the server Type: open submodule of (JSON value) Default: { aliases = [ ]; rooms = [ ]; users = [ { exclusive = true; regex = "@irc_.*"; } ]; } Declared by: <nixpkgs/nixos/modules/services/misc/heisenbridge.nix>

## services.heisenbridge.owner

Set owner MXID otherwise first talking local user will claim the bridge Type: null or string Default: null Example: "@admin:example.org" Declared by: <nixpkgs/nixos/modules/services/misc/heisenbridge.nix>

## services.heisenbridge.port

The port to listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9898 Declared by: <nixpkgs/nixos/modules/services/misc/heisenbridge.nix>

## services.heisenbridge.registrationUrl

The URL where the application service is listening for HS requests, from the Matrix HS perspective.# The default value assumes the bridge runs on the same host as the home server, in the same network. Type: string Default: "http://$\${cfg.address}:$\${toString cfg.port}" Example: "https://matrix.example.org" Declared by: <nixpkgs/nixos/modules/services/misc/heisenbridge.nix>
