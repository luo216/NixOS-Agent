---
module: services.mchprs.settings
option_count: 10
source: options.html
---

# services.mchprs.settings

## services.mchprs.settings.address

Address for the server. Please use enclosing square brackets when using ipv6. Only has effect when services.mchprs.declarativeSettings is true. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.settings.auto_redpiler

Use redpiler automatically. Only has effect when services.mchprs.declarativeSettings is true. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.settings.block_in_hitbox

Allow placing blocks inside of players (hitbox logic is simplified). Only has effect when services.mchprs.declarativeSettings is true. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.settings.bungeecord

Enable compatibility with BungeeCord. Only has effect when services.mchprs.declarativeSettings is true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.settings.chat_format

How to format chat message interpolating username and message with curly braces. Only has effect when services.mchprs.declarativeSettings is true. Type: string Default: "<{username}> {message}" Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.settings.max_players

Maximum number of simultaneous players. Only has effect when services.mchprs.declarativeSettings is true. Type: positive integer, meaning >0 Default: 99999 Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.settings.motd

Message of the day. Only has effect when services.mchprs.declarativeSettings is true. Type: string Default: "Minecraft High Performance Redstone Server" Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.settings.port

Port for the server. Only has effect when services.mchprs.declarativeSettings is true. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25565 Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.settings.schemati

Mimic the verification and directory layout used by the Open Redstone Engineers Schemati plugin. Only has effect when services.mchprs.declarativeSettings is true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.settings.view_distance

Maximal distance (in chunks) between players and loaded chunks. Only has effect when services.mchprs.declarativeSettings is true. Type: positive integer, meaning >0 Default: 8 Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>
