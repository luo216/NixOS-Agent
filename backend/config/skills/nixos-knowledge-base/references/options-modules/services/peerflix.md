---
module: services.peerflix
option_count: 3
source: options.html
---

# services.peerflix

## services.peerflix.enable

Whether to enable peerflix service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/peerflix.nix>

## services.peerflix.downloadDir

Peerflix temporary download directory. Type: absolute path Default: "${config.services.peerflix.stateDir}/torrents" Declared by: <nixpkgs/nixos/modules/services/torrent/peerflix.nix>

## services.peerflix.stateDir

Peerflix state directory. Type: absolute path Default: "/var/lib/peerflix" Declared by: <nixpkgs/nixos/modules/services/torrent/peerflix.nix>
