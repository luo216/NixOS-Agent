---
module: boot.loader.systemd-boot.windows.<name>
option_count: 3
source: options.html
---

# boot.loader.systemd-boot.windows.<name>

## boot.loader.systemd-boot.windows.<name>.efiDeviceHandle

The device handle of the EFI System Partition (ESP) where the Windows bootloader is located. This is the device handle that the EDK2 UEFI Shell uses to load the bootloader. To find this handle, follow these steps: Set boot.loader.systemd-boot.edk2-uefi-shell.enable to true Run nixos-rebuild boot Reboot and select “EDK2 UEFI Shell” from the systemd-boot menu Run map -c to list all consistent device handles For each device handle (for example, HD0c1), run ls HD0c1:\EFI If the output contains the directory Microsoft, you might have found the correct device handle Run HD0c1:\EFI\Microsoft\Boot\Bootmgfw.efi to check if Windows boots correctly If it does, this device handle is the one you need (in this example, HD0c1) This option is required, there is no useful default. Type: string Example: "HD1b3" Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.windows.<name>.sortKey

systemd-boot orders the menu entries by their sort keys, so if you want something to appear after all the NixOS entries, it should start with o or onwards. See also boot.loader.systemd-boot.sortKey… Type: string Default: "attribute name of this entry, prefixed with \"o_windows_\"" Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>

## boot.loader.systemd-boot.windows.<name>.title

The title of the boot menu entry. Type: string Default: "attribute name of this entry, prefixed with \"Windows \"" Example: "Michaelsoft Binbows" Declared by: <nixpkgs/nixos/modules/system/boot/loader/systemd-boot/systemd-boot.nix>
