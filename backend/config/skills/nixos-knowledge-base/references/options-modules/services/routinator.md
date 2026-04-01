---
module: services.routinator
option_count: 5
source: options.html
---

# services.routinator

## services.routinator.enable

Whether to enable Routinator 3000. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.package

The routinator package to use. Type: package Default: pkgs.routinator Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.extraArgs

Extra arguments passed to routinator, see https://routinator.docs.nlnetlabs.nl/en/stable/manual-page.html#options for options."; Type: list of string Default: [ ] Example: [ "--no-rir-tals" ] Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.extraServerArgs

Extra arguments passed to the server subcommand, see https://routinator.docs.nlnetlabs.nl/en/stable/manual-page.html#subcmd-server for options."; Type: list of string Default: [ ] Example: [ "--rtr-client-metrics" ] Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.settings

Configuration for Routinator 3000, see https://routinator.docs.nlnetlabs.nl/en/stable/manual-page.html#configuration-file for options. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>
