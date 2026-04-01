---
module: services.sanoid
option_count: 7
source: options.html
---

# services.sanoid

## services.sanoid.enable

Whether to enable Sanoid ZFS snapshotting service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.package

The sanoid package to use. Type: package Default: pkgs.sanoid Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.datasets

Datasets to snapshot. Type: attribute set of (open submodule of dataset/template options) Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.extraArgs

Extra arguments to pass to sanoid. See https://github.com/jimsalterjrs/sanoid/#sanoid-command-line-options for allowed options. Type: list of string Default: [ ] Example: [ "--verbose" "--readonly" "--debug" ] Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.interval

Run sanoid at this interval. The default is to run hourly. The format is described in systemd.time(7). Type: string Default: "hourly" Example: "daily" Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.settings

Free-form settings written directly to the config file. See https://github.com/jimsalterjrs/sanoid/blob/master/sanoid.defaults.conf for allowed values. Type: attribute set of dataset/template options Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>

## services.sanoid.templates

Templates for datasets. Type: attribute set of (open submodule of dataset/template options) Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/sanoid.nix>
