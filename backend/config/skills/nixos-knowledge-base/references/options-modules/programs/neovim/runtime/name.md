---
module: programs.neovim.runtime.<name>
option_count: 4
source: options.html
---

# programs.neovim.runtime.<name>

## programs.neovim.runtime.<name>.enable

Whether this runtime directory should be generated. This option allows specific runtime files to be disabled. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.runtime.<name>.source

Path of the source file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.runtime.<name>.target

Name of symlink. Defaults to the attribute name. Type: string Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>

## programs.neovim.runtime.<name>.text

Text of the file. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/programs/neovim.nix>
