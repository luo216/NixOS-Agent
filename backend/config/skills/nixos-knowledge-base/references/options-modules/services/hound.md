---
module: services.hound
option_count: 7
source: options.html
---

# services.hound

## services.hound.enable

Whether to enable hound. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/search/hound.nix>

## services.hound.package

The hound package to use. Type: package Default: pkgs.hound Declared by: <nixpkgs/nixos/modules/services/search/hound.nix>

## services.hound.group

Group the hound daemon should execute under. Type: string Default: "hound" Declared by: <nixpkgs/nixos/modules/services/search/hound.nix>

## services.hound.home

The path to use as hound’s $HOME. If the default user “hound” is configured then this is the home of the “hound” user. Type: absolute path Default: "/var/lib/hound" Declared by: <nixpkgs/nixos/modules/services/search/hound.nix>

## services.hound.listen

Listen on this [IP]:port Type: string Default: "0.0.0.0:6080" Example: ":6080" Declared by: <nixpkgs/nixos/modules/services/search/hound.nix>

## services.hound.settings

The full configuration of the Hound daemon. See the upstream documentation https://github.com/hound-search/hound/blob/main/docs/config-options.md for details. Note The dbpath should be an absolute path to a writable directory. :::.com/hound-search/hound/blob/main/docs/config-options.md>. Type: JSON value Example: { max-concurrent-indexers = 2; repos.nixpkgs.url = "https://www.github.com/NixOS/nixpkgs.git"; } Declared by: <nixpkgs/nixos/modules/services/search/hound.nix>

## services.hound.user

User the hound daemon should execute under. Type: string Default: "hound" Declared by: <nixpkgs/nixos/modules/services/search/hound.nix>
