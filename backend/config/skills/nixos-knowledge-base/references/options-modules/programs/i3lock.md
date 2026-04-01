---
module: programs.i3lock
option_count: 3
source: options.html
---

# programs.i3lock

## programs.i3lock.enable

Whether to enable i3lock. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/i3lock.nix>

## programs.i3lock.package

The i3lock package to use. ::: {.note} The i3lock package must include a i3lock file or link in its out directory in order for the u2fSupport option to work correctly. ::: Type: package Default: pkgs.i3lock Example: i3lock-color Declared by: <nixpkgs/nixos/modules/programs/i3lock.nix>

## programs.i3lock.u2fSupport

Whether to enable U2F support in the i3lock program. U2F enables authentication using a hardware device, such as a security key. When U2F support is enabled, the i3lock program will set the setuid bit on the i3lock binary and enable the pam u2fAuth service, Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/i3lock.nix>
