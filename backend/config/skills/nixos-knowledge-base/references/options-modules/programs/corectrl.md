---
module: programs.corectrl
option_count: 2
source: options.html
---

# programs.corectrl

## programs.corectrl.enable

Whether to enable CoreCtrl, a tool to overclock amd graphics cards and processors. Add your user to the corectrl group to run corectrl without needing to enter your password . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/corectrl.nix>

## programs.corectrl.package

The corectrl package to use. Useful for overriding the configuration options used for the package. Type: package Default: pkgs.corectrl Declared by: <nixpkgs/nixos/modules/hardware/corectrl.nix>
