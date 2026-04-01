---
module: services.waagent.settings.ResourceDisk
option_count: 6
source: options.html
---

# services.waagent.settings.ResourceDisk

## services.waagent.settings.ResourceDisk.EnableSwap

If enabled, the agent creates a swap file (/swapfile) on the resource disk and adds it to the system swap space. This configuration has no effect if resource disk is managed by cloud-init. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>

## services.waagent.settings.ResourceDisk.FileSystem

The file system type for the resource disk. If the string is X, then mkfs.X should be present in the environment. You can add additional filesystem packages using services.waagent.extraPackages. This configuration has no effect if resource disk is managed by cloud-init. Type: string Default: "ext4" Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>

## services.waagent.settings.ResourceDisk.Format

If set to true, waagent formats and mounts the resource disk that the platform provides, unless the file system type in ResourceDisk.FileSystem is set to ntfs. The agent makes a single Linux partition (ID 83) available on the disk. This partition isn’t formatted if it can be successfully mounted. This configuration has no effect if resource disk is managed by cloud-init. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>

## services.waagent.settings.ResourceDisk.MountOptions

This option specifies disk mount options to be passed to the mount -o command. For more information, see the mount(8) manual page. Type: list of string Default: [ ] Example: [ "nodev" "nosuid" ] Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>

## services.waagent.settings.ResourceDisk.MountPoint

This option specifies the path at which the resource disk is mounted. The resource disk is a temporary disk and might be emptied when the VM is deprovisioned. This configuration has no effect if resource disk is managed by cloud-init. Type: string Default: "/mnt/resource" Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>

## services.waagent.settings.ResourceDisk.SwapSizeMB

Specifies the size of the swap file in MiB (1024×1024 bytes). This configuration has no effect if resource disk is managed by cloud-init. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>
