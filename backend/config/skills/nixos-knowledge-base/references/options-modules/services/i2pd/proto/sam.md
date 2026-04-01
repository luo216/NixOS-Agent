---
module: services.i2pd.proto.sam
option_count: 4
source: options.html
---

# services.i2pd.proto.sam

## services.i2pd.proto.sam.enable

Whether to enable sam. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.sam.address

Bind address for sam endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.sam.name

The endpoint name. Type: string Default: "sam" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.sam.port

Bind port for sam endpoint. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7656 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
