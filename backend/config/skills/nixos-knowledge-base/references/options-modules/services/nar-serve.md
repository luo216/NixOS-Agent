---
module: services.nar-serve
option_count: 5
source: options.html
---

# services.nar-serve

## services.nar-serve.enable

Whether to enable serving NAR file contents via HTTP. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nar-serve.nix>

## services.nar-serve.package

The nar-serve package to use. Type: package Default: pkgs.nar-serve Declared by: <nixpkgs/nixos/modules/services/networking/nar-serve.nix>

## services.nar-serve.cacheURL

Binary cache URL to connect to. The URL format is compatible with the nix remote url style, such as: http://, https:// for binary caches via HTTP or HTTPS s3:// for binary caches stored in Amazon S3 gs:// for binary caches stored in Google Cloud Storage Type: string Default: "https://cache.nixos.org/" Declared by: <nixpkgs/nixos/modules/services/networking/nar-serve.nix>

## services.nar-serve.domain

When set, enables the feature of serving <nar-hash>.<domain> on top of <domain>/nix/store/<nar-hash>-<pname>. Useful to preview static websites where paths are absolute. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/nar-serve.nix>

## services.nar-serve.port

Port number where nar-serve will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8383 Declared by: <nixpkgs/nixos/modules/services/networking/nar-serve.nix>
