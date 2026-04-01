---
module: services.matterbridge
option_count: 6
source: options.html
---

# services.matterbridge

## services.matterbridge.enable

Whether to enable Matterbridge chat platform bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/matterbridge.nix>

## services.matterbridge.package

The matterbridge package to use. Type: package Default: pkgs.matterbridge Declared by: <nixpkgs/nixos/modules/services/networking/matterbridge.nix>

## services.matterbridge.configFile

WARNING: THIS IS INSECURE, as your password will end up in /nix/store, thus publicly readable. Use services.matterbridge.configPath instead. The matterbridge configuration file in the TOML file format. Type: string Example: '' # WARNING: as this file contains credentials, do not use this option! # It is kept only for backwards compatibility, and would cause your # credentials to be in the nix-store, thus with the world-readable # permission bits. # Use services.matterbridge.configPath instead. [irc] [irc.libera] Server="irc.libera.chat:6667" Nick="matterbot" [mattermost] [mattermost.work] # Do not prefix it with http:// or https:// Server="yourmattermostserver.domain" Team="yourteam" Login="yourlogin" Password="yourpass" PrefixMessagesWithNick=true [[gateway]] name="gateway1" enable=true [[gateway.inout]] account="irc.libera" channel="#testing" [[gateway.inout]] account="mattermost.work" channel="off-topic" '' Declared by: <nixpkgs/nixos/modules/services/networking/matterbridge.nix>

## services.matterbridge.configPath

The path to the matterbridge configuration file. Type: null or string Default: null Example: "/etc/nixos/matterbridge.toml" Declared by: <nixpkgs/nixos/modules/services/networking/matterbridge.nix>

## services.matterbridge.group

Group which runs the matterbridge service. Type: string Default: "matterbridge" Declared by: <nixpkgs/nixos/modules/services/networking/matterbridge.nix>

## services.matterbridge.user

User which runs the matterbridge service. Type: string Default: "matterbridge" Declared by: <nixpkgs/nixos/modules/services/networking/matterbridge.nix>
