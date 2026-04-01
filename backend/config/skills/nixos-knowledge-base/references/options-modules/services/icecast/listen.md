---
module: services.icecast.listen
option_count: 2
source: options.html
---

# services.icecast.listen

## services.icecast.listen.address

Address Icecast will listen on. Type: string Default: "::" Declared by: <nixpkgs/nixos/modules/services/audio/icecast.nix>

## services.icecast.listen.port

TCP port that will be used to accept client connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/audio/icecast.nix>
