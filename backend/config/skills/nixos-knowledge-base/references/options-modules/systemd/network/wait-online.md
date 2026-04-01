---
module: systemd.network.wait-online
option_count: 5
source: options.html
---

# systemd.network.wait-online

## systemd.network.wait-online.enable

Whether to enable the systemd-networkd-wait-online service. systemd-networkd-wait-online can timeout and fail if there are no network interfaces available for it to manage. When systemd-networkd is enabled but a different service is responsible for managing the system’s internet connection (for example, NetworkManager or connman are used to manage WiFi connections), this service is unnecessary and can be disabled. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.wait-online.anyInterface

Whether to consider the network online when any interface is online, as opposed to all of them. This is useful on portable machines with a wired and a wireless interface, for example. This is on by default if networking.useDHCP is enabled. Type: boolean Default: "config.networking.useDHCP" Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.wait-online.extraArgs

Extra command-line arguments to pass to systemd-networkd-wait-online. These also affect per-interface systemd-network-wait-online@ services. See systemd-networkd-wait-online.service(8) for all available options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.wait-online.ignoredInterfaces

Network interfaces to be ignored when deciding if the system is online. Type: list of string Default: [ ] Example: [ "wg0" ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.wait-online.timeout

Time to wait for the network to come online, in seconds. Set to 0 to disable. Type: unsigned integer, meaning >=0 Default: 120 Example: 0 Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>
