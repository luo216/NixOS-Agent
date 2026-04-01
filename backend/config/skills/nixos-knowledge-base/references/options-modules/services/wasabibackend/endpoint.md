---
module: services.wasabibackend.endpoint
option_count: 2
source: options.html
---

# services.wasabibackend.endpoint

## services.wasabibackend.endpoint.ip

IP address for P2P connection to bitcoind. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>

## services.wasabibackend.endpoint.port

Port for P2P connection to bitcoind. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8333 Declared by: <nixpkgs/nixos/modules/services/networking/wasabibackend.nix>
