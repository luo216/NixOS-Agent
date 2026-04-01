---
module: boot.modprobeConfig
option_count: 2
source: options.html
---

# boot.modprobeConfig

## boot.modprobeConfig.enable

Whether to enable modprobe config. This is useful for systems like containers which do not require a kernel. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/system/boot/modprobe.nix>

## boot.modprobeConfig.useUbuntuModuleBlacklist

Whether to enable Ubuntu distro’s module blacklist. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/system/boot/modprobe.nix>
