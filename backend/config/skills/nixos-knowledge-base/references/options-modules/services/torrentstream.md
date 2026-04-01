---
module: services.torrentstream
option_count: 5
source: options.html
---

# services.torrentstream

## services.torrentstream.enable

Whether to enable TorrentStream daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/torrentstream.nix>

## services.torrentstream.package

The torrentstream package to use. Type: package Default: pkgs.torrentstream Declared by: <nixpkgs/nixos/modules/services/torrent/torrentstream.nix>

## services.torrentstream.address

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/torrent/torrentstream.nix>

## services.torrentstream.openFirewall

Open ports in the firewall for TorrentStream daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/torrentstream.nix>

## services.torrentstream.port

TorrentStream port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5082 Declared by: <nixpkgs/nixos/modules/services/torrent/torrentstream.nix>
