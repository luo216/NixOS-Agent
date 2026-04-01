---
module: services.snapserver.settings.http
option_count: 4
source: options.html
---

# services.snapserver.settings.http

## services.snapserver.settings.http.enabled

Whether to enable the HTTP JSON-RPC. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>

## services.snapserver.settings.http.bind_to_address

Address to listen on for snapclient connections. Type: unspecified value Default: "::" Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>

## services.snapserver.settings.http.doc_root

Path to serve from the HTTP servers root. Type: null or absolute path Default: pkgs.snapweb Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>

## services.snapserver.settings.http.port

Port to listen on for snapclient connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1780 Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>
