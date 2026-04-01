---
module: boot.loader.generic-extlinux-compatible
option_count: 5
source: options.html
---

# boot.loader.generic-extlinux-compatible

## boot.loader.generic-extlinux-compatible.enable

Whether to generate an extlinux-compatible configuration file under /boot/extlinux.conf. For instance, U-Boot’s generic distro boot support uses this file format. See U-boot’s documentation for more information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/generic-extlinux-compatible>

## boot.loader.generic-extlinux-compatible.configurationLimit

Maximum number of configurations in the boot menu. Type: signed integer Default: 20 Example: 10 Declared by: <nixpkgs/nixos/modules/system/boot/loader/generic-extlinux-compatible>

## boot.loader.generic-extlinux-compatible.mirroredBoots

Mirror the boot configuration to multiple paths. Type: list of (submodule) Default: [ { path = "/boot"; } ] Example: [ { path = "/boot1"; } { path = "/boot2"; } ] Declared by: <nixpkgs/nixos/modules/system/boot/loader/generic-extlinux-compatible>

## boot.loader.generic-extlinux-compatible.populateCmd

Contains the builder command used to populate an image, honoring all options except the -c <path-to-default-configuration> argument. Useful to have for sdImage.populateRootCommands Type: string (read only) Declared by: <nixpkgs/nixos/modules/system/boot/loader/generic-extlinux-compatible>

## boot.loader.generic-extlinux-compatible.useGenerationDeviceTree

Whether to generate Device Tree-related directives in the extlinux configuration. When enabled, the bootloader will attempt to load the device tree binaries from the generation’s kernel. Note that this affects all generations, regardless of the setting value used in their configurations. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/generic-extlinux-compatible>
