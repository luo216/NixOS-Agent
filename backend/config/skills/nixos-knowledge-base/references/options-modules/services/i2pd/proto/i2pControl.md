---
module: services.i2pd.proto.i2pControl
option_count: 4
source: options.html
---

# services.i2pd.proto.i2pControl

## services.i2pd.proto.i2pControl.enable

Whether to enable i2pcontrol. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.i2pControl.address

Bind address for i2pcontrol endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.i2pControl.name

The endpoint name. Type: string Default: "i2pcontrol" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.i2pControl.port

Bind port for i2pcontrol endpoint. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7650 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
