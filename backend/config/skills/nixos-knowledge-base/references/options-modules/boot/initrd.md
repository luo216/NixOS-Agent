---
module: boot.initrd
option_count: 20
source: options.html
---

# boot.initrd

## boot.initrd.enable

Whether to enable the NixOS initial RAM disk (initrd). This may be needed to perform some initialisation tasks (like mounting network/encrypted file systems) before continuing the boot process. Type: boolean Default: !config.boot.isContainer Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.allowMissingModules

Whether the initrd can be built even though modules listed in boot.initrd.kernelModules or boot.initrd.availableKernelModules are missing from the kernel. This is useful when combining configurations that include a lot of modules, such as hardware.enableAllHardware, with kernels that don’t provide as many modules as typical NixOS kernels. Note that enabling this is discouraged. Instead, try disabling individual modules by setting e.g. boot.initrd.availableKernelModules.foo = lib.mkForce false; Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.initrd.availableKernelModules

The set of kernel modules in the initial ramdisk used during the boot process. This set must include all modules necessary for mounting the root device. That is, it should include modules for the physical device (e.g., SCSI drivers) and for the file system (e.g., ext3). The set specified here is automatically closed under the module dependency relation, i.e., all dependencies of the modules list here are included automatically. The modules listed here are available in the initrd, but are only loaded on demand (e.g., the ext3 module is loaded automatically when an ext3 filesystem is mounted, and modules for PCI devices are loaded when they match the PCI ID of a device in your system). To force a module to be loaded, include it in boot.initrd.kernelModules. This can either be a list of modules, or an attrset. In an attrset, names that are set to true represent modules that will be included. Note that setting these names to false does not prevent the module from being loaded. For that, use boot.blacklistedKernelModules. Type: (attribute set of boolean) or (list of string) convertible to it Default: { } Example: [ "sata_nv" "ext3" ] Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.initrd.checkJournalingFS

Whether to run fsck on journaling filesystems such as ext3. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.compressor

The compressor to use on the initrd image. May be any of: The name of one of the predefined compressors, see pkgs/build-support/kernel/initrd-compressor-meta.nix for the definitions. A function which, given the nixpkgs package set, returns the path to a compressor tool, e.g. pkgs: "${pkgs.pigz}/bin/pigz" (not recommended, because it does not work when cross-compiling) the full path to a compressor tool, e.g. "${pkgs.pigz}/bin/pigz" The given program should read data from stdin and write it to stdout compressed. Type: string or function that evaluates to a(n) string Default: zstd if the kernel supports it (5.9+), gzip if not Example: "xz" Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.compressorArgs

Arguments to pass to the compressor for the initrd image, or null to use the compressor’s defaults. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.extraFiles

Extra files to link and copy in to the initrd. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.extraFirmwarePaths

Other firmware files (relative to "${config.hardware.firmware}/lib/firmware") to include in the final initrd we are building. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.includeDefaultModules

This option, if set, adds a collection of default kernel modules to boot.initrd.availableKernelModules and boot.initrd.kernelModules. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.initrd.kernelModules

Set of modules that are always loaded by the initrd. This can either be a list of modules, or an attrset. In an attrset, names that are set to true represent modules that will be included. Note that setting these names to false does not prevent the module from being loaded. For that, use boot.blacklistedKernelModules. Type: (attribute set of boolean) or (list of string) convertible to it Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.initrd.postDeviceCommands

Shell commands to be executed immediately after stage 1 of the boot has loaded kernel modules and created device nodes in /dev. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.postMountCommands

Shell commands to be executed immediately after the stage 1 filesystems have been mounted. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.postResumeCommands

Shell commands to be executed immediately after attempting to resume. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.preDeviceCommands

Shell commands to be executed before udev is started to create device nodes. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.preFailCommands

Shell commands to be executed before the failure prompt is shown. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.preLVMCommands

Shell commands to be executed immediately before LVM discovery. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.prepend

Other initrd files to prepend to the final initrd we are building. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.secrets

Secrets to append to the initrd. The attribute name is the path the secret should have inside the initrd, the value is the path it should be copied from (or null for the same path inside and out). Note that nixos-rebuild switch will generate the initrd also for past generations, so if secrets are moved or deleted you will also have to garbage collect the generations that use those secrets. Type: attribute set of (null or absolute path) Default: { } Example: { "/etc/dropbear/dropbear_rsa_host_key" = ./secret-dropbear-key; } Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.supportedFilesystems

Names of supported filesystem types, or an attribute set of file system types and their state. The set form may be used together with lib.mkForce to explicitly disable support for specific filesystems, e.g. to disable ZFS with an unsupported kernel. Type: (attribute set of boolean) or (list of string) convertible to it Default: { } Example: { btrfs = true; zfs = lib.mkForce false; } Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.initrd.verbose

Verbosity of the initrd. Please note that disabling verbosity removes only the mandatory messages generated by the NixOS scripts. For a completely silent boot, you might also want to set the two following configuration options: boot.consoleLogLevel = 0; boot.kernelParams = [ "quiet" "udev.log_level=3" ]; Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>
