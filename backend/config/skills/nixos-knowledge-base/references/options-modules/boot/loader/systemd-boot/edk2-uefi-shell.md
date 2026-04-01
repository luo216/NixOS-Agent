---
module: boot.loader.systemd-boot.edk2-uefi-shell
option_count: 2
source: options.html
---

# boot.loader.systemd-boot.edk2-uefi-shell

## boot.loader.systemd-boot.edk2-uefi-shell.enable

Make the EDK2 UEFI Shell available from the systemd-boot menu. It can be used to manually boot other operating systems or for debugging. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.edk2-uefi-shell.sortKey

systemd-boot orders the menu entries by their sort keys, so if you want something to appear after all the NixOS entries, it should start with o or onwards. See also boot.loader.systemd-boot.sortKey… Type: string Default: "o_edk2-uefi-shell" Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>
