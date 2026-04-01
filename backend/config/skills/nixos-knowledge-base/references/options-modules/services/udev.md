---
module: services.udev
option_count: 5
source: options.html
---

# services.udev

## services.udev.enable

Whether to enable udev, a device manager for the Linux kernel. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>

## services.udev.packages

List of packages containing udev rules. All files found in «pkg»/etc/udev/rules.d and «pkg»/lib/udev/rules.d will be included. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>

## services.udev.extraHwdb

Additional hwdb files. They’ll be written into file 99-local.hwdb. Thus they are read after all other files. Type: strings concatenated with “\n” Default: "" Example: '' evdev:input:b0003v05AFp8277* KEYBOARD_KEY_70039=leftalt KEYBOARD_KEY_700e2=leftctrl '' Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>

## services.udev.extraRules

Additional udev rules. They’ll be written into file 99-local.rules. Thus they are read and applied after all other rules. Type: strings concatenated with “\n” Default: "" Example: '' ENV{ID_VENDOR_ID}=="046d", ENV{ID_MODEL_ID}=="0825", ENV{PULSE_IGNORE}="1" '' Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>

## services.udev.path

Packages added to the PATH environment variable when executing programs from Udev rules. coreutils, gnu{sed,grep}, util-linux and config.systemd.package are automatically included. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>
