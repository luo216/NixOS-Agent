---
module: services.yarr
option_count: 7
source: options.html
---

# services.yarr

## services.yarr.enable

Whether to enable Yet another rss reader. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/yarr.nix>

## services.yarr.package

The yarr package to use. Type: package Default: pkgs.yarr Declared by: <nixpkgs/nixos/modules/services/misc/yarr.nix>

## services.yarr.address

Address to run server on. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/yarr.nix>

## services.yarr.authFilePath

Path to a file containing username:password. null means no authentication required to use the service. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/yarr.nix>

## services.yarr.baseUrl

Base path of the service url. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/yarr.nix>

## services.yarr.environmentFile

Environment file for specifying additional settings such as secrets. See yarr -help for all available options. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/yarr.nix>

## services.yarr.port

Port to run server on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7070 Declared by: <nixpkgs/nixos/modules/services/misc/yarr.nix>
