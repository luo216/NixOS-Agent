---
module: services.pdns-recursor.api
option_count: 3
source: options.html
---

# services.pdns-recursor.api

## services.pdns-recursor.api.address

IP address Recursor REST API server will bind to. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.api.allowFrom

IP address ranges of clients allowed to make API requests. Type: list of string Default: [ "127.0.0.1" "::1" ] Example: [ "0.0.0.0/0" "::/0" ] Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.api.port

Port number Recursor REST API server will bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8082 Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>
