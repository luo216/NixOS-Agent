---
module: services.mchprs
option_count: 8
source: options.html
---

# services.mchprs

## services.mchprs.enable

Whether to enable MCHPRS, a Minecraft server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.package

The mchprs package to use. Type: package Default: pkgs.mchprs Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.dataDir

Directory to store MCHPRS database and other state/data files. Type: absolute path Default: "/var/lib/mchprs" Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.declarativeSettings

Whether to use a declarative configuration for MCHPRS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.declarativeWhitelist

Whether to use a declarative whitelist. The options services.mchprs.whitelist.list will be applied if and only if set to true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.maxRuntime

Automatically restart the server after services.mchprs.maxRuntime. The systemd.time(7) time span format is described here: https://www.freedesktop.org/software/systemd/man/systemd.time.html#Parsing Time Spans. If null, then the server is not restarted automatically. Type: string Default: "infinity" Example: "7d" Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.openFirewall

Whether to open ports in the firewall for the server. Only has effect when services.mchprs.declarativeSettings is true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.settings

Configuration for MCHPRS via Config.toml. See https://github.com/MCHPR/MCHPRS/blob/master/README.md for documentation. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>
