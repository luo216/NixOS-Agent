---
module: services.multipath
option_count: 10
source: options.html
---

# services.multipath

## services.multipath.enable

Whether to enable the device mapper multipath (DM-MP) daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.package

The multipath-tools package to use. Type: package Default: pkgs.multipath-tools Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.blacklist

This section defines which devices should be excluded from the multipath topology discovery. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.blacklist_exceptions

This section defines which devices should be included in the multipath topology discovery, despite being listed in the blacklist section. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.defaults

This section defines default values for attributes which are used whenever no values are given in the appropriate device or multipath sections. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices

This option allows you to define arrays for use in multipath groups. Type: list of (submodule) Default: [ ] Example: [ { vendor = "\"COMPELNT\""; product = "\"Compellent Vol\""; path_checker = "tur"; no_path_retry = "queue"; max_sectors_kb = 256; }, ... ] Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.extraConfig

Lines to append to default multipath.conf Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.extraConfigFile

Append an additional file’s contents to /etc/multipath.conf Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.overrides

This section defines values for attributes that should override the device-specific settings for all devices. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.pathGroups

This option allows you to define multipath groups as described in http://christophe.varoqui.free.fr/usage.html. Type: list of (submodule) Example: [ { wwid = "360080e500043b35c0123456789abcdef"; alias = 10001234; array = "bigarray.example.com"; fsType = "zfs"; # optional options = "ro"; # optional }, ... ] Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>
