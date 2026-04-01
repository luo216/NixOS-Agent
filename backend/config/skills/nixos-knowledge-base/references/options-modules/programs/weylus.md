---
module: programs.weylus
option_count: 4
source: options.html
---

# programs.weylus

## programs.weylus.enable

Whether to enable weylus, which turns your smart phone into a graphic tablet/touch screen for your computer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/weylus.nix>

## programs.weylus.package

The weylus package to use. Type: package Default: pkgs.weylus Declared by: <nixpkgs/nixos/modules/programs/weylus.nix>

## programs.weylus.openFirewall

Open ports needed for the functionality of the program. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/weylus.nix>

## programs.weylus.users

To enable stylus and multi-touch support, the user you’re going to use must be added to this list. These users can synthesize input events system-wide, even when another user is logged in - untrusted users should not be added. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/weylus.nix>
