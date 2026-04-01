---
module: hardware.nvidia.prime.sync
option_count: 1
source: options.html
---

# hardware.nvidia.prime.sync

## hardware.nvidia.prime.sync.enable

Whether to enable NVIDIA Optimus support using the NVIDIA proprietary driver via PRIME. If enabled, the NVIDIA GPU will be always on and used for all rendering, while enabling output to displays attached only to the integrated Intel/AMD GPU without a multiplexer. Note that this option only has any effect if the “nvidia” driver is specified in services.xserver.videoDrivers, and it should preferably be the only driver there. If this is enabled, then the bus IDs of the NVIDIA and Intel/AMD GPUs have to be specified (hardware.nvidia.prime.nvidiaBusId and hardware.nvidia.prime.intelBusId or hardware.nvidia.prime.amdgpuBusId). If you enable this, you may want to also enable kernel modesetting for the NVIDIA driver (hardware.nvidia.modesetting.enable) in order to prevent tearing. Note that this configuration will only be successful when a display manager for which the services.xserver.displayManager.setupCommands option is supported is used . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>
