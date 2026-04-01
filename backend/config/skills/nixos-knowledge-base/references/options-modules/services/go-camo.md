---
module: services.go-camo
option_count: 7
source: options.html
---

# services.go-camo

## services.go-camo.enable

Whether to enable go-camo service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/go-camo.nix>

## services.go-camo.extraOptions

Extra options passed to the go-camo command. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/go-camo.nix>

## services.go-camo.keyFile

A file containing the HMAC key to use for signing URLs. The file can contain any string. Can be generated using “openssl rand -base64 18 > the_file”. Type: absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/go-camo.nix>

## services.go-camo.listen

Address:Port to bind to for HTTP (default: 0.0.0.0:8080). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/go-camo.nix>

## services.go-camo.sslCert

Path to TLS certificate. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/go-camo.nix>

## services.go-camo.sslKey

Path to TLS private key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/go-camo.nix>

## services.go-camo.sslListen

Address:Port to bind to for HTTPS. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/go-camo.nix>
