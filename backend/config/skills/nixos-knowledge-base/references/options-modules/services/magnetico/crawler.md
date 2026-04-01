---
module: services.magnetico.crawler
option_count: 5
source: options.html
---

# services.magnetico.crawler

## services.magnetico.crawler.address

Address to be used for indexing DHT nodes. Type: string Default: "0.0.0.0" Example: "1.2.3.4" Declared by: <nixpkgs/nixos/modules/services/torrent/magnetico.nix>

## services.magnetico.crawler.extraOptions

Extra command line arguments to pass to magneticod. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/torrent/magnetico.nix>

## services.magnetico.crawler.maxLeeches

Maximum number of simultaneous leeches. Type: positive integer, meaning >0 Default: 200 Declared by: <nixpkgs/nixos/modules/services/torrent/magnetico.nix>

## services.magnetico.crawler.maxNeighbors

Maximum number of simultaneous neighbors of an indexer. Be careful changing this number: high values can very easily cause your network to be congested or even crash your router. Type: positive integer, meaning >0 Default: 1000 Declared by: <nixpkgs/nixos/modules/services/torrent/magnetico.nix>

## services.magnetico.crawler.port

Port to be used for indexing DHT nodes. This port should be added to networking.firewall.allowedTCPPorts. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/torrent/magnetico.nix>
