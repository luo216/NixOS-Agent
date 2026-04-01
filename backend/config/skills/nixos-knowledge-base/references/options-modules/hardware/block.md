---
module: hardware.block
option_count: 3
source: options.html
---

# hardware.block

## hardware.block.defaultScheduler

Default block I/O scheduler. Unless null, the value is assigned through a udev rule matching all block devices. Type: null or udev rule value Default: null Example: "kyber" Declared by: <nixpkgs/nixos/modules/hardware/iosched.nix>

## hardware.block.defaultSchedulerExclude

Device name pattern to exclude from default scheduler assignment through config.hardware.block.defaultScheduler and config.hardware.block.defaultSchedulerRotational. By default this excludes loop devices which generally do not benefit from extra I/O scheduling in addition to the scheduling already performed for their backing devices. This setting does not affect config.hardware.block.scheduler. Type: null or udev rule value Default: "loop[0-9]*" Declared by: <nixpkgs/nixos/modules/hardware/iosched.nix>

## hardware.block.defaultSchedulerRotational

Default block I/O scheduler for rotational drives (e.g. hard disks). Unless null, the value is assigned through a udev rule matching all rotational block devices. This option takes precedence over config.hardware.block.defaultScheduler. Type: null or udev rule value Default: null Example: "bfq" Declared by: <nixpkgs/nixos/modules/hardware/iosched.nix>
