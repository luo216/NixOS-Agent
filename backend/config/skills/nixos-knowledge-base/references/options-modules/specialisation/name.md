---
module: specialisation.<name>
option_count: 2
source: options.html
---

# specialisation.<name>

## specialisation.<name>.configuration

Arbitrary NixOS configuration. Anything you can add to a normal NixOS configuration, you can add here, including imports and config values, although nested specialisations will be ignored. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/system/activation/specialisation.nix>

## specialisation.<name>.inheritParentConfig

Include the entire system’s configuration. Set to false to make a completely differently configured system. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/activation/specialisation.nix>
