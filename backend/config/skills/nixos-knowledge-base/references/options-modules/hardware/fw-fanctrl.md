---
module: hardware.fw-fanctrl
option_count: 5
source: options.html
---

# hardware.fw-fanctrl

## hardware.fw-fanctrl.enable

Whether to enable the fw-fanctrl systemd service and install the needed packages. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/fw-fanctrl.nix>

## hardware.fw-fanctrl.package

The fw-fanctrl package to use. Type: package Default: pkgs.fw-fanctrl Declared by: <nixpkgs/nixos/modules/hardware/fw-fanctrl.nix>

## hardware.fw-fanctrl.config

Additional config entries for the fw-fanctrl service (documentation: https://github.com/TamtamHero/fw-fanctrl/blob/main/doc/configuration.md) Type: open submodule of attribute set of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/hardware/fw-fanctrl.nix>

## hardware.fw-fanctrl.disableBatteryTempCheck

Disable checking battery temperature sensor Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/fw-fanctrl.nix>

## hardware.fw-fanctrl.ectoolPackage

The fw-ectool package to use. Type: package Default: pkgs.fw-ectool Declared by: <nixpkgs/nixos/modules/hardware/fw-fanctrl.nix>
