---
module: services.auto-epp
option_count: 3
source: options.html
---

# services.auto-epp

## services.auto-epp.enable

Whether to enable auto-epp for amd active pstate. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/auto-epp.nix>

## services.auto-epp.package

The auto-epp package to use. Type: package Default: pkgs.auto-epp Declared by: <nixpkgs/nixos/modules/services/hardware/auto-epp.nix>

## services.auto-epp.settings

Settings for the auto-epp application. See upstream example: https://github.com/jothi-prasath/auto-epp/blob/master/sample-auto-epp.conf Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/auto-epp.nix>
