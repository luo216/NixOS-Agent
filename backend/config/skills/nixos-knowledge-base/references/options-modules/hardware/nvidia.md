---
module: hardware.nvidia
option_count: 7
source: options.html
---

# hardware.nvidia

## hardware.nvidia.enabled

True if NVIDIA support is enabled Type: boolean (read only) Default: true if NVIDIA support is enabled Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.package

The NVIDIA driver package to use. Type: unspecified value Default: config.boot.kernelPackages.nvidiaPackages."\$\{if cfg.datacenter.enable then "dc" else "stable"}" Example: "config.boot.kernelPackages.nvidiaPackages.legacy_470" Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.forceFullCompositionPipeline

Whether to enable forcefully the full composition pipeline. This sometimes fixes screen tearing issues. This has been reported to reduce the performance of some OpenGL applications and may produce issues in WebGL. It also drastically increases the time the driver needs to clock down after load . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.nvidiaPersistenced

Whether to enable nvidia-persistenced a update for NVIDIA GPU headless mode, i.e. It ensures all GPUs stay awake even during headless mode . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.nvidiaSettings

Whether to enable nvidia-settings, NVIDIA’s GUI configuration tool . Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.open

Whether to enable the open source NVIDIA kernel module. Type: null or boolean Default: if lib.versionOlder config.hardware.nvidia.package.version "560" then false else null Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.videoAcceleration

Whether to enable Whether video acceleration (VA-API) should be enabled. . Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>
