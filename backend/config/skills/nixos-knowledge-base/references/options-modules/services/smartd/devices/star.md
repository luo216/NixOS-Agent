---
module: services.smartd.devices.*
option_count: 2
source: options.html
---

# services.smartd.devices.*

## services.smartd.devices.*.device

Location of the device. Type: string Example: "/dev/sda" Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>

## services.smartd.devices.*.options

Options that determine how smartd monitors the device. Type: strings concatenated with " " Default: "" Example: "-d sat" Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>
