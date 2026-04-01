---
module: services.snapserver
option_count: 4
source: options.html
---

# services.snapserver

## services.snapserver.enable

Whether to enable snapserver. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>

## services.snapserver.package

The snapcast package to use. Type: package Default: pkgs.snapcast Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>

## services.snapserver.openFirewall

Whether to automatically open the specified ports in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>

## services.snapserver.settings

Snapserver configuration. Refer to the example configuration for possible options. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Declared by: <nixpkgs/nixos/modules/services/audio/snapserver.nix>
