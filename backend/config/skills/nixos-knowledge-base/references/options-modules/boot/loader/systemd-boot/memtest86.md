---
module: boot.loader.systemd-boot.memtest86
option_count: 2
source: options.html
---

# boot.loader.systemd-boot.memtest86

## boot.loader.systemd-boot.memtest86.enable

Make Memtest86+ available from the systemd-boot menu. Memtest86+ is a program for testing memory. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.memtest86.sortKey

systemd-boot orders the menu entries by their sort keys, so if you want something to appear after all the NixOS entries, it should start with o or onwards. See also boot.loader.systemd-boot.sortKey. Type: string Default: "o_memtest86" Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>
