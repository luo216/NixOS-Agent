---
module: programs.opengamepadui.gamescopeSession
option_count: 3
source: options.html
---

# programs.opengamepadui.gamescopeSession

## programs.opengamepadui.gamescopeSession.enable

Whether to enable GameScope Session. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/opengamepadui.nix>

## programs.opengamepadui.gamescopeSession.args

Arguments to be passed to GameScope for the session. Type: list of string Default: [ "--prefer-output" "*,eDP-1" "--xwayland-count" "2" "--default-touch-mode" "4" "--hide-cursor-delay" "3000" "--fade-out-duration" "200" "--steam" ] Declared by: <nixpkgs/nixos/modules/programs/opengamepadui.nix>

## programs.opengamepadui.gamescopeSession.env

Environmental variables to be passed to GameScope for the session. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/programs/opengamepadui.nix>
