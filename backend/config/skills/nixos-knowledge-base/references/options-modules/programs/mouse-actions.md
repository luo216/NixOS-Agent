---
module: programs.mouse-actions
option_count: 3
source: options.html
---

# programs.mouse-actions

## programs.mouse-actions.enable

Whether to install and set up mouse-actions and it’s udev rules. Note that only users in the “uinput” group will be able to use the package Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/mouse-actions.nix>

## programs.mouse-actions.package

The mouse-actions package to use. Type: package Default: pkgs.mouse-actions Example: mouse-actions-gui Declared by: <nixpkgs/nixos/modules/programs/mouse-actions.nix>

## programs.mouse-actions.autorun

Whether to start a user service to run mouse-actions on startup. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/mouse-actions.nix>
