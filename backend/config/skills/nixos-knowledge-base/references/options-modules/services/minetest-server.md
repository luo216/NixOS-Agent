---
module: services.minetest-server
option_count: 8
source: options.html
---

# services.minetest-server

## services.minetest-server.enable

If enabled, starts a Minetest Server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/minetest-server.nix>

## services.minetest-server.config

Settings to add to the minetest config file. This option is ignored if configPath is set. Type: attribute set of anything Default: { } Declared by: <nixpkgs/nixos/modules/services/games/minetest-server.nix>

## services.minetest-server.configPath

Path to the config to use. If set to null, the config of the running user will be used: ~/.minetest/minetest.conf. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/games/minetest-server.nix>

## services.minetest-server.extraArgs

Additional command line flags to pass to the minetest executable. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/games/minetest-server.nix>

## services.minetest-server.gameId

Id of the game to use. To list available games run minetestserver --gameid list. If only one game exists, this option can be null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/games/minetest-server.nix>

## services.minetest-server.logPath

Path to logfile for logging. If set to null, logging will be output to stdout which means all output will be caught by systemd. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/games/minetest-server.nix>

## services.minetest-server.port

Port number to bind to. If set to null, the default 30000 will be used. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/games/minetest-server.nix>

## services.minetest-server.world

Name of the world to use. To list available worlds run minetestserver --world list. If only one world exists, this option can be null. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/games/minetest-server.nix>
