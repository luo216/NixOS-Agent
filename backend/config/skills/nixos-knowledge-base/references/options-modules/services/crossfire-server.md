---
module: services.crossfire-server
option_count: 6
source: options.html
---

# services.crossfire-server

## services.crossfire-server.enable

If enabled, the Crossfire game server will be started at boot. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/crossfire-server.nix>

## services.crossfire-server.package

The crossfire-server package to use. ::: {.note} This will also be used for map/arch data, if you don’t change dataDir ::: Type: package Default: pkgs.crossfire-server Declared by: <nixpkgs/nixos/modules/services/games/crossfire-server.nix>

## services.crossfire-server.configFiles

Text to append to the corresponding configuration files. Note that the files given in the example are not the complete set of files available to customize; look in /etc/crossfire after enabling the server to see the available files, and read the comments in each file for detailed documentation on the format and what settings are available. Note that the motd, rules, and news files, if configured here, will overwrite the example files that come with the server, rather than being appended to them as the other configuration files are. Type: attribute set of string Default: { } Example: { dm_file = '' admin:secret_password:localhost alice:xyzzy:* ''; ban_file = '' # Bob is a jerk bob@* # So is everyone on 192.168.86.255/24 *@192.168.86. ''; metaserver2 = '' metaserver2_notification on localhostname crossfire.example.net ''; motd = "Welcome to CrossFire!"; news = "No news yet."; rules = "Don't be a jerk."; settings = '' # be nicer to newbies and harsher to experienced players balanced_stat_loss true # don't let players pick up and use admin-created items real_wiz false ''; } Declared by: <nixpkgs/nixos/modules/services/games/crossfire-server.nix>

## services.crossfire-server.dataDir

Where to load readonly data from – maps, archetypes, treasure tables, and the like. If you plan to edit the data on the live server (rather than overlaying the crossfire-maps and crossfire-arch packages and nixos-rebuilding), point this somewhere read-write and copy the data there before starting the server. Type: string Default: "${config.services.crossfire.package}/share/crossfire" Declared by: <nixpkgs/nixos/modules/services/games/crossfire-server.nix>

## services.crossfire-server.openFirewall

Whether to open ports in the firewall for the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/crossfire-server.nix>

## services.crossfire-server.stateDir

Where to store runtime data (save files, persistent items, etc). If left at the default, this will be automatically created on server startup if it does not already exist. If changed, it is the admin’s responsibility to make sure that the directory exists and is writeable by the crossfire user. Type: string Default: "/var/lib/crossfire" Declared by: <nixpkgs/nixos/modules/services/games/crossfire-server.nix>
