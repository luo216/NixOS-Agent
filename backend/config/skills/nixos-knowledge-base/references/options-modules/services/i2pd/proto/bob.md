---
module: services.i2pd.proto.bob
option_count: 4
source: options.html
---

# services.i2pd.proto.bob

## services.i2pd.proto.bob.enable

Whether to enable bob. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.bob.address

Bind address for bob endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.bob.name

The endpoint name. Type: string Default: "bob" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.bob.port

Bind port for bob endpoint. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2827 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
