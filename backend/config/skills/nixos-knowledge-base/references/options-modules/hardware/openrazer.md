---
module: hardware.openrazer
option_count: 7
source: options.html
---

# hardware.openrazer

## hardware.openrazer.enable

Whether to enable OpenRazer drivers and userspace daemon . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/openrazer.nix>

## hardware.openrazer.batteryNotifier

Settings for device battery notifications. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/hardware/openrazer.nix>

## hardware.openrazer.devicesOffOnScreensaver

Turn off the devices when the systems screensaver kicks in. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/hardware/openrazer.nix>

## hardware.openrazer.keyStatistics

Collects number of keypresses per hour per key used to generate a heatmap. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/openrazer.nix>

## hardware.openrazer.syncEffectsEnabled

Set the sync effects flag to true so any assignment of effects will work across devices. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/hardware/openrazer.nix>

## hardware.openrazer.users

Usernames to be added to the “openrazer” group, so that they can start and interact with the OpenRazer userspace daemon. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/hardware/openrazer.nix>

## hardware.openrazer.verboseLogging

Whether to enable verbose logging. Logs debug messages. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/openrazer.nix>
