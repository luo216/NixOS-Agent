---
module: services.iio-niri
option_count: 4
source: options.html
---

# services.iio-niri

## services.iio-niri.enable

Whether to enable IIO-Niri. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/iio-niri.nix>

## services.iio-niri.package

The iio-niri package to use. Type: package Default: pkgs.iio-niri Declared by: <nixpkgs/nixos/modules/services/misc/iio-niri.nix>

## services.iio-niri.extraArgs

Extra arguments to pass to IIO-Niri. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/iio-niri.nix>

## services.iio-niri.niriUnit

The Niri user service unit to bind IIO-Niri’s user service unit to. Type: non-empty string Default: "niri.service" Declared by: <nixpkgs/nixos/modules/services/misc/iio-niri.nix>
