---
module: services.evremap.settings
option_count: 4
source: options.html
---

# services.evremap.settings

## services.evremap.settings.device_name

The name of the device that should be remapped. You can get a list of devices by running evremap list-devices with elevated permissions. Type: string Example: "AT Translated Set 2 keyboard" Declared by: <nixpkgs/nixos/modules/services/misc/evremap.nix>

## services.evremap.settings.dual_role

List of dual-role remappings that output different key sequences based on whether the input key is held or tapped. Type: list of (submodule) Default: [ ] Example: [ { hold = [ "KEY_LEFTCTRL" ]; input = "KEY_CAPSLOCK"; tap = [ "KEY_ESC" ]; } ] Declared by: <nixpkgs/nixos/modules/services/misc/evremap.nix>

## services.evremap.settings.phys

The physical device name to listen on. This attribute may be specified to disambiguate multiple devices with the same device name. The physical device names of each device can be obtained by running evremap list-devices with elevated permissions. Type: null or string Default: null Example: "usb-0000:07:00.3-2.1.1/input0" Declared by: <nixpkgs/nixos/modules/services/misc/evremap.nix>

## services.evremap.settings.remap

List of remappings. Type: list of (submodule) Default: [ ] Example: [ { input = [ "KEY_LEFTALT" "KEY_UP" ]; output = [ "KEY_PAGEUP" ]; } ] Declared by: <nixpkgs/nixos/modules/services/misc/evremap.nix>
