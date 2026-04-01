---
module: services.keyd
option_count: 2
source: options.html
---

# services.keyd

## services.keyd.enable

Whether to enable keyd, a key remapping daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/keyd.nix>

## services.keyd.keyboards

Configuration for one or more device IDs. Corresponding files in the /etc/keyd/ directory are created according to the name of the keys (like default or externalKeyboard). Type: attribute set of (submodule) Default: { } Example: { default = { ids = [ "*" ]; settings = { main = { capslock = "overload(control, esc)"; }; }; }; externalKeyboard = { ids = [ "1ea7:0907" ]; settings = { main = { esc = capslock; }; }; }; } Declared by: <nixpkgs/nixos/modules/services/hardware/keyd.nix>
