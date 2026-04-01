---
module: services.freeciv.settings
option_count: 11
source: options.html
---

# services.freeciv.settings

## services.freeciv.settings.Announce

Announce game in LAN using given protocol. Type: one of “IPv4”, “IPv6”, “none” Default: "none" Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.settings.Database

Enable database connection with given configuration. Type: null or string Default: '' [fcdb] backend="sqlite" database="/var/lib/freeciv/auth.sqlite" '' Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.settings.Guests

Whether to enable guests to login if auth is enabled. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.settings.Newusers

Whether to enable new users to login if auth is enabled. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.settings.auth

Whether to enable server authentication. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.settings.debug

Set debug log level. Type: integer between 0 and 3 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.settings.exit-on-end

Whether to enable exit instead of restarting when a game ends. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.settings.port

Listen for clients on given port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5556 Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.settings.quitidle

Quit if no players for given time in seconds. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.settings.read

Startup script. Type: strings concatenated with “\n” Default: '' /fcdb lua sqlite_createdb() '' Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>

## services.freeciv.settings.saves

Save games to given directory, a sub-directory named after the starting date of the service will me inserted to preserve older saves. Type: null or string Default: "/var/lib/freeciv/saves/" Declared by: <nixpkgs/nixos/modules/services/games/freeciv.nix>
