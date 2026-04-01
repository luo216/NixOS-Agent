---
module: services.usbmuxd
option_count: 4
source: options.html
---

# services.usbmuxd

## services.usbmuxd.enable

Enable the usbmuxd (“USB multiplexing daemon”) service. This daemon is in charge of multiplexing connections over USB to an iOS device. This is needed for transferring data from and to iOS devices (see ifuse). Also this may enable plug-n-play tethering for iPhones. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/usbmuxd.nix>

## services.usbmuxd.package

Which package to use for the usbmuxd daemon. Type: package Default: pkgs.usbmuxd Related packages: pkgs.usbmuxd pkgs.usbmuxd2 Declared by: <nixpkgs/nixos/modules/services/hardware/usbmuxd.nix>

## services.usbmuxd.group

The group usbmuxd should use to run after startup. Type: string Default: "usbmux" Declared by: <nixpkgs/nixos/modules/services/hardware/usbmuxd.nix>

## services.usbmuxd.user

The user usbmuxd should use to run after startup. Type: string Default: "usbmux" Declared by: <nixpkgs/nixos/modules/services/hardware/usbmuxd.nix>
