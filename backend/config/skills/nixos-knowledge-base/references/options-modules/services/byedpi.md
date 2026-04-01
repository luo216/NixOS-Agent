---
module: services.byedpi
option_count: 3
source: options.html
---

# services.byedpi

## services.byedpi.enable

Whether to enable the ByeDPI service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/byedpi.nix>

## services.byedpi.package

The byedpi package to use. Type: package Default: pkgs.byedpi Declared by: <nixpkgs/nixos/modules/services/networking/byedpi.nix>

## services.byedpi.extraArgs

Extra command line arguments. Type: list of string Default: [ ] Example: [ "--split" "1" "--disorder" "3+s" "--mod-http=h,d" "--auto=torst" "--tlsrec" "1+s" ] Declared by: <nixpkgs/nixos/modules/services/networking/byedpi.nix>
