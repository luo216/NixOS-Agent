---
module: services.flood
option_count: 6
source: options.html
---

# services.flood

## services.flood.enable

Whether to enable flood. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/flood.nix>

## services.flood.package

The flood package to use. Type: package Default: pkgs.flood Declared by: <nixpkgs/nixos/modules/services/torrent/flood.nix>

## services.flood.extraArgs

Extra arguments passed to flood. Type: list of string Default: [ ] Example: [ "--baseuri=/" ] Declared by: <nixpkgs/nixos/modules/services/torrent/flood.nix>

## services.flood.host

Host to bind webserver. Type: string Default: "localhost" Example: "::" Declared by: <nixpkgs/nixos/modules/services/torrent/flood.nix>

## services.flood.openFirewall

Whether to open the firewall for the port in services.flood.port. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/flood.nix>

## services.flood.port

Port to bind webserver. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Example: 3001 Declared by: <nixpkgs/nixos/modules/services/torrent/flood.nix>
