---
module: documentation.nixos.options
option_count: 2
source: options.html
---

# documentation.nixos.options

## documentation.nixos.options.splitBuild

Whether to split the option docs build into a cacheable and an uncacheable part. Splitting the build can substantially decrease the amount of time needed to build the manual, but some user modules may be incompatible with this splitting. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/misc/documentation.nix>

## documentation.nixos.options.warningsAreErrors

Treat warning emitted during the option documentation build (eg for missing option descriptions) as errors. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/misc/documentation.nix>
