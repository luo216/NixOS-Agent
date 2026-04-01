---
module: services.i2pd.proto.httpProxy
option_count: 6
source: options.html
---

# services.i2pd.proto.httpProxy

## services.i2pd.proto.httpProxy.enable

Whether to enable httpproxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.httpProxy.address

Bind address for httpproxy endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.httpProxy.keys

File to persist HTTPPROXY keys. Type: null or string Default: "httpproxy-keys.dat" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.httpProxy.name

The endpoint name. Type: string Default: "httpproxy" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.httpProxy.outproxy

Upstream outproxy bind address. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.httpProxy.port

Bind port for httpproxy endpoint. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4444 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
