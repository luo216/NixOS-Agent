---
module: services.fprintd.tod
option_count: 2
source: options.html
---

# services.fprintd.tod

## services.fprintd.tod.enable

Whether to enable Touch OEM Drivers library support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/fprintd.nix>

## services.fprintd.tod.driver

Touch OEM Drivers (TOD) package to use. Type: package Example: pkgs.libfprint-2-tod1-goodix Declared by: <nixpkgs/nixos/modules/services/security/fprintd.nix>
