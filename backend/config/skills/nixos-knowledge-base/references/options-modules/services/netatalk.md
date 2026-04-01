---
module: services.netatalk
option_count: 4
source: options.html
---

# services.netatalk

## services.netatalk.enable

Whether to enable the Netatalk AFP fileserver. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/netatalk.nix>

## services.netatalk.extmap

File name extension mappings. See extmap.conf(5). for more information. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/netatalk.nix>

## services.netatalk.port

TCP port to be used for AFP. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 548 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/netatalk.nix>

## services.netatalk.settings

Configuration for Netatalk. See afp.conf(5). Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { Global = { "uam list" = "uams_guest.so"; }; Homes = { "basedir regex" = "/home"; path = "afp-data"; }; example-volume = { path = "/srv/volume"; "read only" = true; }; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/netatalk.nix>
