---
module: services.teeworlds.game
option_count: 14
source: options.html
---

# services.teeworlds.game

## services.teeworlds.game.enablePowerups

Whether to allow powerups such as the ninja. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.enableReadyMode

Whether to enable “ready mode”; where players can pause/unpause the game and start the game in warmup, using their ready state. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.enableTeamDamage

Whether to enable team damage; whether to allow team mates to inflict damage on one another. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.enableVoteKick

Whether to enable voting to kick players. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.gameType

The game type to use on the server. The default gametypes are dm, tdm, ctf, lms, and lts. Type: string Default: "dm" Example: "ctf" Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.map

The map to use on the server. Type: string Default: "dm1" Example: "ctf5" Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.playerSlots

The amount of slots to reserve for players (as opposed to spectators). Type: unsigned integer, meaning >=0 Default: 8 Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.restrictSpectators

Whether to restrict access to information such as health, ammo and armour in spectator mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.scoreLimit

The score limit needed to win a round. Type: unsigned integer, meaning >=0 Default: 20 Example: 400 Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.swapTeams

Whether to swap teams each round. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.timeLimit

Time limit of the game. In cases of equal points, there will be sudden death. Setting this to 0 disables a time limit. Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.tournamentMode

Whether to enable tournament mode. In tournament mode, players join as spectators. If this is set to restrictSpectators, tournament mode is enabled but spectator chat is restricted. Type: one of “disable”, “enable”, “restrictSpectators” Default: "disable" Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.voteKickBanTime

The amount of minutes that a player is banned for if they get kicked by a vote. Type: unsigned integer, meaning >=0 Default: 5 Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.game.voteKickMinimumPlayers

The minimum amount of players required to start a kick vote. Type: unsigned integer, meaning >=0 Default: 5 Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>
