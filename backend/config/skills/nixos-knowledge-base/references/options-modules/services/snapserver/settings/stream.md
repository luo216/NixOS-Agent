---
module: services.snapserver.settings.stream
option_count: 3
source: options.html
---

# services.snapserver.settings.stream

## services.snapserver.settings.stream.bind_to_address

Address to listen on for snapclient connections. Type: unspecified value Default: "::" Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>

## services.snapserver.settings.stream.port

Port to listen on for snapclient connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1704 Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>

## services.snapserver.settings.stream.source

One or multiple URIs to PCM inpuit streams. Type: string or list of string Example: "pipe:///tmp/snapfifo?name=default" Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>
