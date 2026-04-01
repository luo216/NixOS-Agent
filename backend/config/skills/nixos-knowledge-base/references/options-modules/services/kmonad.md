---
module: services.kmonad
option_count: 4
source: options.html
---

# services.kmonad

## services.kmonad.enable

Whether to enable KMonad: an advanced keyboard manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>

## services.kmonad.package

The KMonad package to use. Type: package Default: pkgs.kmonad Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>

## services.kmonad.extraArgs

Extra arguments to pass to KMonad. Type: list of string Default: [ ] Example: [ "--log-level" "debug" ] Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>

## services.kmonad.keyboards

Keyboard configuration. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>
