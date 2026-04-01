---
module: boot.loader.external
option_count: 2
source: options.html
---

# boot.loader.external

## boot.loader.external.enable

Whether to enable using an external tool to install your bootloader. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/loader/external/external.nix>

## boot.loader.external.installHook

The full path to a program of your choosing which performs the bootloader installation process. The program will be called with an argument pointing to the output of the system’s toplevel. Type: absolute path Declared by: <nixpkgs/nixos/modules/system/boot/loader/external/external.nix>
