---
module: services.redlib
option_count: 6
source: options.html
---

# services.redlib

## services.redlib.enable

Whether to enable Private front-end for Reddit. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/redlib.nix>

## services.redlib.package

The redlib package to use. Type: package Default: pkgs.redlib Declared by: <nixpkgs/nixos/modules/services/misc/redlib.nix>

## services.redlib.address

The address to listen on Type: string Default: "0.0.0.0" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/redlib.nix>

## services.redlib.openFirewall

Open ports in the firewall for the redlib web interface Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/redlib.nix>

## services.redlib.port

The port to listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 8000 Declared by: <nixpkgs/nixos/modules/services/misc/redlib.nix>

## services.redlib.settings

See GitHub for available settings. Type: open submodule of attribute set of (null or boolean or signed integer or string) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/redlib.nix>
