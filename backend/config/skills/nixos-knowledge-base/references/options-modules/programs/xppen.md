---
module: programs.xppen
option_count: 2
source: options.html
---

# programs.xppen

## programs.xppen.enable

Whether to enable XPPen PenTablet application. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/xppen.nix>

## programs.xppen.package

The xppen_4 package to use. Use xppen_4 for newer and xppen_3 for older tablets. To check which version of the driver you need, go to https://www.xp-pen.com/download/ then select your tablet and look for the major version in the available files for Linux. Type: package Default: pkgs.xppen_4 Example: pkgs.xppen_3 Declared by: <nixpkgs/nixos/modules/programs/xppen.nix>
