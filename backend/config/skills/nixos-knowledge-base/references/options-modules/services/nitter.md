---
module: services.nitter
option_count: 6
source: options.html
---

# services.nitter

## services.nitter.enable

Whether to enable Nitter, an alternative Twitter front-end. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.package

The nitter package to use. Type: package Default: pkgs.nitter Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.openFirewall

Open ports in the firewall for Nitter web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.redisCreateLocally

Configure local Redis server for Nitter. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.sessionsFile

Path to the session tokens file. This file contains a list of session tokens that can be used to access the instance without logging in. The file is in JSONL format, where each line is a JSON object with the following fields: {“oauth_token”:“some_token”,“oauth_token_secret”:“some_secret_key”} See https://github.com/zedeus/nitter/wiki/Creating-session-tokens for more information on session tokens and how to generate them. Type: absolute path Default: "/var/lib/nitter/sessions.jsonl" Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.settings

Add settings here to override NixOS module generated settings. Check the official repository for the available settings: https://github.com/zedeus/nitter/blob/master/nitter.example.conf Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>
