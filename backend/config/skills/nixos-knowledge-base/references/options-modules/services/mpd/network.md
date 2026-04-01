---
module: services.mpd.network
option_count: 2
source: options.html
---

# services.mpd.network

## services.mpd.network.listenAddress

The address for the daemon to listen on. Use any to listen on all addresses. Type: string Default: "127.0.0.1" Example: "any" Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.network.port

This setting is the TCP port that is desired for the daemon to get assigned to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6600 Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>
