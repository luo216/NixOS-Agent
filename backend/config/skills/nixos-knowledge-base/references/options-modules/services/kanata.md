---
module: services.kanata
option_count: 3
source: options.html
---

# services.kanata

## services.kanata.enable

Whether to enable kanata, a tool to improve keyboard comfort and usability with advanced customization. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/kanata.nix>

## services.kanata.package

The kanata package to use. ::: {.note} If danger-enable-cmd is enabled in any of the keyboards, the kanata-with-cmd package should be used. ::: Type: package Default: pkgs.kanata Example: pkgs.kanata-with-cmd Declared by: <nixpkgs/nixos/modules/services/hardware/kanata.nix>

## services.kanata.keyboards

Keyboard configurations. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/kanata.nix>
