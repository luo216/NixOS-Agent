---
module: hardware.uni-sync.devices.*
option_count: 3
source: options.html
---

# hardware.uni-sync.devices.*

## hardware.uni-sync.devices.*.channels

List of channels connected to the controller. Type: list of (submodule) Default: [ ] Example: [ { mode = "PWM"; } { mode = "Manual"; speed = 100; } { mode = "Manual"; speed = 54; } { mode = "Manual"; speed = 0; } ] Declared by: <nixpkgs/nixos/modules/hardware/uni-sync.nix>

## hardware.uni-sync.devices.*.device_id

Unique device ID displayed at each startup. Type: string Example: "VID:1111/PID:11111/SN:1111111111" Declared by: <nixpkgs/nixos/modules/hardware/uni-sync.nix>

## hardware.uni-sync.devices.*.sync_rgb

Enable ARGB header sync. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/uni-sync.nix>
