---
module: services.pid-fan-controller.settings.fans.*
option_count: 5
source: options.html
---

# services.pid-fan-controller.settings.fans.*

## services.pid-fan-controller.settings.fans.*.cutoff

Whether to stop the fan when minPwm is reached. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>

## services.pid-fan-controller.settings.fans.*.heatPressureSrcs

Heat pressure sources affected by the fan. Type: non-empty (list of string) Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>

## services.pid-fan-controller.settings.fans.*.maxPwm

Maximum PWM value. Type: 8 bit unsigned integer; between 0 and 255 (both inclusive) Default: 255 Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>

## services.pid-fan-controller.settings.fans.*.minPwm

Minimum PWM value. Type: 8 bit unsigned integer; between 0 and 255 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>

## services.pid-fan-controller.settings.fans.*.wildcardPath

Wildcard path of the hwmon pwm file. If the fans are not to be found in /sys/class/hwmon/hwmon* the corresponding kernel module (like nct6775) needs to be added to boot.kernelModules. See the hwmon Documentation. Type: string Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>
