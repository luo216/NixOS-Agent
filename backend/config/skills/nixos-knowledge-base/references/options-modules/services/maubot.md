---
module: services.maubot
option_count: 8
source: options.html
---

# services.maubot

## services.maubot.enable

Whether to enable maubot. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.package

The maubot package to use. Type: package Default: pkgs.maubot Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.configMutable

Whether maubot should write updated config into extraConfigFile. This will make your Nix module settings have no effect besides the initial config, as extraConfigFile takes precedence over NixOS settings! Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.dataDir

The directory where maubot stores its stateful data. Type: string Default: "/var/lib/maubot" Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.extraConfigFile

A file for storing secrets. You can pass homeserver registration keys here. If it already exists, it must contain server.unshared_secret which is used for signing API keys. If configMutable is not set to true, maubot user must have write access to this file. Type: string Default: "${config.services.maubot.dataDir}/config.yaml" Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.plugins

List of additional maubot plugins to make available. Type: list of package Default: [ ] Example: with config.services.maubot.package.plugins; [ xyz.maubot.reactbot xyz.maubot.rss ]; Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.pythonPackages

List of additional Python packages to make available for maubot. Type: list of package Default: [ ] Example: with pkgs.python3Packages; [ aiohttp ]; Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings

YAML settings for maubot. See the example configuration for more info. Secrets should be passed in by using extraConfigFile. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>
