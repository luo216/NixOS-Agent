---
module: programs.nh.clean
option_count: 3
source: options.html
---

# programs.nh.clean

## programs.nh.clean.enable

Whether to enable periodic garbage collection with nh clean all. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/nh.nix>

## programs.nh.clean.dates

How often cleanup is performed. Passed to systemd.time The format is described in systemd.time(7). Type: (optionally newline-terminated) single-line string Default: "weekly" Declared by: <nixpkgs/nixos/modules/programs/nh.nix>

## programs.nh.clean.extraArgs

Options given to nh clean when the service is run automatically. See nh clean all --help for more information. Type: (optionally newline-terminated) single-line string Default: "" Example: "--keep 5 --keep-since 3d" Declared by: <nixpkgs/nixos/modules/programs/nh.nix>
