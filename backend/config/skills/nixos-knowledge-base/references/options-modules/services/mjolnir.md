---
module: services.mjolnir
option_count: 8
source: options.html
---

# services.mjolnir

## services.mjolnir.enable

Whether to enable Mjolnir, a moderation tool for Matrix. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>

## services.mjolnir.accessTokenFile

File containing the matrix access token for the mjolnir user. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>

## services.mjolnir.dataPath

The directory the bot should store various bits of information in. Type: absolute path Default: "/var/lib/mjolnir" Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>

## services.mjolnir.homeserverUrl

Where the homeserver is located (client-server URL). If pantalaimon.enable is true, this option will become the homeserver to which pantalaimon connects. The listen address of pantalaimon will then become the homeserverUrl of mjolnir. Type: string Default: "https://matrix.org" Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>

## services.mjolnir.managementRoom

The room ID where people can use the bot. The bot has no access controls, so anyone in this room can use the bot - secure your room! This should be a room alias or room ID - not a matrix.to URL. Note: mjolnir is fairly verbose - expect a lot of messages from it. Type: string Default: "#moderators:example.org" Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>

## services.mjolnir.pantalaimon

pantalaimon options (enables E2E Encryption support). This will create a pantalaimon instance with the name “mjolnir”. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>

## services.mjolnir.protectedRooms

A list of rooms to protect (matrix.to URLs). Type: list of string Default: [ ] Example: [ "https://matrix.to/#/#yourroom:example.org" "https://matrix.to/#/#anotherroom:example.org" ] Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>

## services.mjolnir.settings

Additional settings (see mjolnir default config for available settings). These settings will override settings made by the module config. Type: YAML 1.1 value Default: { } Example: { autojoinOnlyIfManager = true; automaticallyRedactForReasons = [ "spam" "advertising" ]; } Declared by: <nixpkgs/nixos/modules/services/matrix/mjolnir.nix>
