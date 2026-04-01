---
module: services.minecraft-server
option_count: 9
source: options.html
---

# services.minecraft-server

## services.minecraft-server.enable

If enabled, start a Minecraft Server. The server data will be loaded from and saved to services.minecraft-server.dataDir. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/minecraft-server.nix>

## services.minecraft-server.package

The minecraft-server package to use. Type: package Default: pkgs.minecraft-server Example: pkgs.minecraft-server_1_12_2 Declared by: <nixpkgs/nixos/modules/services/games/minecraft-server.nix>

## services.minecraft-server.dataDir

Directory to store Minecraft database and other state/data files. Type: absolute path Default: "/var/lib/minecraft" Declared by: <nixpkgs/nixos/modules/services/games/minecraft-server.nix>

## services.minecraft-server.declarative

Whether to use a declarative Minecraft server configuration. Only if set to true, the options services.minecraft-server.whitelist and services.minecraft-server.serverProperties will be applied. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/minecraft-server.nix>

## services.minecraft-server.eula

Whether you agree to Mojangs EULA. This option must be set to true to run Minecraft server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/minecraft-server.nix>

## services.minecraft-server.jvmOpts

JVM options for the Minecraft server. Type: strings concatenated with " " Default: "-Xmx2048M -Xms2048M" Example: "-Xms4092M -Xmx4092M -XX:+UseG1GC -XX:+CMSIncrementalPacing -XX:+CMSClassUnloadingEnabled -XX:ParallelGCThreads=2 -XX:MinHeapFreeRatio=5 -XX:MaxHeapFreeRatio=10" Declared by: <nixpkgs/nixos/modules/services/games/minecraft-server.nix>

## services.minecraft-server.openFirewall

Whether to open ports in the firewall for the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/minecraft-server.nix>

## services.minecraft-server.serverProperties

Minecraft server properties for the server.properties file. Only has an effect when services.minecraft-server.declarative is set to true. See https://minecraft.wiki/w/Server.properties#Java_Edition for documentation on these values. Type: attribute set of (boolean or signed integer or string) Default: { } Example: { server-port = 43000; difficulty = 3; gamemode = 1; max-players = 5; motd = "NixOS Minecraft server!"; white-list = true; enable-rcon = true; "rcon.password" = "hunter2"; } Declared by: <nixpkgs/nixos/modules/services/games/minecraft-server.nix>

## services.minecraft-server.whitelist

Whitelisted players, only has an effect when services.minecraft-server.declarative is true and the whitelist is enabled via services.minecraft-server.serverProperties by setting white-list to true. This is a mapping from Minecraft usernames to UUIDs. You can use https://mcuuid.net/ to get a Minecraft UUID for a username. Type: attribute set of Minecraft UUID Default: { } Example: { username1 = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; username2 = "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"; }; Declared by: <nixpkgs/nixos/modules/services/games/minecraft-server.nix>
