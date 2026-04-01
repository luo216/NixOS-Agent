---
module: boot
option_count: 23
source: options.html
---

# boot

## boot.enableContainers

Whether to enable support for NixOS containers. Type: boolean Default: config.containers != { } Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## boot.blacklistedKernelModules

Set of names of kernel modules that should not be loaded automatically by the hardware probing code. This can either be a list of modules or an attrset. In an attrset, names that are set to true represent modules that will be blacklisted. Type: (attribute set of boolean) or (list of string) convertible to it Default: { } Example: [ "cirrusfb" "i2c_piix4" ] Declared by: <nixpkgs/nixos/modules/system/boot/modprobe.nix>

## boot.consoleLogLevel

The kernel console loglevel. All Kernel Messages with a log level smaller than this setting will be printed to the console. Type: signed integer Default: 4 Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.devShmSize

Size limit for the /dev/shm tmpfs. Look at mount(8), tmpfs size option, for the accepted syntax. Type: string Default: "50%" Example: "256m" Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## boot.devSize

Size limit for the /dev tmpfs. Look at mount(8), tmpfs size option, for the accepted syntax. Type: string Default: "5%" Example: "32m" Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## boot.extraModprobeConfig

Any additional configuration to be appended to the generated modprobe.conf. This is typically used to specify module options. See modprobe.d(5) for details. Type: strings concatenated with “\n” Default: "" Example: '' options parport_pc io=0x378 irq=7 dma=1 '' Declared by: <nixpkgs/nixos/modules/system/boot/modprobe.nix>

## boot.extraModulePackages

A list of additional packages supplying kernel modules. Type: list of package Default: [ ] Example: [ config.boot.kernelPackages.nvidia_x11 ] Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.extraSystemdUnitPaths

Additional paths that get appended to the SYSTEMD_UNIT_PATH environment variable that can contain mutable unit files. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/stage-2.nix>

## boot.growPartition

Whether to enable growing the root partition on boot. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/grow-partition.nix>

## boot.hardwareScan

Whether to try to load kernel modules for all detected hardware. Usually this does a good job of providing you with the modules you need, but sometimes it can crash the system or cause other nasty effects. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>

## boot.isContainer

Whether this NixOS machine is a lightweight container running in another NixOS system. Type: boolean Default: "config.boot.isNspawnContainer" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## boot.isNspawnContainer

Whether the machine is running in an nspawn container. This option is added because boot.isContainer is heavily used for non-nspawn environments as well, hence nspawn-specific settings are guarded by this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## boot.kernelModules

The set of kernel modules to be loaded in the second stage of the boot process. Note that modules that are needed to mount the root file system should be added to boot.initrd.availableKernelModules or boot.initrd.kernelModules. This can either be a list of modules, or an attrset. In an attrset, names that are set to true represent modules that will be included. Note that setting these names to false does not prevent the module from being loaded. For that, use boot.blacklistedKernelModules. Type: (attribute set of boolean) or (list of string) convertible to it Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.kernelPackages

This option allows you to override the Linux kernel used by NixOS. Since things like external kernel module packages are tied to the kernel you’re using, it also overrides those. This option is a function that takes Nixpkgs as an argument (as a convenience), and returns an attribute set containing at the very least an attribute kernel. Additional attributes may be needed depending on your configuration. For instance, if you use the NVIDIA X driver, then it also needs to contain an attribute nvidia_x11. Please note that we strictly support kernel versions that are maintained by the Linux developers only. More information on the availability of kernel versions is documented in the Linux section of the manual. Type: raw value Default: pkgs.linuxPackages Example: pkgs.linuxKernel.packages.linux_5_10 Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.kernelParams

Parameters added to the kernel command line. Type: list of string, with spaces inside double quotes Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.kernelPatches

A list of additional patches to apply to the kernel. Every item should be an attribute set with the following attributes: { name = "foo"; # descriptive name, required patch = ./foo.patch; # path or derivation that contains the patch source # (required, but can be null if only config changes # are needed) structuredExtraConfig = { # attrset of extra configuration parameters without the CONFIG_ prefix FOO = lib.kernel.yes; # (optional) }; # values should generally be lib.kernel.yes, # lib.kernel.no or lib.kernel.module features = { # attrset of extra "features" the kernel is considered to have foo = true; # (may be checked by other NixOS modules, optional) }; extraConfig = "FOO y"; # extra configuration options in string form without the CONFIG_ prefix # (optional, multiple lines allowed to specify multiple options) # (deprecated, use structuredExtraConfig instead) } There’s a small set of existing kernel patches in Nixpkgs, available as pkgs.kernelPatches, that follow this format and can be used directly. Type: list of (attribute set) Default: [ ] Example: [ { name = "foo"; patch = ./foo.patch; structuredExtraConfig.FOO = lib.kernel.yes; features.foo = true; } { name = "foo-ml-mbox"; patch = (fetchurl { url = "https://lore.kernel.org/lkml/19700205182810.58382-1-email@domain/t.mbox.gz"; hash = "sha256-..."; }); } ] Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>

## boot.nixStoreMountOpts

Defines the mount options used on a bind mount for the /nix/store. This affects the whole system except the nix store daemon, which will undo the bind mount. ro enforces immutability of the Nix store. The store daemon should already not put device mappers or suid binaries in the store, meaning nosuid and nodev enforce what should already be the case. Type: list of non-empty string Default: [ "ro" "nodev" "nosuid" ] Declared by: <nixpkgs/nixos/modules/system/boot/stage-2.nix>

## boot.postBootCommands

Shell commands to be executed just before systemd is started. Type: strings concatenated with “\n” Default: "" Example: "rm -f /var/log/messages" Declared by: <nixpkgs/nixos/modules/system/boot/stage-2.nix>

## boot.resumeDevice

Device for manual resume attempt during boot. This should be used primarily if you want to resume from file. If left empty, the swap partitions are used. Specify here the device where the file resides. You should also use boot.kernelParams to specify «resume_offset». Type: string Default: "" Example: "/dev/sda3" Declared by: <nixpkgs/nixos/modules/system/boot/stage-1.nix>

## boot.runSize

Size limit for the /run tmpfs. Look at mount(8), tmpfs size option, for the accepted syntax. Type: string Default: "25%" Example: "256m" Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## boot.supportedFilesystems

Names of supported filesystem types, or an attribute set of file system types and their state. The set form may be used together with lib.mkForce to explicitly disable support for specific filesystems, e.g. to disable ZFS with an unsupported kernel. Type: (attribute set of boolean) or (list of string) convertible to it Default: { } Example: { btrfs = true; zfs = lib.mkForce false; } Declared by: <nixpkgs/nixos/modules/tasks/filesystems.nix>

## boot.systemdExecutable

The program to execute to start systemd. Type: string Default: "/run/current-system/systemd/lib/systemd/systemd" Declared by: <nixpkgs/nixos/modules/system/boot/stage-2.nix>

## boot.vesa

(Deprecated) This option, if set, activates the VESA 800x600 video mode on boot and disables kernel modesetting. It is equivalent to specifying [ "vga=0x317" "nomodeset" ] in the boot.kernelParams option. This option is deprecated as of 2020: Xorg now works better with modesetting, and you might want a different VESA vga setting, anyway. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/kernel.nix>
