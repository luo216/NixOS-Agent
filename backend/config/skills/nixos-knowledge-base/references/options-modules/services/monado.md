---
module: services.monado
option_count: 5
source: options.html
---

# services.monado

## services.monado.enable

Whether to enable Monado user service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/monado.nix>

## services.monado.package

The monado package to use. Type: package Default: pkgs.monado Declared by: <nixpkgs/nixos/modules/services/hardware/monado.nix>

## services.monado.defaultRuntime

Whether to enable Monado as the default OpenXR runtime on the system. Note that applications can bypass this option by setting an active runtime in a writable XDG_CONFIG_DIRS location like ~/.config. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/monado.nix>

## services.monado.forceDefaultRuntime

Whether to ensure that Monado is the active runtime set for the current user. This replaces the file XDG_CONFIG_HOME/openxr/1/active_runtime.json when starting the service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/monado.nix>

## services.monado.highPriority

Whether to enable high priority capability for monado-service. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/monado.nix>
