---
module: hardware.deviceTree
option_count: 8
source: options.html
---

# hardware.deviceTree

## hardware.deviceTree.enable

Build device tree files. These are used to describe the non-discoverable hardware of a system. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>

## hardware.deviceTree.dtbSource

Path to dtb directory that overlays and other processing will be applied to. Uses device trees bundled with the Linux kernel by default. Type: absolute path Default: ${cfg.kernelPackage}/dtbs Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>

## hardware.deviceTree.dtboBuildExtraIncludePaths

Additional include paths that will be passed to the preprocessor when creating the final .dts to compile into .dtbo Type: list of absolute path Default: [ ] Example: [ ./my_custom_include_dir_1 ./custom_include_dir_2 ] Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>

## hardware.deviceTree.dtboBuildExtraPreprocessorFlags

Additional flags to pass to the preprocessor during dtbo compilations Type: list of string Default: [ ] Example: [ "-DMY_DTB_DEFINE" ] Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>

## hardware.deviceTree.filter

Only include .dtb files matching glob expression. Type: null or string Default: null Example: "*rpi*.dtb" Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>

## hardware.deviceTree.kernelPackage

Kernel package where device tree include directory is from. Also used as default source of dtb package to apply overlays to Type: absolute path Default: config.boot.kernelPackages.kernel Example: pkgs.linux_latest Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>

## hardware.deviceTree.name

The name of an explicit dtb to be loaded, relative to the dtb base. Useful in extlinux scenarios if the bootloader doesn’t pick the right .dtb file from FDTDIR. Type: null or string Default: null Example: "some-dtb.dtb" Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>

## hardware.deviceTree.overlays

List of overlays to apply to base device-tree (.dtb) files. Type: list of ((submodule) or absolute path convertible to it) Default: [ ] Example: [ { name = "pps"; dtsFile = ./dts/pps.dts; } { name = "spi"; dtsText = "..."; } { name = "precompiled"; dtboFile = ./dtbos/example.dtbo; } ] Declared by: <nixpkgs/nixos/modules/hardware/device-tree.nix>
