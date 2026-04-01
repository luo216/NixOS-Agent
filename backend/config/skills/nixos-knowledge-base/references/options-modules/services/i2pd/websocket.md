---
module: services.i2pd.websocket
option_count: 4
source: options.html
---

# services.i2pd.websocket

## services.i2pd.websocket.enable

Whether to enable websockets. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.websocket.address

Bind address for websockets endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.websocket.name

The endpoint name. Type: string Default: "websockets" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.websocket.port

Bind port for websockets endpoint. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7666 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
