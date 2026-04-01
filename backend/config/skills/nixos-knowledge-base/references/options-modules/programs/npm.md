---
module: programs.npm
option_count: 3
source: options.html
---

# programs.npm

## programs.npm.enable

Whether to enable npm global config. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/npm.nix>

## programs.npm.package

The npm package to use. Type: package Default: pkgs.nodePackages.npm Example: nodePackages_13_x.npm Declared by: <nixpkgs/nixos/modules/programs/npm.nix>

## programs.npm.npmrc

The system-wide npm configuration. See https://docs.npmjs.com/misc/config. Type: strings concatenated with “\n” Default: '' prefix = ''${HOME}/.npm '' Example: '' prefix = ''${HOME}/.npm https-proxy=proxy.example.com init-license=MIT init-author-url=https://www.npmjs.com/ color=true '' Declared by: <nixpkgs/nixos/modules/programs/npm.nix>
