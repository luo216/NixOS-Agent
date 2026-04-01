---
module: services.autorandr.profiles.<name>.hooks
option_count: 3
source: options.html
---

# services.autorandr.profiles.<name>.hooks

## services.autorandr.profiles.<name>.hooks.postswitch

Postswitch hook executed after mode switch. Type: attribute set of strings concatenated with “\n” Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.hooks.predetect

Predetect hook executed before autorandr attempts to run xrandr. Type: attribute set of strings concatenated with “\n” Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles.<name>.hooks.preswitch

Preswitch hook executed before mode switch. Type: attribute set of strings concatenated with “\n” Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>
