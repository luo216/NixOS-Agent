---
module: services.keyd.keyboards.<name>
option_count: 3
source: options.html
---

# services.keyd.keyboards.<name>

## services.keyd.keyboards.<name>.extraConfig

Extra configuration that is appended to the end of the file. Do not write ids section here, use a separate option for it. You can use this option to define compound layers that must always be defined after the layer they are comprised. Type: strings concatenated with “\n” Default: "" Example: '' [control+shift] h = left '' Declared by: <nixpkgs/nixos/modules/services/hardware/keyd.nix>

## services.keyd.keyboards.<name>.ids

Device identifiers, as shown by keyd(1). Type: list of string Default: [ "*" ] Example: [ "*" "-0123:0456" ] Declared by: <nixpkgs/nixos/modules/services/hardware/keyd.nix>

## services.keyd.keyboards.<name>.settings

Configuration, except ids section, that is written to /etc/keyd/<keyboard>.conf. Appropriate names can be used to write non-alpha keys, for example “equal” instead of “=” sign (see https://github.com/NixOS/nixpkgs/issues/236622). See https://github.com/rvaiya/keyd how to configure. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { main = { capslock = "overload(control, esc)"; rightalt = "layer(rightalt)"; }; rightalt = { h = "left"; j = "down"; k = "up"; l = "right"; }; } Declared by: <nixpkgs/nixos/modules/services/hardware/keyd.nix>
