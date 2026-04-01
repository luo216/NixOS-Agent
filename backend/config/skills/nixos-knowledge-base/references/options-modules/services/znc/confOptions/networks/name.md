---
module: services.znc.confOptions.networks.<name>
option_count: 8
source: options.html
---

# services.znc.confOptions.networks.<name>

## services.znc.confOptions.networks.<name>.channels

IRC channels to join. Type: list of string Default: [ ] Example: [ "nixos" ] Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.networks.<name>.extraConf

Extra config for the network. Consider using services.znc.config instead. Type: strings concatenated with “\n” Default: "" Example: '' Encoding = ^UTF-8 FloodBurst = 4 FloodRate = 1.00 IRCConnectEnabled = true Ident = johntron JoinDelay = 0 Nick = johntron '' Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.networks.<name>.hasBitlbeeControlChannel

Whether to add the special Bitlbee operations channel. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.networks.<name>.modules

ZNC network modules to load. Type: list of string Default: [ "simple_away" ] Example: [ "simple_away" "sasl" ] Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.networks.<name>.password

IRC server password, such as for a Slack gateway. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.networks.<name>.port

IRC server port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6697 Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.networks.<name>.server

IRC server address. Type: string Example: "irc.libera.chat" Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.networks.<name>.useSSL

Whether to use SSL to connect to the IRC server. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>
