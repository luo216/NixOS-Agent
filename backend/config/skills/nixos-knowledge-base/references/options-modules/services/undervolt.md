---
module: services.undervolt
option_count: 12
source: options.html
---

# services.undervolt

## services.undervolt.enable

Whether to enable Undervolting service for Intel CPUs. Warning: This service is not endorsed by Intel and may permanently damage your hardware. Use at your own risk . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>

## services.undervolt.package

The undervolt package to use. Type: package Default: pkgs.undervolt Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>

## services.undervolt.analogioOffset

The amount of voltage in mV to offset analogio by. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>

## services.undervolt.coreOffset

The amount of voltage in mV to offset the CPU cores by. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>

## services.undervolt.gpuOffset

The amount of voltage in mV to offset the GPU by. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>

## services.undervolt.temp

The temperature target in Celsius degrees. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>

## services.undervolt.tempAc

The temperature target on AC power in Celsius degrees. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>

## services.undervolt.tempBat

The temperature target on battery power in Celsius degrees. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>

## services.undervolt.turbo

Changes the Intel Turbo feature status (1 is disabled and 0 is enabled). Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>

## services.undervolt.uncoreOffset

The amount of voltage in mV to offset uncore by. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>

## services.undervolt.useTimer

Whether to set a timer that applies the undervolt settings every 30s. This will cause spam in the journal but might be required for some hardware under specific conditions. Enable this if your undervolt settings don’t hold. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>

## services.undervolt.verbose

Whether to enable verbose logging. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/undervolt.nix>
