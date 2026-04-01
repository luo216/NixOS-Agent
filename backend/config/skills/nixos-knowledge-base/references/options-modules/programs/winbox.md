---
module: programs.winbox
option_count: 3
source: options.html
---

# programs.winbox

## programs.winbox.enable

Whether to enable MikroTik Winbox. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/winbox.nix>

## programs.winbox.package

The winbox package to use. Type: package Default: pkgs.winbox Declared by: <nixpkgs/nixos/modules/programs/winbox.nix>

## programs.winbox.openFirewall

Whether to open ports for the MikroTik Neighbor Discovery protocol. Required for Winbox neighbor discovery. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/winbox.nix>
