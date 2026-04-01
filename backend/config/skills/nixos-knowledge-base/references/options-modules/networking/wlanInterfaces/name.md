---
module: networking.wlanInterfaces.<name>
option_count: 6
source: options.html
---

# networking.wlanInterfaces.<name>

## networking.wlanInterfaces.<name>.device

The name of the underlying hardware WLAN device as assigned by udev. Type: string Example: "wlp6s0" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.wlanInterfaces.<name>.flags

Flags for interface of type monitor. Type: null or one of “none”, “fcsfail”, “control”, “otherbss”, “cook”, “active” Default: null Example: "control" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.wlanInterfaces.<name>.fourAddr

Whether to enable 4-address mode with type managed. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.wlanInterfaces.<name>.mac

MAC address to use for the device. If null, then the MAC of the underlying hardware WLAN device is used. INFO: Locally administered MAC addresses are of the form: x2:xx:xx:xx:xx:xx x6:xx:xx:xx:xx:xx xA:xx:xx:xx:xx:xx xE:xx:xx:xx:xx:xx Type: null or string Default: null Example: "02:00:00:00:00:01" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.wlanInterfaces.<name>.meshID

MeshID of interface with type mesh. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.wlanInterfaces.<name>.type

The type of the WLAN interface. The type has to be supported by the underlying hardware of the device. Type: one of “managed”, “ibss”, “monitor”, “mesh”, “wds” Default: "managed" Example: "ibss" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
