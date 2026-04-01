---
module: services.sitespeed-io
option_count: 6
source: options.html
---

# services.sitespeed-io

## services.sitespeed-io.enable

Whether to enable Sitespeed.io. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/sitespeed-io.nix>

## services.sitespeed-io.package

The sitespeed-io package to use. Type: package Default: pkgs.sitespeed-io Declared by: <nixpkgs/nixos/modules/services/networking/sitespeed-io.nix>

## services.sitespeed-io.dataDir

The base sitespeed-io data directory. Type: string Default: "/var/lib/sitespeed-io" Declared by: <nixpkgs/nixos/modules/services/networking/sitespeed-io.nix>

## services.sitespeed-io.period

Systemd calendar expression when to run. See systemd.time(7). Type: string Default: "hourly" Declared by: <nixpkgs/nixos/modules/services/networking/sitespeed-io.nix>

## services.sitespeed-io.runs

A list of run configurations. The service will call sitespeed-io once for every run listed here. This lets you examine different websites with different sitespeed-io settings. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/sitespeed-io.nix>

## services.sitespeed-io.user

User account under which sitespeed-io runs. Type: string Default: "sitespeed-io" Declared by: <nixpkgs/nixos/modules/services/networking/sitespeed-io.nix>
