---
module: image
option_count: 5
source: options.html
---

# image

## image.baseName

Basename of the image filename without any extension (e.g. image_1). Type: string Default: nixos-image-${config.system.nixos.label}-${pkgs.stdenv.hostPlatform.system} Declared by: <nixpkgs/nixos/modules/image/file-options.nix>

## image.extension

Extension of the image filename (e.g. raw). Type: string Declared by: <nixpkgs/nixos/modules/image/file-options.nix>

## image.fileName

Filename of the image including all extensions (e.g image_1.raw or image_1.raw.zst). Type: string Default: ${config.image.baseName}.${config.image.extension} Declared by: <nixpkgs/nixos/modules/image/file-options.nix>

## image.filePath

Path of the image, relative to $out in system.build.image. While it defaults to config.image.fileName, it can be different for builders where the image is in sub directory, such as iso, sd-card or kexec images. Type: string Default: config.image.fileName Declared by: <nixpkgs/nixos/modules/image/file-options.nix>

## image.modules

image-specific NixOS Modules used for system.build.images. Type: attribute set of module Declared by: <nixpkgs/nixos/modules/image/images.nix>
