---
module: services.hardware.lcd.server
option_count: 7
source: options.html
---

# services.hardware.lcd.server

## services.hardware.lcd.server.enable

Enable the LCD panel server (LCDd) Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/lcd.nix>

## services.hardware.lcd.server.extraConfig

Additional configuration added verbatim to the server config. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/lcd.nix>

## services.hardware.lcd.server.openPorts

Open the ports in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/lcd.nix>

## services.hardware.lcd.server.usbGroup

The group to use for settings permissions. This group must exist or you will have to create it. Type: string Default: "dialout" Declared by: <nixpkgs/nixos/modules/services/hardware/lcd.nix>

## services.hardware.lcd.server.usbPermissions

Set group-write permissions on a USB device. A USB connected LCD panel will most likely require having its permissions modified for lcdd to write to it. Enabling this option sets group-write permissions on the device identified by services.hardware.lcd.usbVid and services.hardware.lcd.usbPid. In order to find the values, you can run the lsusb command. Example output: Bus 005 Device 002: ID 0403:c630 Future Technology Devices International, Ltd lcd2usb interface In this case the vendor id is 0403 and the product id is c630. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/lcd.nix>

## services.hardware.lcd.server.usbPid

The product ID of the USB device to claim. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/lcd.nix>

## services.hardware.lcd.server.usbVid

The vendor ID of the USB device to claim. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/lcd.nix>
