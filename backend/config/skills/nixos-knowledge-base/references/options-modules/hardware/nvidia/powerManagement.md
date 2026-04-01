---
module: hardware.nvidia.powerManagement
option_count: 2
source: options.html
---

# hardware.nvidia.powerManagement

## hardware.nvidia.powerManagement.enable

Whether to enable experimental power management through systemd. For more information, see the NVIDIA docs, on Chapter 21. Configuring Power Management Support . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.powerManagement.finegrained

Whether to enable experimental power management of PRIME offload. For more information, see the NVIDIA docs, on Chapter 22. PCI-Express Runtime D3 (RTD3) Power Management . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>
