---
module: hardware.logitech.lcd
option_count: 3
source: options.html
---

# hardware.logitech.lcd

## hardware.logitech.lcd.enable

Whether to enable support for Logitech LCD Devices. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/logitech.nix>

## hardware.logitech.lcd.devices

List of USB device ids supported by g15daemon. You most likely do not need to change this. Type: list of string Default: [ "0a07" "c222" "c225" "c227" "c251" ] Declared by: <nixpkgs/nixos/modules/hardware/logitech.nix>

## hardware.logitech.lcd.startWhenNeeded

Only run the service when an actual supported device is plugged. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/hardware/logitech.nix>
