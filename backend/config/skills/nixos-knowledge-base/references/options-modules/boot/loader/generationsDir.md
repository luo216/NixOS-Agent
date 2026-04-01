---
module: boot.loader.generationsDir
option_count: 2
source: options.html
---

# boot.loader.generationsDir

## boot.loader.generationsDir.enable

Whether to create symlinks to the system generations under /boot. When enabled, /boot/default/kernel, /boot/default/initrd, etc., are updated to point to the current generation’s kernel image, initial RAM disk, and other bootstrap files. This optional is not necessary with boot loaders such as GNU GRUB for which the menu is updated to point to the latest bootstrap files. However, it is needed for U-Boot on platforms where the boot command line is stored in flash memory rather than in a menu file. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/generations-dir/generations-dir.nix>

## boot.loader.generationsDir.copyKernels

Whether to copy the necessary boot files into /boot, so /nix/store is not needed by the boot loader. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/generations-dir/generations-dir.nix>
