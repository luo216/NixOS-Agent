---
module: services.movim.precompressStaticFiles.gzip
option_count: 3
source: options.html
---

# services.movim.precompressStaticFiles.gzip

## services.movim.precompressStaticFiles.gzip.enable

Whether to enable Gzip precompression. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.precompressStaticFiles.gzip.package

The gzip package to use. Type: package Default: pkgs.gzip Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.precompressStaticFiles.gzip.compressionLevel

Gzip compression level Type: integer between 1 and 9 (both inclusive) Default: 9 Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>
