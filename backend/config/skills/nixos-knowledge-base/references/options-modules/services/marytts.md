---
module: services.marytts
option_count: 8
source: options.html
---

# services.marytts

## services.marytts.enable

Whether to enable MaryTTS. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/marytts.nix>

## services.marytts.package

The marytts package to use. Type: package Default: pkgs.marytts Declared by: <nixpkgs/nixos/modules/services/audio/marytts.nix>

## services.marytts.basePath

The base path in which MaryTTS runs. Type: absolute path Default: "/var/lib/marytts" Declared by: <nixpkgs/nixos/modules/services/audio/marytts.nix>

## services.marytts.openFirewall

Whether to open the port in the firewall for MaryTTS. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/marytts.nix>

## services.marytts.port

Port to bind the MaryTTS server to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 59125 Declared by: <nixpkgs/nixos/modules/services/audio/marytts.nix>

## services.marytts.settings

Settings for MaryTTS. See the default settings for a list of possible keys. Type: open submodule of attribute set of (string, package, bool, int or float) Default: { } Declared by: <nixpkgs/nixos/modules/services/audio/marytts.nix>

## services.marytts.userDictionaries

Paths to the user dictionary files for MaryTTS. Type: list of absolute path Default: [ ] Example: [ (pkgs.writeTextFile { name = "userdict-en_US"; destination = "/userdict-en_US.txt"; text = '' Nixpkgs | n I k s - ' p { - k @ - dZ @ s ''; }) ] Declared by: <nixpkgs/nixos/modules/services/audio/marytts.nix>

## services.marytts.voices

Paths to the JAR files that contain additional voices for MaryTTS. Voices are automatically detected by MaryTTS, so there is no need to alter your config to make use of new voices. Type: list of absolute path Default: [ ] Example: [ (pkgs.fetchzip { url = "https://github.com/marytts/voice-bits1-hsmm/releases/download/v5.2/voice-bits1-hsmm-5.2.zip"; hash = "sha256-1nK+qZxjumMev7z5lgKr660NCKH5FDwvZ9sw/YYYeaA="; }) ] Declared by: <nixpkgs/nixos/modules/services/audio/marytts.nix>
