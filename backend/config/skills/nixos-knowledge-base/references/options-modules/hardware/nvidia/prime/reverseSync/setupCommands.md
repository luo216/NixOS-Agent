---
module: hardware.nvidia.prime.reverseSync.setupCommands
option_count: 1
source: options.html
---

# hardware.nvidia.prime.reverseSync.setupCommands

## hardware.nvidia.prime.reverseSync.setupCommands.enable

Whether to enable configure the display manager to be able to use the outputs attached to the NVIDIA GPU. Disable in order to configure the NVIDIA GPU outputs manually using xrandr. Note that this configuration will only be successful when a display manager for which the services.xserver.displayManager.setupCommands option is supported is used . Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>
