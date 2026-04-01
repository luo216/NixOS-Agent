---
module: networking.wireless.iwd
option_count: 3
source: options.html
---

# networking.wireless.iwd

## networking.wireless.iwd.enable

Whether to enable iwd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/iwd.nix>

## networking.wireless.iwd.package

The iwd package to use. Type: package Default: pkgs.iwd Declared by: <nixpkgs/nixos/modules/services/networking/iwd.nix>

## networking.wireless.iwd.settings

Options passed to iwd. See iwd.config(5) for supported options. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { Network = { EnableIPv6 = true; RoutePriorityOffset = 300; }; Settings = { AutoConnect = true; }; } Declared by: <nixpkgs/nixos/modules/services/networking/iwd.nix>
