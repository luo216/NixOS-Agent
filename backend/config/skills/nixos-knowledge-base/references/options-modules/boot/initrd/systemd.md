---
module: boot.initrd.systemd
option_count: 24
source: options.html
---

# boot.initrd.systemd

## boot.initrd.systemd.enable

Whether to enable systemd in initrd. The unit options such as boot.initrd.systemd.services are the same as their stage 2 counterparts such as systemd.services, except that restartTriggers and reloadTriggers are not supported. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.package

The systemd package to use. Type: package Default: config.systemd.package Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.packages

Packages providing systemd units and hooks. Type: list of package Default: [ ] Example: [ pkgs.systemd-cryptsetup-generator ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.additionalUpstreamUnits

Additional units shipped with systemd that shall be enabled. Type: list of string Default: [ ] Example: [ "debug-shell.service" "systemd-quotacheck.service" ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.automounts

Definition of systemd automount units. This is a list instead of an attrSet, because systemd mandates the names to be derived from the ‘where’ attribute. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.contents

Set of files that have to be linked into the initrd Type: attribute set of (submodule) Default: { } Example: { "/etc/machine-id".source = /etc/machine-id; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.emergencyAccess

Set to true for unauthenticated emergency access, and false or null for no emergency access. Can also be set to a hashed super user password to allow authenticated access to the emergency mode. For emergency access after initrd, use systemd.enableEmergencyMode instead. Type: boolean or null or (string, not containing newlines or colons) Default: false Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.extraBin

Tools to add to /bin Type: attribute set of absolute path Default: { } Example: { umount = ${pkgs.util-linux}/bin/umount; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.groups

Groups to include in initrd. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## boot.initrd.systemd.initrdBin

Packages to include in /bin for the stage 1 emergency shell. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.managerEnvironment

Environment variables of PID 1. These variables are not passed to started units. Type: attribute set of (null or string or absolute path or package) Default: '' { PATH = "/bin:/sbin"; } '' Example: { SYSTEMD_LOG_LEVEL = "debug"; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.mounts

Definition of systemd mount units. This is a list instead of an attrSet, because systemd mandates the names to be derived from the ‘where’ attribute. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.paths

Definition of systemd path units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.root

Controls how systemd will interpret the root FS in initrd. See kernel-command-line(7). NixOS currently does not allow specifying the root file system itself this way. Instead, the fstab value is used in order to interpret the root file system specified with the fileSystems option. Type: one of “fstab”, “gpt-auto” Default: "fstab" Example: "gpt-auto" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.services

Definition of systemd service units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.slices

Definition of slice configurations. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.sockets

Definition of systemd socket units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.storePaths

Store paths to copy into the initrd as well. Type: list of ((submodule) or ((optionally newline-terminated) single-line string or package) convertible to it) Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.suppressedStorePaths

Store paths specified in the storePaths option that should not be copied. Type: list of (optionally newline-terminated) single-line string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.suppressedUnits

A list of units to skip when generating system systemd configuration directory. This has priority over upstream units, boot.initrd.systemd.units, and boot.initrd.systemd.additionalUpstreamUnits. The main purpose of this is to prevent a upstream systemd unit from being added to the initrd with any modifications made to it by other NixOS modules. Type: list of string Default: [ ] Example: [ "systemd-backlight@.service" ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.targets

Definition of systemd target units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.timers

Definition of systemd timer units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.units

Definition of systemd units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/initrd.nix>

## boot.initrd.systemd.users

Users to include in initrd. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>
