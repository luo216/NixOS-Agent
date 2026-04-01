---
module: services.subsonic
option_count: 11
source: options.html
---

# services.subsonic

## services.subsonic.enable

Whether to enable Subsonic daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/subsonic.nix>

## services.subsonic.contextPath

The context path, i.e., the last part of the Subsonic URL. Typically ‘/’ or ‘/subsonic’. Default ‘/’ Type: absolute path Default: "/" Declared by: <nixpkgs/nixos/modules/services/misc/subsonic.nix>

## services.subsonic.defaultMusicFolder

Configure Subsonic to use this folder for music. This option only has effect the first time Subsonic is started. Type: absolute path Default: "/var/music" Declared by: <nixpkgs/nixos/modules/services/misc/subsonic.nix>

## services.subsonic.defaultPlaylistFolder

Configure Subsonic to use this folder for playlists. This option only has effect the first time Subsonic is started. Type: absolute path Default: "/var/playlists" Declared by: <nixpkgs/nixos/modules/services/misc/subsonic.nix>

## services.subsonic.defaultPodcastFolder

Configure Subsonic to use this folder for Podcasts. This option only has effect the first time Subsonic is started. Type: absolute path Default: "/var/music/Podcast" Declared by: <nixpkgs/nixos/modules/services/misc/subsonic.nix>

## services.subsonic.home

The directory where Subsonic will create files. Make sure it is writable. Type: absolute path Default: "/var/lib/subsonic" Declared by: <nixpkgs/nixos/modules/services/misc/subsonic.nix>

## services.subsonic.httpsPort

The port on which Subsonic will listen for incoming HTTPS traffic. Set to 0 to disable. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/misc/subsonic.nix>

## services.subsonic.listenAddress

The host name or IP address on which to bind Subsonic. Only relevant if you have multiple network interfaces and want to make Subsonic available on only one of them. The default value will bind Subsonic to all available network interfaces. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/subsonic.nix>

## services.subsonic.maxMemory

The memory limit (max Java heap size) in megabytes. Default: 100 Type: signed integer Default: 100 Declared by: <nixpkgs/nixos/modules/services/misc/subsonic.nix>

## services.subsonic.port

The port on which Subsonic will listen for incoming HTTP traffic. Set to 0 to disable. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4040 Declared by: <nixpkgs/nixos/modules/services/misc/subsonic.nix>

## services.subsonic.transcoders

List of paths to transcoder executables that should be accessible from Subsonic. Symlinks will be created to each executable inside ${config.services.subsonic.home}/transcoders. Type: list of absolute path Default: [ "${pkgs.ffmpeg.bin}/bin/ffmpeg" ] Declared by: <nixpkgs/nixos/modules/services/misc/subsonic.nix>
