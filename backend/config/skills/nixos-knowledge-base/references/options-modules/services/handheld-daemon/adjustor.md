---
module: services.handheld-daemon.adjustor
option_count: 3
source: options.html
---

# services.handheld-daemon.adjustor

## services.handheld-daemon.adjustor.enable

Whether to enable Handheld Daemon TDP control plugin. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/handheld-daemon.nix>

## services.handheld-daemon.adjustor.package

The adjustor package to use. Type: package Default: pkgs.adjustor Declared by: <nixpkgs/nixos/modules/services/hardware/handheld-daemon.nix>

## services.handheld-daemon.adjustor.loadAcpiCallModule

Whether to load the acpi_call kernel module. Required for TDP control by adjustor on most devices. Type: boolean Declared by: <nixpkgs/nixos/modules/services/hardware/handheld-daemon.nix>
