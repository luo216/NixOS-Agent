---
module: hardware.nvidia.gsp
option_count: 1
source: options.html
---

# hardware.nvidia.gsp

## hardware.nvidia.gsp.enable

Whether to enable the GPU System Processor (GSP) on the video card . Type: boolean Default: config.hardware.nvidia.open == true || lib.versionAtLeast config.hardware.nvidia.package.version "555" Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>
