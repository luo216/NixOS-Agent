---
module: programs.throne.tunMode
option_count: 2
source: options.html
---

# programs.throne.tunMode

## programs.throne.tunMode.enable

Whether to enable TUN mode of Throne. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/throne.nix>

## programs.throne.tunMode.setuid

Whether to enable setting suid bit for throne-core to run as root, which is less secure than default setcap method but closer to upstream assumptions. Enable this if you find the default setcap method configured in this module doesn’t work for you . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/throne.nix>
