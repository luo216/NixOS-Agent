---
module: programs.appimage
option_count: 3
source: options.html
---

# programs.appimage

## programs.appimage.enable

Whether to enable appimage-run wrapper script for executing appimages on NixOS. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/appimage.nix>

## programs.appimage.package

The appimage-run package to use. Type: package Default: pkgs.appimage-run Example: pkgs.appimage-run.override { extraPkgs = pkgs: [ pkgs.ffmpeg pkgs.imagemagick ]; } Declared by: <nixpkgs/nixos/modules/programs/appimage.nix>

## programs.appimage.binfmt

Whether to enable binfmt registration to run appimages via appimage-run seamlessly. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/appimage.nix>
