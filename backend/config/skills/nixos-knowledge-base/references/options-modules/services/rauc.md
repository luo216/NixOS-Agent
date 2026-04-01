---
module: services.rauc
option_count: 8
source: options.html
---

# services.rauc

## services.rauc.enable

Whether to enable RAUC A/B update service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>

## services.rauc.package

The rauc package to use. Type: package Default: pkgs.rauc Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>

## services.rauc.bootloader

The bootloader backend for RAUC. Type: one of “barebox”, “grub”, “uboot”, “efi”, “custom”, “noop” Example: "grub" Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>

## services.rauc.bundleFormats

Allowable formats for the RAUC bundle. Type: list of string Default: [ "-plain" "+verity" ] Example: [ "-plain" "+verity" ] Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>

## services.rauc.compatible

The compatibility string for this system. Can be any format so long as you are consistent. Type: string Example: "nix/appliance/foo" Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>

## services.rauc.dataDir

The state directory for RAUC. Type: absolute path Default: "/var/lib/rauc" Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>

## services.rauc.settings

Rauc configuration that will be converted to INI. Refer to: https://rauc.readthedocs.io/en/latest/reference.html#sec-ref-slot-config for details on supported values. All module-specific options override these. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>

## services.rauc.slots

RAUC slot definitions. Every key is a slot class and every value is a list of slot indexes. Type: attribute set of list of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/rauc.nix>
