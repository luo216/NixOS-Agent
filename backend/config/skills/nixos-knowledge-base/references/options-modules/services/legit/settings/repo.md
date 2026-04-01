---
module: services.legit.settings.repo
option_count: 4
source: options.html
---

# services.legit.settings.repo

## services.legit.settings.repo.ignore

Repositories to ignore. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/legit.nix>

## services.legit.settings.repo.mainBranch

Main branch to look for. Type: list of string Default: [ "main" "master" ] Declared by: <nixpkgs/nixos/modules/services/networking/legit.nix>

## services.legit.settings.repo.readme

Readme files to look for. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/legit.nix>

## services.legit.settings.repo.scanPath

Directory where legit will scan for repositories. Type: absolute path Default: "/var/lib/legit" Declared by: <nixpkgs/nixos/modules/services/networking/legit.nix>
