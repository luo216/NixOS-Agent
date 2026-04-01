---
module: services.kismet.httpd
option_count: 3
source: options.html
---

# services.kismet.httpd

## services.kismet.httpd.enable

True to enable the HTTP server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>

## services.kismet.httpd.address

The address to listen on. Note that this cannot be a hostname or Kismet will not start. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>

## services.kismet.httpd.port

The port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2501 Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>
