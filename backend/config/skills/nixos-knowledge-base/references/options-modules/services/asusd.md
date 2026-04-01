---
module: services.asusd
option_count: 9
source: options.html
---

# services.asusd

## services.asusd.enable

Whether to enable the asusd service for ASUS ROG laptops. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/asusd.nix>

## services.asusd.enableUserService

Activate the asusd-user service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/asusd.nix>

## services.asusd.package

The asusctl package to use. Type: package Default: pkgs.asusctl Declared by: <nixpkgs/nixos/modules/services/hardware/asusd.nix>

## services.asusd.animeConfig

The content of /etc/asusd/anime.ron. See https://asus-linux.org/manual/asusctl-manual/#anime-control. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/asusd.nix>

## services.asusd.asusdConfig

The content of /etc/asusd/asusd.ron. See https://asus-linux.org/manual/asusctl-manual/. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/asusd.nix>

## services.asusd.auraConfigs

The content of /etc/asusd/aura_<name>.ron. See https://asus-linux.org/manual/asusctl-manual/#led-keyboard-control. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/asusd.nix>

## services.asusd.fanCurvesConfig

The content of /etc/asusd/fan_curves.ron. See https://asus-linux.org/manual/asusctl-manual/#fan-curves. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/asusd.nix>

## services.asusd.profileConfig

The content of /etc/asusd/profile.ron. See https://asus-linux.org/manual/asusctl-manual/#profiles. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/asusd.nix>

## services.asusd.userLedModesConfig

The content of /etc/asusd/asusd-user-ledmodes.ron. See https://asus-linux.org/manual/asusctl-manual/#led-keyboard-control. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/asusd.nix>
