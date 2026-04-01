---
module: services.hardware.deepcool-digital-linux
option_count: 3
source: options.html
---

# services.hardware.deepcool-digital-linux

## services.hardware.deepcool-digital-linux.enable

Whether to enable DeepCool Digital monitoring daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/deepcool-digital-linux.nix>

## services.hardware.deepcool-digital-linux.package

The deepcool-digital-linux package to use. Type: package Default: pkgs.deepcool-digital-linux Declared by: <nixpkgs/nixos/modules/services/hardware/deepcool-digital-linux.nix>

## services.hardware.deepcool-digital-linux.extraArgs

Extra command line arguments to be passed to the deepcool-digital-linux daemon. Type: list of string Default: [ ] Example: [ # Change the update interval "--update 750" # Enable the alarm "--alarm" ] Declared by: <nixpkgs/nixos/modules/services/hardware/deepcool-digital-linux.nix>
