---
module: services.rtorrent
option_count: 11
source: options.html
---

# services.rtorrent

## services.rtorrent.enable

Whether to enable rtorrent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/rtorrent.nix>

## services.rtorrent.package

The rtorrent package to use. Type: package Default: pkgs.rtorrent Declared by: <nixpkgs/nixos/modules/services/torrent/rtorrent.nix>

## services.rtorrent.configText

The content of rtorrent.rc. The modernized configuration template with the values specified in this module will be prepended using mkBefore. You can use mkForce to overwrite the config completely. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/torrent/rtorrent.nix>

## services.rtorrent.dataDir

The directory where rtorrent stores its data files. Type: string Default: "/var/lib/rtorrent" Declared by: <nixpkgs/nixos/modules/services/torrent/rtorrent.nix>

## services.rtorrent.dataPermissions

Unix Permissions in octal on the rtorrent directory. Type: string Default: "0750" Example: "0755" Declared by: <nixpkgs/nixos/modules/services/torrent/rtorrent.nix>

## services.rtorrent.downloadDir

Where to put downloaded files. Type: string Default: "${config.services.rtorrent.dataDir}/download" Declared by: <nixpkgs/nixos/modules/services/torrent/rtorrent.nix>

## services.rtorrent.group

Group under which rtorrent runs. Type: string Default: "rtorrent" Declared by: <nixpkgs/nixos/modules/services/torrent/rtorrent.nix>

## services.rtorrent.openFirewall

Whether to open the firewall for the port in services.rtorrent.port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/rtorrent.nix>

## services.rtorrent.port

The rtorrent port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 50000 Declared by: <nixpkgs/nixos/modules/services/torrent/rtorrent.nix>

## services.rtorrent.rpcSocket

RPC socket path. Type: string (read only) Default: "/run/rtorrent/rpc.sock" Declared by: <nixpkgs/nixos/modules/services/torrent/rtorrent.nix>

## services.rtorrent.user

User account under which rtorrent runs. Type: string Default: "rtorrent" Declared by: <nixpkgs/nixos/modules/services/torrent/rtorrent.nix>
