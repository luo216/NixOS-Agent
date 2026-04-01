---
module: services.terraria
option_count: 12
source: options.html
---

# services.terraria

## services.terraria.enable

If enabled, starts a Terraria server. The server can be connected to via tmux -S ${config.services.terraria.dataDir}/terraria.sock attach for administration by users who are a part of the terraria group (use C-b d shortcut to detach again). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>

## services.terraria.autoCreatedWorldSize

Specifies the size of the auto-created world if worldPath does not point to an existing world. Type: one of “small”, “medium”, “large” Default: "medium" Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>

## services.terraria.banListPath

The path to the ban list. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>

## services.terraria.dataDir

Path to variable state data directory for terraria. Type: string Default: "/var/lib/terraria" Example: "/srv/terraria" Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>

## services.terraria.maxPlayers

Sets the max number of players (between 1 and 255). Type: 8 bit unsigned integer; between 0 and 255 (both inclusive) Default: 255 Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>

## services.terraria.messageOfTheDay

Set the server message of the day text. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>

## services.terraria.noUPnP

Disables automatic Universal Plug and Play. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>

## services.terraria.openFirewall

Whether to open ports in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>

## services.terraria.password

Sets the server password. Leave null for no password. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>

## services.terraria.port

Specifies the port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7777 Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>

## services.terraria.secure

Adds additional cheat protection to the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>

## services.terraria.worldPath

The path to the world file (.wld) which should be loaded. If no world exists at this path, one will be created with the size specified by autoCreatedWorldSize. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/games/terraria.nix>
