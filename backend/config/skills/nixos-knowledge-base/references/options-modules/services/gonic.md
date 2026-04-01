---
module: services.gonic
option_count: 3
source: options.html
---

# services.gonic

## services.gonic.enable

Whether to enable Gonic music server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/gonic.nix>

## services.gonic.package

The gonic package to use. Type: package Default: pkgs.gonic Declared by: <nixpkgs/nixos/modules/services/audio/gonic.nix>

## services.gonic.settings

Configuration for Gonic, see https://github.com/sentriz/gonic#configuration-options for supported values. Type: attribute set of (atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { cache-path = "/var/cache/gonic"; listen-addr = "127.0.0.1:4747"; tls-cert = null; tls-key = null; } Example: { music-path = [ "/mnt/music" ]; playlists-path = "/mnt/playlists"; podcast-path = "/mnt/podcasts"; } Declared by: <nixpkgs/nixos/modules/services/audio/gonic.nix>
