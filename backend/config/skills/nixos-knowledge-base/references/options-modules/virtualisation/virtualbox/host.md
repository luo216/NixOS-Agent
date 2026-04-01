---
module: virtualisation.virtualbox.host
option_count: 8
source: options.html
---

# virtualisation.virtualbox.host

## virtualisation.virtualbox.host.enable

Whether to enable VirtualBox. Note In order to pass USB devices from the host to the guests, the user needs to be in the vboxusers group. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-host.nix>

## virtualisation.virtualbox.host.enableExtensionPack

Whether to install the Oracle Extension Pack for VirtualBox. Important You must set nixpkgs.config.allowUnfree = true in order to use this. This requires you accept the VirtualBox PUEL. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-host.nix>

## virtualisation.virtualbox.host.enableHardening

Enable hardened VirtualBox, which ensures that only the binaries in the system path get access to the devices exposed by the kernel modules instead of all users in the vboxusers group. Important Disabling this can put your system’s security at risk, as local users in the vboxusers group can tamper with the VirtualBox device files. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-host.nix>

## virtualisation.virtualbox.host.enableKvm

Enable KVM support for VirtualBox. This increases compatibility with Linux kernel versions, because the VirtualBox kernel modules are not required. This option is incompatible with addNetworkInterface. Note: This is experimental. Please check https://github.com/cyberus-technology/virtualbox-kvm/issues. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-host.nix>

## virtualisation.virtualbox.host.enableWebService

Build VirtualBox web service tool (vboxwebsrv) to allow managing VMs via other webpage frontend tools. Useful for headless servers. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-host.nix>

## virtualisation.virtualbox.host.package

The virtualbox package to use. Type: package Default: pkgs.virtualbox Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-host.nix>

## virtualisation.virtualbox.host.addNetworkInterface

Automatically set up a vboxnet0 host-only network interface. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-host.nix>

## virtualisation.virtualbox.host.headless

Use VirtualBox installation without GUI and Qt dependency. Useful to enable on servers and when virtual machines are controlled only via SSH. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-host.nix>
