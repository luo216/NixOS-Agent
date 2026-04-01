---
module: services.vdr
option_count: 7
source: options.html
---

# services.vdr

## services.vdr.enable

Whether to enable VDR, a video disk recorder. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/vdr.nix>

## services.vdr.enableLirc

Whether to enable LIRC. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/vdr.nix>

## services.vdr.package

The vdr package to use. Type: package Default: pkgs.vdr Example: wrapVdr.override { plugins = with pkgs.vdrPlugins; [ hello ]; } Declared by: <nixpkgs/nixos/modules/services/hardware/vdr.nix>

## services.vdr.extraArguments

Additional command line arguments to pass to VDR. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/vdr.nix>

## services.vdr.group

Group under which the VDRvdr service runs. Type: string Default: "vdr" Declared by: <nixpkgs/nixos/modules/services/hardware/vdr.nix>

## services.vdr.user

User under which the VDR service runs. Type: string Default: "vdr" Declared by: <nixpkgs/nixos/modules/services/hardware/vdr.nix>

## services.vdr.videoDir

Recording directory Type: absolute path Default: "/srv/vdr/video" Declared by: <nixpkgs/nixos/modules/services/hardware/vdr.nix>
