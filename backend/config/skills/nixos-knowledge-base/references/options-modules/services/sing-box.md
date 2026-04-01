---
module: services.sing-box
option_count: 3
source: options.html
---

# services.sing-box

## services.sing-box.enable

Whether to enable sing-box universal proxy platform. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/sing-box.nix>

## services.sing-box.package

The sing-box package to use. Type: package Default: pkgs.sing-box Declared by: <nixpkgs/nixos/modules/services/networking/sing-box.nix>

## services.sing-box.settings

The sing-box configuration, see https://sing-box.sagernet.org/configuration/ for documentation. Options containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/sing-box.nix>
