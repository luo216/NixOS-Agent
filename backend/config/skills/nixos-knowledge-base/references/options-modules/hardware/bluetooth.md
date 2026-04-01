---
module: hardware.bluetooth
option_count: 7
source: options.html
---

# hardware.bluetooth

## hardware.bluetooth.enable

Whether to enable support for Bluetooth. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/bluetooth.nix>

## hardware.bluetooth.package

The bluez package to use. Type: package Default: pkgs.bluez Declared by: <nixpkgs/nixos/modules/services/hardware/bluetooth.nix>

## hardware.bluetooth.disabledPlugins

Built-in plugins to disable Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/bluetooth.nix>

## hardware.bluetooth.input

Set configuration for the input service (/etc/bluetooth/input.conf). See https://github.com/bluez/bluez/blob/master/profiles/input/input.conf for full list of options. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { General = { ClassicBondedOnly = true; IdleTimeout = 30; }; } Declared by: <nixpkgs/nixos/modules/services/hardware/bluetooth.nix>

## hardware.bluetooth.network

Set configuration for the network service (/etc/bluetooth/network.conf). See https://github.com/bluez/bluez/blob/master/profiles/network/network.conf for full list of options. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { General = { DisableSecurity = true; }; } Declared by: <nixpkgs/nixos/modules/services/hardware/bluetooth.nix>

## hardware.bluetooth.powerOnBoot

Whether to power up the default Bluetooth controller on boot. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/hardware/bluetooth.nix>

## hardware.bluetooth.settings

Set configuration for system-wide bluetooth (/etc/bluetooth/main.conf). See https://github.com/bluez/bluez/blob/master/src/main.conf for full list of options. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { General = { ControllerMode = "bredr"; }; } Declared by: <nixpkgs/nixos/modules/services/hardware/bluetooth.nix>
