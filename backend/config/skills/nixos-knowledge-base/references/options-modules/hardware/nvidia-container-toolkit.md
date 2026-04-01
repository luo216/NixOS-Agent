---
module: hardware.nvidia-container-toolkit
option_count: 10
source: options.html
---

# hardware.nvidia-container-toolkit

## hardware.nvidia-container-toolkit.enable

Enable dynamic CDI configuration for Nvidia devices by running nvidia-container-toolkit on boot. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/nvidia-container-toolkit>

## hardware.nvidia-container-toolkit.package

The nvidia-container-toolkit package to use. Type: package Default: pkgs.nvidia-container-toolkit Declared by: <nixpkgs/nixos/modules/services/hardware/nvidia-container-toolkit>

## hardware.nvidia-container-toolkit.csv-files

The path to the list of CSV files to use when generating the CDI specification in CSV mode. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/nvidia-container-toolkit>

## hardware.nvidia-container-toolkit.device-name-strategy

Specify the strategy for generating device names, passed to nvidia-ctk cdi generate. This will affect how you reference the device using nvidia.com/gpu= in the container runtime. Type: one of “index”, “uuid”, “type-index” Default: "index" Declared by: <nixpkgs/nixos/modules/services/hardware/nvidia-container-toolkit>

## hardware.nvidia-container-toolkit.discovery-mode

The mode to use when discovering the available entities. Type: one of “auto”, “csv”, “nvml”, “wsl” Default: "auto" Declared by: <nixpkgs/nixos/modules/services/hardware/nvidia-container-toolkit>

## hardware.nvidia-container-toolkit.extraArgs

Extra arguments to be passed to nvidia-ctk. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/nvidia-container-toolkit>

## hardware.nvidia-container-toolkit.mount-nvidia-docker-1-directories

Mount nvidia-docker-1 directories on containers: /usr/local/nvidia/lib and /usr/local/nvidia/lib64. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/hardware/nvidia-container-toolkit>

## hardware.nvidia-container-toolkit.mount-nvidia-executables

Mount executables nvidia-smi, nvidia-cuda-mps-control, nvidia-cuda-mps-server, nvidia-debugdump, nvidia-powerd and nvidia-ctk on containers. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/hardware/nvidia-container-toolkit>

## hardware.nvidia-container-toolkit.mounts

Mounts to be added to every container under the Nvidia CDI profile. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/nvidia-container-toolkit>

## hardware.nvidia-container-toolkit.suppressNvidiaDriverAssertion

Suppress the assertion for installing Nvidia driver. Useful in WSL where drivers are mounted from Windows, not provided by NixOS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/nvidia-container-toolkit>
