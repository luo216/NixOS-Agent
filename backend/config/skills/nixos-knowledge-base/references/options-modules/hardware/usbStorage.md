---
module: hardware.usbStorage
option_count: 1
source: options.html
---

# hardware.usbStorage

## hardware.usbStorage.manageShutdown

Enable this option to gracefully spin-down external storage during shutdown. If you suspect improper head parking after poweroff, install smartmontools and check for the Power-Off_Retract_Count field for an increment. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/usb-storage.nix>
