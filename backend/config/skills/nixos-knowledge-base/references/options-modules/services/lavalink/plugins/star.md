---
module: services.lavalink.plugins.*
option_count: 5
source: options.html
---

# services.lavalink.plugins.*

## services.lavalink.plugins.*.configName

The name of the plugin to use as the key for the plugin configuration. Type: null or string Default: null Example: "youtube" Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.plugins.*.dependency

The coordinates of the plugin. Type: string Example: "dev.lavalink.youtube:youtube-plugin:1.8.0" Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.plugins.*.extraConfig

The configuration for the plugin. The services.lavalink.plugins.*.configName option must be set. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.plugins.*.hash

The hash of the plugin. Type: string Example: "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.plugins.*.repository

The plugin repository. Defaults to the lavalink releases repository. To use the snapshots repository, use https://maven.lavalink.dev/snapshots instead Type: string Default: "https://maven.lavalink.dev/releases" Example: "https://maven.example.com/releases" Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>
