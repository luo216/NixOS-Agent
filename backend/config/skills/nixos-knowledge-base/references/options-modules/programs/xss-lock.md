---
module: programs.xss-lock
option_count: 3
source: options.html
---

# programs.xss-lock

## programs.xss-lock.enable

Whether to enable xss-lock. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/xss-lock.nix>

## programs.xss-lock.extraOptions

Additional command-line arguments to pass to xss-lock. Type: list of string Default: [ ] Example: [ "--ignore-sleep" ] Declared by: <nixpkgs/nixos/modules/programs/xss-lock.nix>

## programs.xss-lock.lockerCommand

Locker to be used with xsslock Type: strings concatenated with " " Default: "${pkgs.i3lock}/bin/i3lock" Example: "${pkgs.i3lock-fancy}/bin/i3lock-fancy" Declared by: <nixpkgs/nixos/modules/programs/xss-lock.nix>
