---
module: hardware.facter.detected.dhcp
option_count: 2
source: options.html
---

# hardware.facter.detected.dhcp

## hardware.facter.detected.dhcp.enable

Whether to enable Facter dhcp module. Type: boolean Default: "hardware dependent" Example: true Declared by: <nixpkgs/nixos/modules/hardware/facter/networking>

## hardware.facter.detected.dhcp.interfaces

List of network interface names to configure with DHCP. Defaults to auto-detected physical interfaces. Type: list of string Default: automatically detected from facter report Example: [ "eth0" "wlan0" ] Declared by: <nixpkgs/nixos/modules/hardware/facter/networking>
