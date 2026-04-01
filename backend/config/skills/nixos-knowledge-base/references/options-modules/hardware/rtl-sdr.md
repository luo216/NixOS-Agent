---
module: hardware.rtl-sdr
option_count: 2
source: options.html
---

# hardware.rtl-sdr

## hardware.rtl-sdr.enable

Enables rtl-sdr udev rules, ensures ‘plugdev’ group exists, and blacklists DVB kernel modules. This is a prerequisite to using devices supported by rtl-sdr without being root, since rtl-sdr USB descriptors will be owned by plugdev through udev. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/rtl-sdr.nix>

## hardware.rtl-sdr.package

The rtl-sdr package to use. Type: package Default: pkgs.rtl-sdr Declared by: <nixpkgs/nixos/modules/hardware/rtl-sdr.nix>
