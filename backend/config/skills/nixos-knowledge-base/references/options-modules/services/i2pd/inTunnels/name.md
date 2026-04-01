---
module: services.i2pd.inTunnels.<name>
option_count: 8
source: options.html
---

# services.i2pd.inTunnels.<name>

## services.i2pd.inTunnels.<name>.enable

Whether to enable ‹name›. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.inTunnels.<name>.accessList

I2P nodes that are allowed to connect to this service. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.inTunnels.<name>.address

Bind address for ‹name› endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.inTunnels.<name>.inPort

Service port. Default to the tunnel’s listen port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.inTunnels.<name>.keys

Keyset used for tunnel identity. Type: string Default: "‹name›-keys.dat" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.inTunnels.<name>.name

The endpoint name. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.inTunnels.<name>.port

Bind port for ‹name› endpoint. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.inTunnels.<name>.type

Tunnel type. Type: one of “server”, “http”, “irc”, “udpserver” Default: "server" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
