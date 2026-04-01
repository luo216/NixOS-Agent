---
module: services.snapserver.settings.tcp
option_count: 3
source: options.html
---

# services.snapserver.settings.tcp

## services.snapserver.settings.tcp.enabled

Whether to enable the TCP JSON-RPC. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>

## services.snapserver.settings.tcp.bind_to_address

Address to listen on for snapclient connections. Type: unspecified value Default: "::" Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>

## services.snapserver.settings.tcp.port

Port to listen on for snapclient connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1705 Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>
