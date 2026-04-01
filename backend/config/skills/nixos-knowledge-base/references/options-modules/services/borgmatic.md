---
module: services.borgmatic
option_count: 4
source: options.html
---

# services.borgmatic

## services.borgmatic.enable

Whether to enable borgmatic. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/borgmatic.nix>

## services.borgmatic.enableConfigCheck

Whether to enable checking all configurations during build time. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/backup/borgmatic.nix>

## services.borgmatic.configurations

Set of borgmatic configurations, see https://torsion.org/borgmatic/docs/reference/configuration/ Type: attribute set of (open submodule of (YAML 1.1 value)) Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/borgmatic.nix>

## services.borgmatic.settings

See https://torsion.org/borgmatic/docs/reference/configuration/ Type: null or (open submodule of (YAML 1.1 value)) Default: null Declared by: <nixpkgs/nixos/modules/services/backup/borgmatic.nix>
