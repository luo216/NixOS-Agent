---
module: networking.bonds.<name>
option_count: 6
source: options.html
---

# networking.bonds.<name>

## networking.bonds.<name>.driverOptions

Options for the bonding driver. Documentation can be found in https://www.kernel.org/doc/Documentation/networking/bonding.txt Type: attribute set of string Default: { } Example: { miimon = "100"; mode = "active-backup"; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.bonds.<name>.interfaces

The interfaces to bond together Type: list of string Example: [ "enp4s0f0" "enp4s0f1" "wlan0" ] Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.bonds.<name>.lacp_rate

DEPRECATED, use driverOptions. Option specifying the rate in which we’ll ask our link partner to transmit LACPDU packets in 802.3ad mode. Type: null or string Default: null Example: "fast" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.bonds.<name>.miimon

DEPRECATED, use driverOptions. Miimon is the number of millisecond in between each round of polling by the device driver for failed links. By default polling is not enabled and the driver is trusted to properly detect and handle failure scenarios. Type: null or signed integer Default: null Example: 100 Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.bonds.<name>.mode

DEPRECATED, use driverOptions. The mode which the bond will be running. The default mode for the bonding driver is balance-rr, optimizing for throughput. More information about valid modes can be found at https://www.kernel.org/doc/Documentation/networking/bonding.txt Type: null or string Default: null Example: "active-backup" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.bonds.<name>.xmit_hash_policy

DEPRECATED, use driverOptions. Selects the transmit hash policy to use for slave selection in balance-xor, 802.3ad, and tlb modes. Type: null or string Default: null Example: "layer2+3" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
