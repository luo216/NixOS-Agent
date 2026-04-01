---
module: programs.ghidra
option_count: 3
source: options.html
---

# programs.ghidra

## programs.ghidra.enable

Whether to enable Ghidra, a software reverse engineering (SRE) suite of tools. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/ghidra.nix>

## programs.ghidra.package

The ghidra package to use. Type: package Default: pkgs.ghidra Example: ghidra-bin Declared by: <nixpkgs/nixos/modules/programs/ghidra.nix>

## programs.ghidra.gdb

Whether to add to gdbinit the python modules required to make Ghidra’s debugger work. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/ghidra.nix>
