---
module: programs.feedbackd
option_count: 3
source: options.html
---

# programs.feedbackd

## programs.feedbackd.enable

Whether to enable the feedbackd D-BUS service and udev rules. Your user needs to be in the feedbackd group to trigger effects . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/feedbackd.nix>

## programs.feedbackd.package

The feedbackd package to use. Type: package Default: pkgs.feedbackd Declared by: <nixpkgs/nixos/modules/programs/feedbackd.nix>

## programs.feedbackd.theme-package

The feedbackd-device-themes package to use. Type: null or package Default: pkgs.feedbackd-device-themes Declared by: <nixpkgs/nixos/modules/programs/feedbackd.nix>
