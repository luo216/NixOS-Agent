---
module: hardware.fw-fanctrl.config.strategies.<name>.speedCurve.*
option_count: 2
source: options.html
---

# hardware.fw-fanctrl.config.strategies.<name>.speedCurve.*

## hardware.fw-fanctrl.config.strategies.<name>.speedCurve.*.speed

Percent how fast the fan should run at Type: integer between 0 and 100 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/hardware/fw-fanctrl.nix>

## hardware.fw-fanctrl.config.strategies.<name>.speedCurve.*.temp

Temperature in °C at which the fan speed should be changed Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/hardware/fw-fanctrl.nix>
