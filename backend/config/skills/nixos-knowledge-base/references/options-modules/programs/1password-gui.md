---
module: programs._1password-gui
option_count: 3
source: options.html
---

# programs._1password-gui

## programs._1password-gui.enable

Whether to enable the 1Password GUI application. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/_1password-gui.nix>

## programs._1password-gui.package

The 1Password GUI package to use. Type: package Default: pkgs._1password-gui Declared by: <nixpkgs/nixos/modules/programs/_1password-gui.nix>

## programs._1password-gui.polkitPolicyOwners

A list of users who should be able to integrate 1Password with polkit-based authentication mechanisms. Type: list of string Default: [ ] Example: ["user1" "user2" "user3"] Declared by: <nixpkgs/nixos/modules/programs/_1password-gui.nix>
