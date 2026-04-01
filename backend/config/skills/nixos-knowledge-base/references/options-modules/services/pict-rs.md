---
module: services.pict-rs
option_count: 7
source: options.html
---

# services.pict-rs

## services.pict-rs.enable

Whether to enable pict-rs server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pict-rs.nix>

## services.pict-rs.package

The pict-rs package to use. Type: package Default: pkgs.pict-rs Declared by: <nixpkgs/nixos/modules/services/web-apps/pict-rs.nix>

## services.pict-rs.address

The IPv4 address to deploy the service to. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/pict-rs.nix>

## services.pict-rs.dataDir

The directory where to store the uploaded images & database. Type: absolute path Default: "/var/lib/pict-rs" Declared by: <nixpkgs/nixos/modules/services/web-apps/pict-rs.nix>

## services.pict-rs.port

The port which to bind the service to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/pict-rs.nix>

## services.pict-rs.repoPath

The directory where to store the database. This option takes precedence over dataDir. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/pict-rs.nix>

## services.pict-rs.storePath

The directory where to store the uploaded images. This option takes precedence over dataDir. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/pict-rs.nix>
