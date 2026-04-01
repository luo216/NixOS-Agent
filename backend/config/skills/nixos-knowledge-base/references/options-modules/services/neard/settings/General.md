---
module: services.neard.settings.General
option_count: 3
source: options.html
---

# services.neard.settings.General

## services.neard.settings.General.ConstantPoll

Enable constant polling. Constant polling will automatically trigger a new polling loop whenever a tag or a device is no longer in the RF field. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/desktops/neard.nix>

## services.neard.settings.General.DefaultPowered

Automatically turn an adapter on when being discovered. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/neard.nix>

## services.neard.settings.General.ResetOnError

Power cycle the adapter when getting a driver error from the kernel. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/neard.nix>
