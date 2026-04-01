---
module: services.imaginary
option_count: 4
source: options.html
---

# services.imaginary

## services.imaginary.enable

Whether to enable imaginary image processing microservice. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/imaginary.nix>

## services.imaginary.address

Bind address. Corresponds to the -a flag. Set to "" to bind to all addresses. Type: string Default: "localhost" Example: "[::1]" Declared by: <nixpkgs/nixos/modules/services/networking/imaginary.nix>

## services.imaginary.port

Bind port. Corresponds to the -p flag. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8088 Declared by: <nixpkgs/nixos/modules/services/networking/imaginary.nix>

## services.imaginary.settings

Command line arguments passed to the imaginary executable, stripped of the prefix -. See upstream’s README for all options. Type: open submodule of attribute set of (boolean or signed integer or non-empty (list of string) or string) Declared by: <nixpkgs/nixos/modules/services/networking/imaginary.nix>
