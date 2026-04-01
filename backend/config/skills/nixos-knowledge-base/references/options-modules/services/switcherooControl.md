---
module: services.switcherooControl
option_count: 2
source: options.html
---

# services.switcherooControl

## services.switcherooControl.enable

Whether to enable switcheroo-control, a D-Bus service to check the availability of dual-GPU. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/switcheroo-control.nix>

## services.switcherooControl.package

The switcheroo-control package to use. Type: package Default: pkgs.switcheroo-control Declared by: <nixpkgs/nixos/modules/hardware/video/switcheroo-control.nix>
