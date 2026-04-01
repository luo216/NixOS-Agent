---
module: programs.screen
option_count: 3
source: options.html
---

# programs.screen

## programs.screen.enable

Whether to enable screen, a basic terminal multiplexer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/screen.nix>

## programs.screen.package

The screen package to use. Type: package Default: pkgs.screen Declared by: <nixpkgs/nixos/modules/programs/screen.nix>

## programs.screen.screenrc

The contents of /etc/screenrc file Type: strings concatenated with “\n” Default: "" Example: '' defscrollback 10000 startup_message off '' Declared by: <nixpkgs/nixos/modules/programs/screen.nix>
