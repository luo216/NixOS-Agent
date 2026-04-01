---
module: hardware.sensor.hddtemp
option_count: 5
source: options.html
---

# hardware.sensor.hddtemp

## hardware.sensor.hddtemp.enable

Enable this option to support HDD/SSD temperature sensors. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/sensor/hddtemp.nix>

## hardware.sensor.hddtemp.dbEntries

Additional DB entries Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/hardware/sensor/hddtemp.nix>

## hardware.sensor.hddtemp.drives

List of drives to monitor. If you pass /dev/disk/by-path/* entries the symlinks will be resolved as hddtemp doesn’t like names with colons. Type: list of string Declared by: <nixpkgs/nixos/modules/hardware/sensor/hddtemp.nix>

## hardware.sensor.hddtemp.extraArgs

Additional arguments passed to the daemon. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/hardware/sensor/hddtemp.nix>

## hardware.sensor.hddtemp.unit

Celsius or Fahrenheit Type: one of “C”, “F” Default: "C" Declared by: <nixpkgs/nixos/modules/hardware/sensor/hddtemp.nix>
