---
module: services.airsonic
option_count: 12
source: options.html
---

# services.airsonic

## services.airsonic.enable

Whether to enable Airsonic, the Free and Open Source media streaming server (fork of Subsonic and Libresonic). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>

## services.airsonic.contextPath

The context path, i.e., the last part of the Airsonic URL. Typically ‘/’ or ‘/airsonic’. Default ‘/’ Type: absolute path Default: "/" Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>

## services.airsonic.home

The directory where Airsonic will create files. Make sure it is writable. Type: absolute path Default: "/var/lib/airsonic" Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>

## services.airsonic.jre

The jre8 package to use. ::: {.note} Airsonic only supports Java 8, airsonic-advanced requires at least Java 11. ::: Type: package Default: pkgs.jre8 Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>

## services.airsonic.jvmOptions

Extra command line options for the JVM running AirSonic. Useful for sending jukebox output to non-default alsa devices. Type: list of string Default: [ ] Example: [ "-Djavax.sound.sampled.Clip='#CODEC [plughw:1,0]'" "-Djavax.sound.sampled.Port='#Port CODEC [hw:1]'" "-Djavax.sound.sampled.SourceDataLine='#CODEC [plughw:1,0]'" "-Djavax.sound.sampled.TargetDataLine='#CODEC [plughw:1,0]'" ] Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>

## services.airsonic.listenAddress

The host name or IP address on which to bind Airsonic. The default value is appropriate for first launch, when the default credentials are easy to guess. It is also appropriate if you intend to use the virtualhost option in the service module. In other cases, you may want to change this to a specific IP or 0.0.0.0 to listen on all interfaces. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>

## services.airsonic.maxMemory

The memory limit (max Java heap size) in megabytes. Default: 100 Type: signed integer Default: 100 Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>

## services.airsonic.port

The port on which Airsonic will listen for incoming HTTP traffic. Set to 0 to disable. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4040 Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>

## services.airsonic.transcoders

List of paths to transcoder executables that should be accessible from Airsonic. Symlinks will be created to each executable inside ${config.services.airsonic.home}/transcoders. Type: list of absolute path Default: [ "${pkgs.ffmpeg.bin}/bin/ffmpeg" ] Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>

## services.airsonic.user

User account under which airsonic runs. Type: string Default: "airsonic" Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>

## services.airsonic.virtualHost

Name of the nginx virtualhost to use and setup. If null, do not setup any virtualhost. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>

## services.airsonic.war

Airsonic war file to use. Type: absolute path Default: "${pkgs.airsonic}/webapps/airsonic.war" Declared by: <nixpkgs/nixos/modules/services/misc/airsonic.nix>
