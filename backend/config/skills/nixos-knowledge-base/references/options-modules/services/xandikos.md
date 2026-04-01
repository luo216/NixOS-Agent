---
module: services.xandikos
option_count: 7
source: options.html
---

# services.xandikos

## services.xandikos.enable

Whether to enable Xandikos CalDAV and CardDAV server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/xandikos.nix>

## services.xandikos.package

The xandikos package to use. Type: package Default: pkgs.xandikos Declared by: <nixpkgs/nixos/modules/services/networking/xandikos.nix>

## services.xandikos.address

The IP address on which Xandikos will listen. By default listens on localhost. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/networking/xandikos.nix>

## services.xandikos.extraOptions

Extra command line arguments to pass to xandikos. Type: list of string Default: [ ] Example: [ "--autocreate" "--defaults" "--current-user-principal user" "--dump-dav-xml" ] Declared by: <nixpkgs/nixos/modules/services/networking/xandikos.nix>

## services.xandikos.nginx

Configuration for nginx reverse proxy. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/xandikos.nix>

## services.xandikos.port

The port of the Xandikos web application Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/networking/xandikos.nix>

## services.xandikos.routePrefix

Path to Xandikos. Useful when Xandikos is behind a reverse proxy. Type: string Default: "/" Declared by: <nixpkgs/nixos/modules/services/networking/xandikos.nix>
