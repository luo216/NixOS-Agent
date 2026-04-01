---
module: services.pid-fan-controller
option_count: 2
source: options.html
---

# services.pid-fan-controller

## services.pid-fan-controller.enable

Whether to enable the PID fan controller, which controls the configured fans by running a closed-loop PID control loop. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>

## services.pid-fan-controller.package

The pid-fan-controller package to use. Type: package Default: pkgs.pid-fan-controller Declared by: <nixpkgs/nixos/modules/services/hardware/pid-fan-controller.nix>
