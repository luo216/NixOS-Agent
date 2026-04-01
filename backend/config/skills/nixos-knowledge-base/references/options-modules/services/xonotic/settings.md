---
module: services.xonotic.settings
option_count: 7
source: options.html
---

# services.xonotic.settings

## services.xonotic.settings.hostname

The name that will appear in the server list. $g_xonoticversion gets replaced with the current version. Type: (optionally newline-terminated) single-line string Default: "Xonotic $g_xonoticversion Server" Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.settings.maxplayers

Number of player slots on the server, including spectators. Type: signed integer Default: 16 Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.settings.net_address

The address Xonotic will listen on. Type: (optionally newline-terminated) single-line string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.settings.port

The port Xonotic will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 26000 Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.settings.sv_motd

Text displayed when players join the server. Type: (optionally newline-terminated) single-line string Default: "" Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.settings.sv_public

Controls whether the server will be publicly listed. Type: signed integer Default: 0 Example: [ -1 1 ] Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.settings.sv_termsofservice_url

URL for the Terms of Service for playing on your server. Type: (optionally newline-terminated) single-line string Default: "" Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>
