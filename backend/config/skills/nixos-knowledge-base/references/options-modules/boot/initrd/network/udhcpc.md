---
module: boot.initrd.network.udhcpc
option_count: 2
source: options.html
---

# boot.initrd.network.udhcpc

## boot.initrd.network.udhcpc.enable

Enables the udhcpc service during stage 1 of the boot process. This defaults to networking.useDHCP. Therefore, this useful if useDHCP is off but the initramfs should do dhcp. Type: boolean Default: "networking.useDHCP" Declared by: <nixpkgs/nixos/modules/system/boot/initrd-network.nix>

## boot.initrd.network.udhcpc.extraArgs

Additional command-line arguments passed verbatim to udhcpc if boot.initrd.network.enable and boot.initrd.network.udhcpc.enable are enabled. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/initrd-network.nix>
