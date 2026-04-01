---
module: services.hddfancontrol
option_count: 3
source: options.html
---

# services.hddfancontrol

## services.hddfancontrol.enable

Whether to enable hddfancontrol daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/hddfancontrol.nix>

## services.hddfancontrol.package

The hddfancontrol package to use. Type: package Default: pkgs.hddfancontrol Declared by: <nixpkgs/nixos/modules/services/hardware/hddfancontrol.nix>

## services.hddfancontrol.settings

Parameter-sets for each instance of hddfancontrol. Type: attribute set of (submodule) Default: { } Example: { harddrives = { disks = [ "/dev/sda" "/dev/sdb" "/dev/sdc" ]; pwmPaths = [ "/sys/class/hwmon/hwmon1/pwm1:25:10" ]; logVerbosity = "DEBUG"; }; ssddrives = { disks = [ "/dev/sdd" "/dev/sde" "/dev/sdf" ]; pwmPaths = [ "/sys/class/hwmon/hwmon1/pwm2:25:10" ]; extraArgs = [ "--interval=30s" ]; }; } Declared by: <nixpkgs/nixos/modules/services/hardware/hddfancontrol.nix>
