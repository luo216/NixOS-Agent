---
module: hardware.keyboard.uhk
option_count: 1
source: options.html
---

# hardware.keyboard.uhk

## hardware.keyboard.uhk.enable

Whether to enable non-root access to the firmware of UHK keyboards. You need it when you want to flash a new firmware on the keyboard. Access to the keyboard is granted to users in the “input” group. You may want to install the uhk-agent package . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/keyboard/uhk.nix>
