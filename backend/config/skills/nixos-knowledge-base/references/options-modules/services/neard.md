---
module: services.neard
option_count: 2
source: options.html
---

# services.neard

## services.neard.enable

Whether to enable neard, an NFC daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktops/neard.nix>

## services.neard.settings

Neard INI-style configuration file as a Nix attribute set. See the upstream configuration file. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/desktops/neard.nix>
