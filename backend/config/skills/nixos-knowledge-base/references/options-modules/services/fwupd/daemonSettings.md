---
module: services.fwupd.daemonSettings
option_count: 3
source: options.html
---

# services.fwupd.daemonSettings

## services.fwupd.daemonSettings.DisabledDevices

List of device GUIDs to be disabled. Type: list of string Default: [ ] Example: [ "2082b5e0-7a64-478a-b1b2-e3404fab6dad" ] Declared by: <nixpkgs/nixos/modules/services/hardware/fwupd.nix>

## services.fwupd.daemonSettings.DisabledPlugins

List of plugins to be disabled. Type: list of string Default: [ ] Example: [ "udev" ] Declared by: <nixpkgs/nixos/modules/services/hardware/fwupd.nix>

## services.fwupd.daemonSettings.EspLocation

The EFI system partition (ESP) path used if UDisks is not available or if this partition is not mounted at /boot/efi, /boot, or /efi Type: absolute path Default: config.boot.loader.efi.efiSysMountPoint Declared by: <nixpkgs/nixos/modules/services/hardware/fwupd.nix>
