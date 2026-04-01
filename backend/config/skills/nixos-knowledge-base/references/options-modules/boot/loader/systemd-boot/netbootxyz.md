---
module: boot.loader.systemd-boot.netbootxyz
option_count: 2
source: options.html
---

# boot.loader.systemd-boot.netbootxyz

## boot.loader.systemd-boot.netbootxyz.enable

Make netboot.xyz available from the systemd-boot menu. netboot.xyz is a menu system that allows you to boot OS installers and utilities over the network. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.netbootxyz.sortKey

systemd-boot orders the menu entries by their sort keys, so if you want something to appear after all the NixOS entries, it should start with o or onwards. See also boot.loader.systemd-boot.sortKey. Type: string Default: "o_netbootxyz" Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>
