---
module: services.pid-fan-controller.settings
option_count: 3
source: options.html
---

# services.pid-fan-controller.settings

## services.pid-fan-controller.settings.fans

List of fans to be controlled. Type: list of (submodule) Example: '' [ { wildcardPath = "/sys/devices/platform/nct6775.2592/hwmon/hwmon*/pwm1"; minPwm = 60; maxPwm = 255; heatPressureSrcs = [ "cpu" "gpu" ]; } ]; '' Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>

## services.pid-fan-controller.settings.heatSources

List of heat sources to be monitored. Type: list of (submodule) Example: '' [ { name = "cpu"; wildcardPath = "/sys/devices/pci0000:00/0000:00:18.3/hwmon/hwmon*/temp1_input"; pidParams = { setPoint = 60; P = -5.0e-3; I = -2.0e-3; D = -6.0e-3; }; } ]; '' Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>

## services.pid-fan-controller.settings.interval

Interval between controller cycles in milliseconds. Type: signed integer Default: 500 Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>
