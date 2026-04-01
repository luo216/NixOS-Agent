---
module: services.ncps
option_count: 5
source: options.html
---

# services.ncps

## services.ncps.enable

Whether to enable ncps: Nix binary cache proxy service implemented in Go. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.package

The ncps package to use. Type: package Default: pkgs.ncps Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.dbmatePackage

The dbmate package to use. Type: package Default: pkgs.dbmate Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.logLevel

Set the level for logging. Refer to https://pkg.go.dev/github.com/rs/zerolog#readme-leveled-logging for more information. Type: one of “trace”, “debug”, “info”, “warn”, “error”, “fatal”, “panic” Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.netrcFile

The path to netrc file for upstream authentication. When unspecified ncps will look for ``$HOME/.netrc`. Type: null or string Default: null Example: "/etc/nix/netrc" Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>
