---
module: swapDevices
option_count: 1
source: options.html
---

# swapDevices

## swapDevices

The swap devices and swap files. These must have been initialised using mkswap. Each element should be an attribute set specifying either the path of the swap device or file (device) or the label of the swap device (label, see mkswap -L). Using a label is recommended. Type: list of (submodule) Default: [ ] Example: [ { device = "/dev/hda7"; } { device = "/var/swapfile"; } { label = "bigswap"; } ] Declared by: <nixpkgs/nixos/modules/tasks/encrypted-devices.nix> <nixpkgs/nixos/modules/config/swap.nix>
