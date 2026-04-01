---
module: services.movim.precompressStaticFiles.brotli
option_count: 3
source: options.html
---

# services.movim.precompressStaticFiles.brotli

## services.movim.precompressStaticFiles.brotli.enable

Whether to enable Brotli precompression. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.precompressStaticFiles.brotli.package

The brotli package to use. Type: package Default: pkgs.brotli Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.precompressStaticFiles.brotli.compressionLevel

Brotli compression level Type: integer between 0 and 11 (both inclusive) Default: 11 Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>
