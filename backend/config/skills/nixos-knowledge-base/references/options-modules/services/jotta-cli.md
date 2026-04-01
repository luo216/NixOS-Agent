---
module: services.jotta-cli
option_count: 3
source: options.html
---

# services.jotta-cli

## services.jotta-cli.enable

Whether to enable Jottacloud Command-line Tool. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/jotta-cli.nix>

## services.jotta-cli.package

The jotta-cli package to use. Type: package Default: pkgs.jotta-cli Declared by: <nixpkgs/nixos/modules/services/networking/jotta-cli.nix>

## services.jotta-cli.options

Command-line options passed to jottad. Type: list of string Default: [ "stdoutlog" "datadir" "%h/.jottad/" ] Example: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/jotta-cli.nix>
