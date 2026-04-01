---
module: services.ympd.mpd
option_count: 2
source: options.html
---

# services.ympd.mpd

## services.ympd.mpd.host

The host where MPD is listening. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/audio/ympd.nix>

## services.ympd.mpd.port

The port where MPD is listening. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: config.services.mpd.network.port Example: 6600 Declared by: <nixpkgs/nixos/modules/services/audio/ympd.nix>
