---
module: services.ergo.listen
option_count: 2
source: options.html
---

# services.ergo.listen

## services.ergo.listen.ip

IP address on which the Ergo node should listen. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/ergo.nix>

## services.ergo.listen.port

Listen port for the Ergo node. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9006 Declared by: <nixpkgs/nixos/modules/services/networking/ergo.nix>
