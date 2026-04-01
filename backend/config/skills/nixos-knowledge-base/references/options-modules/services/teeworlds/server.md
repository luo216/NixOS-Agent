---
module: services.teeworlds.server
option_count: 10
source: options.html
---

# services.teeworlds.server

## services.teeworlds.server.enableHighBandwidth

Whether to enable high bandwidth mode on LAN servers. This will double the amount of bandwidth required for running the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.server.enableSpamProtection

Whether to enable chat spam protection. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.server.bindAddr

The address the server will bind to. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.server.hostName

Hostname for the server. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.server.inactivePenalty

Specify what to do when a client goes inactive (see services.teeworlds.server.inactiveTime). spectator: send the client into spectator mode spectator/kick: send the client into a free spectator slot, otherwise kick the client kick: kick the client Type: one of “spectator”, “spectator/kick”, “kick” Default: "spectator/kick" Example: "spectator" Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.server.inactiveTime

The amount of minutes a client has to idle before it is considered inactive. Type: unsigned integer, meaning >=0 Default: 3 Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.server.kickInactiveSpectators

Whether to kick inactive spectators. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.server.maxClients

The maximum amount of clients that can be connected to the server at the same time. Type: unsigned integer, meaning >=0 Default: 12 Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.server.maxClientsPerIP

The maximum amount of clients with the same IP address that can be connected to the server at the same time. Type: unsigned integer, meaning >=0 Default: 12 Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.server.skillLevel

The skill level shown in the server browser. Type: one of “casual”, “normal”, “competitive” Default: "normal" Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>
