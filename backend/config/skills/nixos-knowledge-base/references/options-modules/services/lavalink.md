---
module: services.lavalink
option_count: 14
source: options.html
---

# services.lavalink

## services.lavalink.enable

Whether to enable Lavalink. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.enableHttp2

Whether to enable HTTP/2 support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.package

The lavalink package to use. Type: package Default: pkgs.lavalink Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.address

The network address to bind to. Type: string Default: "0.0.0.0" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.environmentFile

Add custom environment variables from a file. See https://lavalink.dev/configuration/index.html#example-environment-variables for the full documentation. Type: null or string Default: null Example: "/run/secrets/lavalink/passwordEnvFile" Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.extraConfig

Configuration to write to application.yml. See https://lavalink.dev/configuration/#example-applicationyml for the full documentation. Individual configuration parameters can be overwritten using environment variables. See https://lavalink.dev/configuration/#example-environment-variables for more information. Type: open submodule of (YAML 1.1 value) Default: { } Example: { lavalink.server = { sources.twitch = true; filters.volume = true; }; logging.file.path = "./logs/"; } Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.group

The group of the service. Type: string Default: "lavalink" Example: "medias" Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.home

The home directory for lavalink. Type: string Default: "/var/lib/lavalink" Example: "/home/lavalink" Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.jvmArgs

Set custom JVM arguments. Type: string Default: "-Xmx4G" Example: "-Djava.io.tmpdir=/var/lib/lavalink/tmp -Xmx6G" Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.openFirewall

Whether to expose the port to the network. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.password

The password for Lavalink’s authentication in plain text. Type: null or string Default: null Example: "s3cRe!p4SsW0rD" Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.plugins

A list of plugins for lavalink. Type: list of (submodule) Default: [ ] Example: [ { dependency = "dev.lavalink.youtube:youtube-plugin:1.8.0"; repository = "https://maven.lavalink.dev/snapshots"; hash = lib.fakeHash; configName = "youtube"; extraConfig = { enabled = true; allowSearch = true; allowDirectVideoIds = true; allowDirectPlaylistIds = true; }; } ] Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.port

The port that Lavalink will use. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2333 Example: 4567 Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>

## services.lavalink.user

The user of the service. Type: string Default: "lavalink" Example: "root" Declared by: <nixpkgs/nixos/modules/services/audio/lavalink.nix>
