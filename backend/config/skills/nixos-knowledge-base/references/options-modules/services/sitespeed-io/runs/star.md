---
module: services.sitespeed-io.runs.*
option_count: 3
source: options.html
---

# services.sitespeed-io.runs.*

## services.sitespeed-io.runs.*.extraArgs

Extra command line arguments to pass to the program. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/sitespeed-io.nix>

## services.sitespeed-io.runs.*.settings

Configuration for sitespeed-io, see https://www.sitespeed.io/documentation/sitespeed.io/configuration/ for available options. The value here will be directly transformed to JSON and passed as --config to the program. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/sitespeed-io.nix>

## services.sitespeed-io.runs.*.urls

URLs the service should monitor. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/sitespeed-io.nix>
