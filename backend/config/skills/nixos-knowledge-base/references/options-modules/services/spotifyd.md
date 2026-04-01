---
module: services.spotifyd
option_count: 3
source: options.html
---

# services.spotifyd

## services.spotifyd.enable

Whether to enable spotifyd, a Spotify playing daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/spotifyd.nix>

## services.spotifyd.config

(Deprecated) Configuration for Spotifyd. For syntax and directives, see https://docs.spotifyd.rs/configuration/index.html#config-file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/audio/spotifyd.nix>

## services.spotifyd.settings

Configuration for Spotifyd. For syntax and directives, see https://docs.spotifyd.rs/configuration/index.html#config-file. Type: TOML value Default: { } Example: { global = { bitrate = 320; }; } Declared by: <nixpkgs/nixos/modules/services/audio/spotifyd.nix>
