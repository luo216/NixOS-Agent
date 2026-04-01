---
module: programs.wireshark.usbmon
option_count: 1
source: options.html
---

# programs.wireshark.usbmon

## programs.wireshark.usbmon.enable

Whether to allow users in the ‘wireshark’ group to capture USB traffic. This adds udev rules to give users in the ‘wireshark’ group read permissions to all devices in the usbmon subsystem. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/wireshark.nix>
