---
module: hardware.openrazer.batteryNotifier
option_count: 3
source: options.html
---

# hardware.openrazer.batteryNotifier

## hardware.openrazer.batteryNotifier.enable

Mouse battery notifier. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/hardware/openrazer.nix>

## hardware.openrazer.batteryNotifier.frequency

How often battery notifications should be shown (in seconds). A value of 0 disables notifications. Type: signed integer Default: 600 Declared by: <nixpkgs/nixos/modules/hardware/openrazer.nix>

## hardware.openrazer.batteryNotifier.percentage

At what battery percentage the device should reach before sending notifications. Type: signed integer Default: 33 Declared by: <nixpkgs/nixos/modules/hardware/openrazer.nix>
