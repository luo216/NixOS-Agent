---
module: services.ergo.api.listen
option_count: 2
source: options.html
---

# services.ergo.api.listen

## services.ergo.api.listen.ip

IP address that the Ergo node API should listen on if api.keyHash is defined. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/ergo.nix>

## services.ergo.api.listen.port

Listen port for the API endpoint if api.keyHash is defined. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9052 Declared by: <nixpkgs/nixos/modules/services/networking/ergo.nix>
