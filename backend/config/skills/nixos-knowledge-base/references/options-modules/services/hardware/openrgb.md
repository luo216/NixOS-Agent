---
module: services.hardware.openrgb
option_count: 4
source: options.html
---

# services.hardware.openrgb

## services.hardware.openrgb.enable

Whether to enable OpenRGB server, for RGB lighting control. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/openrgb.nix>

## services.hardware.openrgb.package

The openrgb package to use. Type: package Default: pkgs.openrgb Declared by: <nixpkgs/nixos/modules/services/hardware/openrgb.nix>

## services.hardware.openrgb.motherboard

CPU family of motherboard. Allows for addition motherboard i2c support. Type: null or one of “amd”, “intel” Default: if config.hardware.cpu.intel.updateMicrocode then “intel” else if config.hardware.cpu.amd.updateMicrocode then “amd” else null; Declared by: <nixpkgs/nixos/modules/services/hardware/openrgb.nix>

## services.hardware.openrgb.startupProfile

The profile file to load from “/var/lib/OpenRGB” at startup. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/openrgb.nix>
