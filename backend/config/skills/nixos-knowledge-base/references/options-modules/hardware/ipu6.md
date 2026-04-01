---
module: hardware.ipu6
option_count: 2
source: options.html
---

# hardware.ipu6

## hardware.ipu6.enable

Whether to enable support for Intel IPU6/MIPI cameras. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/webcam/ipu6.nix>

## hardware.ipu6.platform

Choose the version for your hardware platform. Use ipu6 for Tiger Lake, ipu6ep for Alder Lake or Raptor Lake, and ipu6epmtl for Meteor Lake. Type: one of “ipu6”, “ipu6ep”, “ipu6epmtl” Declared by: <nixpkgs/nixos/modules/hardware/video/webcam/ipu6.nix>
