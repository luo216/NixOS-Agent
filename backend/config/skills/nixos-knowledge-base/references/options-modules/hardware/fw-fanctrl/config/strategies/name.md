---
module: hardware.fw-fanctrl.config.strategies.<name>
option_count: 3
source: options.html
---

# hardware.fw-fanctrl.config.strategies.<name>

## hardware.fw-fanctrl.config.strategies.<name>.fanSpeedUpdateFrequency

How often the fan speed should be updated in seconds Type: unsigned integer, meaning >=0 Default: 5 Declared by: <nixpkgs/nixos/modules/hardware/fw-fanctrl.nix>

## hardware.fw-fanctrl.config.strategies.<name>.movingAverageInterval

Interval (seconds) of the last temperatures to use to calculate the average temperature Type: unsigned integer, meaning >=0 Default: 25 Declared by: <nixpkgs/nixos/modules/hardware/fw-fanctrl.nix>

## hardware.fw-fanctrl.config.strategies.<name>.speedCurve

How should the speed curve look like Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/hardware/fw-fanctrl.nix>
