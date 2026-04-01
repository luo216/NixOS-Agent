---
module: services.thermald
option_count: 5
source: options.html
---

# services.thermald

## services.thermald.enable

Whether to enable thermald, the temperature management daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/thermald.nix>

## services.thermald.package

The thermald package to use. Type: package Default: pkgs.thermald Declared by: <nixpkgs/nixos/modules/services/hardware/thermald.nix>

## services.thermald.configFile

The thermald manual configuration file. Leave unspecified to run with the --adaptive flag instead which will have thermald use your computer’s DPTF adaptive tables. See man thermald for more information. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/thermald.nix>

## services.thermald.debug

Whether to enable debug logging. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/thermald.nix>

## services.thermald.ignoreCpuidCheck

Whether to ignore the cpuid check to allow running on unsupported platforms Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/thermald.nix>
