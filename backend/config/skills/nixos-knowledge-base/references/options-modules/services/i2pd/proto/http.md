---
module: services.i2pd.proto.http
option_count: 9
source: options.html
---

# services.i2pd.proto.http

## services.i2pd.proto.http.enable

Whether to enable http. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.http.address

Bind address for http endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.http.auth

Whether to enable webconsole authentication. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.http.hostname

Expected hostname for WebUI. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.http.name

The endpoint name. Type: string Default: "http" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.http.pass

Password for webconsole access. Type: string Default: "i2pd" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.http.port

Bind port for http endpoint. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7070 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.http.strictHeaders

Enable strict host checking on WebUI. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.proto.http.user

Username for webconsole access Type: string Default: "i2pd" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
