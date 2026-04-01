---
module: image.repart.compression
option_count: 3
source: options.html
---

# image.repart.compression

## image.repart.compression.enable

Whether to enable Image compression. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.compression.algorithm

Compression algorithm Type: one of “zstd”, “xz”, “zstd-seekable” Default: "zstd" Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.compression.level

Compression level. The available range depends on the used algorithm. Type: signed integer Declared by: <nixpkgs/nixos/modules/image/repart.nix>
