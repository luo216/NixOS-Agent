---
module: services.i2pd.proto.socksProxy
option_count: 8
source: options.html
---

# services.i2pd.proto.socksProxy

## services.i2pd.proto.socksProxy.enable

Whether to enable socksproxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.socksProxy.address

Bind address for socksproxy endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.socksProxy.keys

File to persist SOCKSPROXY keys. Type: null or string Default: "socksproxy-keys.dat" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.socksProxy.name

The endpoint name. Type: string Default: "socksproxy" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.socksProxy.outproxy

Upstream outproxy bind address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.socksProxy.outproxyEnable

Whether to enable SOCKS outproxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.socksProxy.outproxyPort

Upstream outproxy bind port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4444 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.socksProxy.port

Bind port for socksproxy endpoint. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4447 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
