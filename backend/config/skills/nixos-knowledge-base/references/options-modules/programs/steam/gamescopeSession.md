---
module: programs.steam.gamescopeSession
option_count: 4
source: options.html
---

# programs.steam.gamescopeSession

## programs.steam.gamescopeSession.enable

Whether to enable GameScope Session. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/steam.nix>

## programs.steam.gamescopeSession.args

Arguments to be passed to GameScope for the session. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/steam.nix>

## programs.steam.gamescopeSession.env

Environmental variables to be passed to GameScope for the session. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/programs/steam.nix>

## programs.steam.gamescopeSession.steamArgs

Arguments to be passed to Steam for the session. Type: list of string Default: [ "-tenfoot" "-pipewire-dmabuf" ] Declared by: <nixpkgs/nixos/modules/programs/steam.nix>
