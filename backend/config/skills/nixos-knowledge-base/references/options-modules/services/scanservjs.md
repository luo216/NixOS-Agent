---
module: services.scanservjs
option_count: 7
source: options.html
---

# services.scanservjs

## services.scanservjs.enable

Whether to enable scanservjs. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/scanservjs.nix>

## services.scanservjs.extraActions

Actions to add to config.local.js’s actions. Type: list of strings concatenated with “\n” Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/scanservjs.nix>

## services.scanservjs.extraConfig

Extra code to add to config.local.js’s afterConfig. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/scanservjs.nix>

## services.scanservjs.extraDevicesConfig

Extra code to add to config.local.js’s afterDevices. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/scanservjs.nix>

## services.scanservjs.runAfterScan

Extra code to add to config.local.js’s afterScan. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/scanservjs.nix>

## services.scanservjs.settings

Config to set in config.local.js’s afterConfig. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/scanservjs.nix>

## services.scanservjs.stateDir

State directory for scanservjs. Type: string Default: "/var/lib/scanservjs" Declared by: <nixpkgs/nixos/modules/services/hardware/scanservjs.nix>
