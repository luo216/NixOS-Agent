---
module: hardware.hackrf
option_count: 1
source: options.html
---

# hardware.hackrf

## hardware.hackrf.enable

Enables hackrf udev rules and ensures ‘plugdev’ group exists. This is a prerequisite to using HackRF devices without being root, since HackRF USB descriptors will be owned by plugdev through udev. Ensure your user is a member of the ‘plugdev’ group after enabling. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/hackrf.nix>
