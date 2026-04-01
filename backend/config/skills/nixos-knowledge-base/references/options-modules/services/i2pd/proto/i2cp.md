---
module: services.i2pd.proto.i2cp
option_count: 4
source: options.html
---

# services.i2pd.proto.i2cp

## services.i2pd.proto.i2cp.enable

Whether to enable i2cp. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.i2cp.address

Bind address for i2cp endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.i2cp.name

The endpoint name. Type: string Default: "i2cp" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.i2cp.port

Bind port for i2cp endpoint. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7654 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
