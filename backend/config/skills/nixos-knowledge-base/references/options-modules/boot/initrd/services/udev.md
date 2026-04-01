---
module: boot.initrd.services.udev
option_count: 3
source: options.html
---

# boot.initrd.services.udev

## boot.initrd.services.udev.packages

This will only be used when systemd is used in stage 1. List of packages containing udev rules that will be copied to stage 1. All files found in «pkg»/etc/udev/rules.d and «pkg»/lib/udev/rules.d will be included. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>

## boot.initrd.services.udev.binPackages

This will only be used when systemd is used in stage 1. Packages to search for binaries that are referenced by the udev rules in stage 1. This list always contains /bin of the initrd. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>

## boot.initrd.services.udev.rules

udev rules to include in the initrd only. They’ll be written into file 99-local.rules. Thus they are read and applied after the essential initrd rules. Type: strings concatenated with “\n” Default: "" Example: '' SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="00:1D:60:B9:6D:4F", KERNEL=="eth*", NAME="my_fast_network_card" '' Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>
