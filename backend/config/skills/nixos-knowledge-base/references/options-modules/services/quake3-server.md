---
module: services.quake3-server
option_count: 6
source: options.html
---

# services.quake3-server

## services.quake3-server.enable

Whether to enable Quake 3 dedicated server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/quake3-server.nix>

## services.quake3-server.package

The ioquake3 package to use. Type: package Default: pkgs.ioquake3 Declared by: <nixpkgs/nixos/modules/services/games/quake3-server.nix>

## services.quake3-server.baseq3

Path to the baseq3 files (pak*.pk3). If this is on the nix store (type = package) all .pk3 files should be saved in the top-level directory. If this is on another filesystem (e.g /var/lib/baseq3) the .pk3 files are searched in $baseq3/.q3a/baseq3/ Type: package or absolute path Default: Manually downloaded Quake 3 installation directory. Example: "/var/lib/q3ds" Declared by: <nixpkgs/nixos/modules/services/games/quake3-server.nix>

## services.quake3-server.extraConfig

Extra configuration options. Note that options changed via RCON will not be persisted. To list all possible options, use “cvarlist 1” via RCON. Type: strings concatenated with “\n” Default: "" Example: '' seta rconPassword "superSecret" // sets RCON password for remote console seta sv_hostname "My Quake 3 server" // name that appears in server list '' Declared by: <nixpkgs/nixos/modules/services/games/quake3-server.nix>

## services.quake3-server.openFirewall

Open the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/quake3-server.nix>

## services.quake3-server.port

UDP Port the server should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 27960 Declared by: <nixpkgs/nixos/modules/services/games/quake3-server.nix>
