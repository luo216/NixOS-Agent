---
module: services.rqbit
option_count: 9
source: options.html
---

# services.rqbit

## services.rqbit.enable

Whether to enable rqbit BitTorrent daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/rqbit.nix>

## services.rqbit.package

The rqbit package to use. Type: package Default: pkgs.rqbit Declared by: <nixpkgs/nixos/modules/services/torrent/rqbit.nix>

## services.rqbit.downloadDir

Directory where to download torrents. Type: absolute path Default: "/var/lib/rqbit/downloads" Example: "/mnt/storage/torrents" Declared by: <nixpkgs/nixos/modules/services/torrent/rqbit.nix>

## services.rqbit.group

Group account under which rqbit runs. Type: string Default: "rqbit" Declared by: <nixpkgs/nixos/modules/services/torrent/rqbit.nix>

## services.rqbit.httpHost

The listen host for the HTTP API. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/torrent/rqbit.nix>

## services.rqbit.httpPort

The listen port for the HTTP API. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3030 Declared by: <nixpkgs/nixos/modules/services/torrent/rqbit.nix>

## services.rqbit.openFirewall

Whether to enable opening of the HTTP and Peer ports in the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/rqbit.nix>

## services.rqbit.peerPort

The port to listen for incoming BitTorrent peer connections (TCP and uTP). Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4240 Declared by: <nixpkgs/nixos/modules/services/torrent/rqbit.nix>

## services.rqbit.user

User account under which rqbit runs. Type: string Default: "rqbit" Declared by: <nixpkgs/nixos/modules/services/torrent/rqbit.nix>
