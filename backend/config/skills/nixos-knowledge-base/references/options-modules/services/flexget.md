---
module: services.flexget
option_count: 7
source: options.html
---

# services.flexget

## services.flexget.enable

Whether to enable FlexGet daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/flexget.nix>

## services.flexget.package

The flexget package to use. Type: package Default: pkgs.flexget Declared by: <nixpkgs/nixos/modules/services/torrent/flexget.nix>

## services.flexget.config

The YAML configuration for FlexGet. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/torrent/flexget.nix>

## services.flexget.homeDir

Where files live. Type: absolute path Default: "/var/lib/deluge" Example: "/home/flexget" Declared by: <nixpkgs/nixos/modules/services/torrent/flexget.nix>

## services.flexget.interval

When to perform a flexget run. See man 7 systemd.time for the format. Type: string Default: "10m" Example: "1h" Declared by: <nixpkgs/nixos/modules/services/torrent/flexget.nix>

## services.flexget.systemScheduler

When true, execute the runs via the flexget-runner.timer. If false, you have to specify the settings yourself in the YML file. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/torrent/flexget.nix>

## services.flexget.user

The user under which to run flexget. Type: string Default: "deluge" Example: "some_user" Declared by: <nixpkgs/nixos/modules/services/torrent/flexget.nix>
