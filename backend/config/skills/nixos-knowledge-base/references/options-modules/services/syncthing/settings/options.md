---
module: services.syncthing.settings.options
option_count: 6
source: options.html
---

# services.syncthing.settings.options

## services.syncthing.settings.options.limitBandwidthInLan

Whether to apply bandwidth limits to devices in the same broadcast domain as the local device. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.options.localAnnounceEnabled

Whether to send announcements to the local LAN, also use such announcements to find other devices. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.options.localAnnouncePort

The port on which to listen and send IPv4 broadcast announcements to. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.options.maxFolderConcurrency

This option controls how many folders may concurrently be in I/O-intensive operations such as syncing or scanning. The mechanism is described in detail in a separate chapter. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.options.relaysEnabled

When true, relays will be connected to and potentially used for device to device connections. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.options.urAccepted

Whether the user has accepted to submit anonymous usage data. The default, 0, mean the user has not made a choice, and Syncthing will ask at some point in the future. “-1” means no, a number above zero means that that version of usage reporting has been accepted. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>
