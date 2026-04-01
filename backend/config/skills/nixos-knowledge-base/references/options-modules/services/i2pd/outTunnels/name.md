---
module: services.i2pd.outTunnels.<name>
option_count: 8
source: options.html
---

# services.i2pd.outTunnels.<name>

## services.i2pd.outTunnels.<name>.enable

Whether to enable ‹name›. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.outTunnels.<name>.address

Bind address for ‹name› endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.outTunnels.<name>.destination

Remote endpoint, I2P hostname or b32.i2p address. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.outTunnels.<name>.destinationPort

Connect to particular port at destination. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.outTunnels.<name>.keys

Keyset used for tunnel identity. Type: string Default: "‹name›-keys.dat" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.outTunnels.<name>.name

The endpoint name. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.outTunnels.<name>.port

Bind port for ‹name› endpoint. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.outTunnels.<name>.type

Tunnel type. Type: one of “client”, “udpclient” Default: "client" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
