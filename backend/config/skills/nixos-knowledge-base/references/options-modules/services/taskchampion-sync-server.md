---
module: services.taskchampion-sync-server
option_count: 9
source: options.html
---

# services.taskchampion-sync-server

## services.taskchampion-sync-server.enable

Whether to enable TaskChampion Sync Server for Taskwarrior 3. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/taskchampion-sync-server.nix>

## services.taskchampion-sync-server.package

The taskchampion-sync-server package to use. Type: package Default: pkgs.taskchampion-sync-server Declared by: <nixpkgs/nixos/modules/services/misc/taskchampion-sync-server.nix>

## services.taskchampion-sync-server.allowClientIds

Client IDs to allow (can be repeated; if not specified, all clients are allowed) Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/taskchampion-sync-server.nix>

## services.taskchampion-sync-server.dataDir

Directory in which to store data Type: absolute path Default: "/var/lib/taskchampion-sync-server" Declared by: <nixpkgs/nixos/modules/services/misc/taskchampion-sync-server.nix>

## services.taskchampion-sync-server.group

Unix Group to run the server under Type: string Default: "taskchampion" Declared by: <nixpkgs/nixos/modules/services/misc/taskchampion-sync-server.nix>

## services.taskchampion-sync-server.host

Host address on which to serve Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/taskchampion-sync-server.nix>

## services.taskchampion-sync-server.openFirewall

Whether to enable Open firewall port for taskchampion-sync-server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/taskchampion-sync-server.nix>

## services.taskchampion-sync-server.port

Port on which to serve Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10222 Declared by: <nixpkgs/nixos/modules/services/misc/taskchampion-sync-server.nix>

## services.taskchampion-sync-server.user

Unix User to run the server under Type: string Default: "taskchampion" Declared by: <nixpkgs/nixos/modules/services/misc/taskchampion-sync-server.nix>
