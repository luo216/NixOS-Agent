---
module: services.kmonad.keyboards.<name>.defcfg
option_count: 3
source: options.html
---

# services.kmonad.keyboards.<name>.defcfg

## services.kmonad.keyboards.<name>.defcfg.enable

Whether to enable automatic generation of the defcfg block. When this option is set to true, the config option for this keyboard should not include a defcfg block . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>

## services.kmonad.keyboards.<name>.defcfg.allowCommands

Whether to enable keys to run shell commands. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>

## services.kmonad.keyboards.<name>.defcfg.fallthrough

Whether to enable re-emitting unhandled key events. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>
