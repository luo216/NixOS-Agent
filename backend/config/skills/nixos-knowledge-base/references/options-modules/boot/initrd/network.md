---
module: boot.initrd.network
option_count: 3
source: options.html
---

# boot.initrd.network

## boot.initrd.network.enable

Add network connectivity support to initrd. The network may be configured using the ip kernel parameter, as described in the kernel documentation. Otherwise, if networking.useDHCP is enabled, an IP address is acquired using DHCP. You should add the module(s) required for your network card to boot.initrd.availableKernelModules. lspci -v | grep -iA8 'network\|ethernet' will tell you which. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/initrd-network.nix>

## boot.initrd.network.flushBeforeStage2

Whether to clear the configuration of the interfaces that were set up in the initrd right before stage 2 takes over. Stage 2 will do the regular network configuration based on the NixOS networking options. The default is false when systemd is enabled in initrd, because the systemd-networkd documentation suggests it. Type: boolean Default: "!config.boot.initrd.systemd.enable" Declared by: <nixpkgs/nixos/modules/system/boot/initrd-network.nix>

## boot.initrd.network.postCommands

Shell commands to be executed after stage 1 of the boot has initialised the network. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/initrd-network.nix>
