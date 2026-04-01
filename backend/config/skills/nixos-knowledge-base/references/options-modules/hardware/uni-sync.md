---
module: hardware.uni-sync
option_count: 3
source: options.html
---

# hardware.uni-sync

## hardware.uni-sync.enable

Whether to enable udev rules and software for Lian Li Uni Controllers. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/uni-sync.nix>

## hardware.uni-sync.package

The uni-sync package to use. Type: package Default: pkgs.uni-sync Declared by: <nixpkgs/nixos/modules/hardware/uni-sync.nix>

## hardware.uni-sync.devices

List of controllers with their configurations. Type: list of (submodule) Default: [ ] Example: [ { device_id = "VID:1111/PID:11111/SN:1111111111"; sync_rgb = true; channels = [ { mode = "PWM"; } { mode = "Manual"; speed = 100; } { mode = "Manual"; speed = 54; } { mode = "Manual"; speed = 0; } ]; } { device_id = "VID:1010/PID:10101/SN:1010101010"; sync_rgb = false; channels = [ { mode = "Manual"; speed = 0; } ]; } ] Declared by: <nixpkgs/nixos/modules/hardware/uni-sync.nix>
