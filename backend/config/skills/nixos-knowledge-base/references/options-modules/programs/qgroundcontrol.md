---
module: programs.qgroundcontrol
option_count: 3
source: options.html
---

# programs.qgroundcontrol

## programs.qgroundcontrol.enable

Whether to enable qgroundcontrol. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/qgroundcontrol.nix>

## programs.qgroundcontrol.package

The qgroundcontrol package to use. Type: package Default: pkgs.qgroundcontrol Declared by: <nixpkgs/nixos/modules/programs/qgroundcontrol.nix>

## programs.qgroundcontrol.blacklistModemManagerFromTTYUSB

Disallow ModemManager from interfering with serial connections that QGroundControl might use. Note that if you use a modem that’s connected via USB, you might want to disable this option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/qgroundcontrol.nix>
