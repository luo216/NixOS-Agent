---
module: hardware.nvidia.prime.offload
option_count: 3
source: options.html
---

# hardware.nvidia.prime.offload

## hardware.nvidia.prime.offload.enable

Whether to enable render offload support using the NVIDIA proprietary driver via PRIME. If this is enabled, then the bus IDs of the NVIDIA and Intel/AMD GPUs have to be specified (hardware.nvidia.prime.nvidiaBusId and hardware.nvidia.prime.intelBusId or hardware.nvidia.prime.amdgpuBusId) . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.prime.offload.enableOffloadCmd

Whether to enable adding a nvidia-offload convenience script to environment.systemPackages for offloading programs to an nvidia device. To work, you must also enable hardware.nvidia.prime.offload.enable or hardware.nvidia.prime.reverseSync.enable. Example usage: nvidia-offload sauerbraten_client This script can be renamed with hardware.nvidia.prime.offload.enableOffloadCmd. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.prime.offload.offloadCmdMainProgram

Specifies the CLI name of the hardware.nvidia.prime.offload.enableOffloadCmd convenience script for offloading programs to an nvidia device. Type: string Default: "nvidia-offload" Example: "prime-run" Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>
