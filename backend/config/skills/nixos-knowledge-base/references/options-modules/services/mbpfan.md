---
module: services.mbpfan
option_count: 5
source: options.html
---

# services.mbpfan

## services.mbpfan.enable

Whether to enable mbpfan, fan controller daemon for Apple Macs and MacBooks. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/mbpfan.nix>

## services.mbpfan.package

The mbpfan package to use. Type: package Default: pkgs.mbpfan Declared by: <nixpkgs/nixos/modules/services/misc/mbpfan.nix>

## services.mbpfan.aggressive

If true, favors higher default fan speeds. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/mbpfan.nix>

## services.mbpfan.settings

INI configuration for Mbpfan. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/mbpfan.nix>

## services.mbpfan.verbose

If true, sets the log level to verbose. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/mbpfan.nix>
