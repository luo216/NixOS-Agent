---
module: hardware.nvidia.modesetting
option_count: 1
source: options.html
---

# hardware.nvidia.modesetting

## hardware.nvidia.modesetting.enable

Whether to enable kernel modesetting when using the NVIDIA proprietary driver. Enabling this fixes screen tearing when using Optimus via PRIME (see hardware.nvidia.prime.sync.enable. This is not enabled by default because it is not officially supported by NVIDIA and would not work with SLI. Enabling this and using version 545 or newer of the proprietary NVIDIA driver causes it to provide its own framebuffer device, which can cause Wayland compositors to work when they otherwise wouldn’t. . Type: boolean Default: lib.versionAtLeast cfg.package.version "535" Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>
